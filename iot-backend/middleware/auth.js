const jwt = require("jsonwebtoken");
const { users } = require("../data/store");
const cookie = require('cookie-parser');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const SECRET = process.env.SECRET; 

function login(req, res) {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { username: user.username, role: user.role },
        SECRET,
        { expiresIn: "1h" }
    );

    res.cookie("token", token, {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: "Strict",
        maxAge: 60 * 60 * 1000
    });

    res.json({ message: "Login successful", token });
}

module.exports = { login, SECRET };