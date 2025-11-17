const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res.status(400).json({ message: "Username & password wajib" });

    db.query("SELECT * FROM users WHERE username=?", [username], (err, result) => {
        if (result.length > 0)
            return res.status(400).json({ message: "Username sudah digunakan" });

        const hashed = bcrypt.hashSync(password, 10);

        db.query(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, hashed],
            (err2) => {
                if (err2) throw err2;
                res.json({ message: "Registrasi berhasil" });
            }
        );
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    db.query("SELECT * FROM users WHERE username=?", [username], (err, result) => {
        if (result.length === 0)
            return res.status(400).json({ message: "User tidak ditemukan" });

        const user = result[0];

        const match = bcrypt.compareSync(password, user.password);
        if (!match) return res.status(400).json({ message: "Password salah" });

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            message: "Login berhasil",
            token
        });
    });
};
