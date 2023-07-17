const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
var mongoose = require("mongoose");

dotenv.config();

const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const corsOptions = {
  origin: "https://mern-ecommerce-blond.vercel.app",
};

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(process.env.PORT, () => {
      console.log("Listening on port " + process.env.PORT);
      console.log("Connected to DB!");
    });
  })
  .catch((error) => {
    console.log(error);
  });
