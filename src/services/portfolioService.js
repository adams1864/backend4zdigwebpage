const portfolioModel = require('../models/portfolioModel');

exports.getAllPortfolios = async () => {
    return await portfolioModel.getAll();
};

exports.addPortfolio = async (portfolioData) => {
    return await portfolioModel.create(portfolioData);
};
