import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const SECRET_KEY = process.env.SECRET_KEY;

const user = {
    id: 1,
    username: "test",
    password: "1234"
};


router.post('/login', (req, res) => {
    const { username, password } = req.body;
  

    if (username === user.username && password === user.password) {
        const token = jwt.sign(
            { id: user.id, username: user.username },
            SECRET_KEY,
            { expiresIn: '1h' }
        );
        res.json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

router.get('/protected', (req, res) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send('Token required');
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        res.json({ message: 'Protected data accessed', user: decoded });
    });
});

export default router;
