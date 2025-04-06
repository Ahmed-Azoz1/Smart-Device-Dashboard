const express = require("express");
const router = express.Router();

const { devices } = require("../data/store"); // البيانات المحفوظة في الذاكرة
const { login } = require("../middleware/auth");
const { verifyToken, onlyAdmin } = require("../middleware/jwtAuth");

// تسجيل الدخول => يرجع JWT
router.post("/login", login);

// استرجاع قائمة الأجهزة (مفتوح لأي مستخدم بعد التوثيق)
router.get("/devices", verifyToken, (req, res) => {
    try {
        res.json(devices);
    } catch (error) {
        console.error(error);
        res.status(500).send("Unable to retrieve devices");
    }
});

// استرجاع جهاز محدد (Admins فقط)
router.get("/device/:id", verifyToken, onlyAdmin, (req, res) => {
    try {
        const { id } = req.params;
        const device = devices.find((device) => device.id === id);

        if (!device) {
            return res.status(404).send("Device not found");
        }

        res.json(device);
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong while retrieving the device");
    }
});

module.exports = router;
