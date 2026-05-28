import pool from '../db.js';

export const getTricks = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM tricks');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createTrick = async (req, res) => {
    const { name, image, progress, category, difficulty, description, steps } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO tricks (name, image, progress, category, difficulty, description, steps) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [name, image, progress, category, difficulty, description, JSON.stringify(steps)]
        );
        res.status(201).json({ id: result.insertId, name, category });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};