const contactModel = require('../models/contactModel');

exports.saveContact = async (contactData) => {
    return await contactModel.save(contactData);
};
