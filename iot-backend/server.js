const express = require("express");
const bodyParser = require("body-parser");
const devicesRoutes = require("./routes/index");
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // تمكين إرسال الكوكيز
}));
app.use(cookieParser());


// Middleware
app.use(bodyParser.json());

// ربط الـ Routes
app.use(devicesRoutes);

// تشغيل الخادم
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
