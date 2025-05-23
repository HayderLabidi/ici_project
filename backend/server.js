import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import orderRouter from "./routers/orderRouter.js";  // Added import for orderRouter

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost:27017/iciv2")

// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not found" });
//   }
// });
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use('/api/orders', orderRouter);  // Now orderRouter is defined

app.use((err,req,res,next) => {
  res.status(500).send({ message: err.message});
});

app.get("/api/config/paypal", (req, res) => {
  // Make sure there are no quotes or other characters that would break the URL
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
