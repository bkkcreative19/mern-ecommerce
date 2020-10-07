import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRouter from "./routes/products.js";
import userRouter from "./routes/users.js";
dotenv.config();

// App
const app = express();

// Database
connectDB();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

// Routes
app.use("/api", productRouter);
app.use("/api/users", userRouter);

// Error Handler

app.use(notFound);
app.use(errorHandler);

// Port
const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`server running in ${process.env.NODE_ENV} on port ${port}`);
});
