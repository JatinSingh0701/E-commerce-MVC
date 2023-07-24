const Product = require("../models/product.model");

exports.getHome = (req, res) => {
    const products = Product.fetchAll();
    res.render("home", { products: products });
};
