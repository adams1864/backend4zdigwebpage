const contactService = require('../services/contactService');

exports.submitForm = async (req, res) => {
    try {
        await contactService.saveContact(req.body);
        res.status(200).json({ message: 'Contact form submitted successfully.' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
