const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const UserRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");
const homeRoutes = require("./routes/home.routes");


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(homeRoutes);
app.use(UserRoutes);
app.use(productRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});


