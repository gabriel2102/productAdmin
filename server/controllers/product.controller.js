const Product = require('../models/product.model');

module.exports.createProduct = (req, res) => {
    Product.create(req.body.product)
    .then(newProduct => res.status(201).json(newProduct))
    .catch(err => res.status(400).json(err));
}