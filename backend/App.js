import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import orderRoutes from "./routes/order.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("✅ Server is working");
});

// ✅ استخدم async function لتشغيل السيرفر بعد الاتصال بالداتا بيز
const startServer = async () => {
  try {
    await connectDb(); // الاتصال بقاعدة البيانات
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // خروج في حالة وجود خطأ
  }
};

startServer();
