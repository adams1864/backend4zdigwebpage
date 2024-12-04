const db = require('../config/db');

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM portfolio');
    return rows;
};

exports.create = async (data) => {
    const { title, description, image_url, date_added } = data;
    const [result] = await db.query(
        'INSERT INTO portfolio (title, description, image_url, date_added) VALUES (?, ?, ?, ?)',
        [title, description, image_url, date_added]
    );
    return { id: result.insertId, ...data };
};
