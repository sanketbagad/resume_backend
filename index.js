import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import CareerRoutes from "./routes/CareerRoutes.js";
import NewsLetterRoutes from "./routes/NewsLetterRoutes.js";
import ContactRoutes from "./routes/ContactRoutes.js";

const app = express();

app.use(cors({
  origin: ["https://www.re-sume.in", "https://re-sume.in"],
}));

app.use(function(req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = ['https://www.re-sume.in', 'https://re-sume.in'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/careers", CareerRoutes);
app.use("/api/newsletter", NewsLetterRoutes);
app.use("/api/contact", ContactRoutes);


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
