const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { notFound, handleErr } = require("./api/middlewares/handleError");

//Router
const authRouter = require("./api/routes/auth");
const userRouter = require("./api/routes/user");
const productRouter = require("./api/routes/product");
const categoryRouter = require("./api/routes/category");
const discountRouter = require("./api/routes/discount");
const oderRouter = require("./api/routes/oder");
const cartRouter = require("./api/routes/cart");
const cartItemRouter = require("./api/routes/cart-item");
const oderItemRouter = require("./api/routes/oder-item");
const reviewRouter = require("./api/routes/review");

//

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
require("./api/config/connectDB");

const PORT = process.env.PORT || 3000;

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/discount", discountRouter);
app.use("/oder", oderRouter);
app.use("/cart", cartRouter);
app.use("/cartItem", cartItemRouter);
app.use("/oderItem", oderItemRouter);
app.use("/review", reviewRouter);

app.use(notFound);
app.use(handleErr);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}.`);
});
