const express = require("express");
const app = express();



// Route for "GET /products"
app.get("/products", (req, res) => {
  res.end("All Products");
});

// Route for "GET /product/:id"
app.get("/product/:id", (req, res) => {
  res.end("Product with id: " + req.params.id);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
