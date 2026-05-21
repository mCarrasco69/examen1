import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./config/db";
import gastoRoutes from "./routes/gastoRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(gastoRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
