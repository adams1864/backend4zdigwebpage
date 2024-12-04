const db = require('../config/db');

exports.save = async (data) => {
    const { name, email, message } = data;
    await db.query(
        'INSERT INTO contact (name, email, message, submitted_at) VALUES (?, ?, ?, NOW())',
        [name, email, message]
    );
};
