const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const devicesRoutes = require("../routes/index");
const cors = require('cors');
const app = express();

// Middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // تمكين إرسال الكوكيز
}));
app.use(devicesRoutes);

describe("Device Routes", () => {
    let adminToken;
    let operatorToken;

    // قبل كل اختبار، نقوم بتسجيل الدخول للحصول على التوكن
    beforeAll(async () => {
        const adminLogin = await request(app)
            .post("/login")
            .send({ username: "admin", password: "admin123" });
        adminToken = adminLogin.body.token; // حفظ التوكن

        const operatorLogin = await request(app)
            .post("/login")
            .send({ username: "operator", password: "operator123" });
        operatorToken = operatorLogin.body.token; // حفظ التوكن
    });

    // اختبار تسجيل الدخول
    it("should return 'Login successful' when credentials are valid", async () => {
        const res = await request(app)
            .post("/login")
            .send({ username: "admin", password: "admin123" });

        expect(res.status).toBe(200);
        expect(res.text).toBe("Login successful");
    });

    // اختبار الوصول إلى قائمة الأجهزة
    it("should return a list of devices", async () => {
        const res = await request(app).get("/devices")
            .set("Authorization", `Bearer ${adminToken}`); // استخدام توكن admin

        expect(res.status).toBe(200);
        expect(res.body).toHaveLength(2); // عدد الأجهزة المبدئية
    });

    // اختبار الوصول إلى تفاصيل جهاز (فقط للمسؤول)
    it("should return device details for an admin user", async () => {
        const res = await request(app)
            .get("/device/1")
            .set("Authorization", `Bearer ${adminToken}`);  // استخدام توكن admin

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("id", "1");
        expect(res.body).toHaveProperty("name", "sensor-1");
    });

    // اختبار الوصول إلى تفاصيل جهاز لمستخدم غير مسؤول
    it("should return 403 for non-admin users accessing device details", async () => {
        const res = await request(app)
            .get("/device/1")
            .set("Authorization", `Bearer ${operatorToken}`);  // استخدام توكن operator

        expect(res.status).toBe(403);  // يجب أن يعيد حالة "ممنوع الوصول" للمستخدم العادي
    });
});
