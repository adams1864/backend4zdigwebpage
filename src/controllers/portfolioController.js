const portfolioService = require('../services/portfolioService');

exports.getAllPortfolios = async (req, res) => {
    try {
        const portfolios = await portfolioService.getAllPortfolios();
        res.status(200).json(portfolios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.addPortfolio = async (req, res) => {
    try {
        const newPortfolio = await portfolioService.addPortfolio(req.body);
        res.status(201).json(newPortfolio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
