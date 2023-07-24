const Product = require("../models/product.model");

// Get request for products
exports.getProducts = (req, res) => {
  const products = Product.fetchAll();
  res.render("products", { products: products });
};

exports.getProduct = (req, res) => {
  const product = Product.findById(req.params.id);
  res.render("product", {
    product: product,
  });
};

exports.getAddProduct = (req, res) => {
  res.render("add-product", {
    isAddProduct: true,
    isEditProduct: false,
  });
};

exports.getEditProduct = (req, res) => {
  const product = Product.findById(req.params.id);
  res.render("add-product", {
    isAddProduct: false,
    isEditProduct: true,
    product: product,
  });
};

// Post request for products
exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.name, req.body.price);
  product.save();
  res.redirect("/products");
};

exports.postEditProduct = (req, res) => {
  const product = Product.findById(req.params.id);
  product.name = req.body.name;
  product.price = req.body.price;
  Product.edit(req.params.id,this);
  res.redirect("/products");
};
