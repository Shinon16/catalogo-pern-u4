
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import productsRouter from "./routes/products.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173"
}));
app.use(morgan("dev"));
app.use(express.json());

// Comprobar que el servidor funciona
app.get("/health", (req, res) => {
  res.status(200).json({
    message: "Backend funcionando correctamente"
  });
});

// Consultar los productos almacenados en PostgreSQL
app.use("/api/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
