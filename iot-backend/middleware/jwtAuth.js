const jwt = require("jsonwebtoken");
const { SECRET } = require("./auth"); // استيراد SECRET من ملف auth.js


const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // استخراج التوكن من الرأس
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid or expired token' });
        }
        req.user = decoded; // حفظ بيانات المستخدم
        next(); // الانتقال إلى الدالة التالية
    });
};


function onlyAdmin(req, res, next) {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only." });
    }
    next();
}

module.exports = { verifyToken, onlyAdmin };