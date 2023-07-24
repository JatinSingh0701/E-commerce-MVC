const products = [
  { id: 0, name: "product 1", price: 1000 },
  { id: 1, name: "product 2", price: 2000 },
  { id: 2, name: "product 3", price: 3000 },
];
let currentId = 3;

class Product {
  constructor(name, price) {
    this.id = currentId++;
    this.name = name;
    this.price = price;
  }

  save() {
    products.push(this);
  }
  static edit(id, product) {
    products[product.id] = product;
  }

  static fetchAll() {
    return products;
  }

  static findById(id) {
    return products[id];
  }
}

module.exports = Product;
