const products = [
  "id : 0, name : 'product 1', price : 1000",
  "id : 1, name : 'product 2', price : 2000",
  "id : 2, name : 'product 3', price : 3000",
];
let currentId = 0;

module.exports = class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static fetchAll() {
    return products;
  }
};
