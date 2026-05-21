import { Router } from "express";
import Gasto from "../models/Gasto";

const router = Router();

// POST /gasto - Crear un nuevo gasto
router.post("/gasto", async (req, res) => {
  try {
    const { categoria, monto, fecha } = req.body;

    if (!categoria || !monto || !fecha) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const nuevoGasto = await Gasto.create({
      categoria,
      monto,
      fecha,
    });

    res.status(201).json(nuevoGasto);
  } catch (error) {
    console.error("Error al crear gasto:", error);
    res.status(500).json({ error: "Error al crear gasto" });
  }
});

// GET /gasto - Obtener todos los gastos
router.get("/gasto", async (req, res) => {
  try {
    const gastos = await Gasto.findAll();
    res.json(gastos);
  } catch (error) {
    console.error("Error al obtener gastos:", error);
    res.status(500).json({ error: "Error al obtener gastos" });
  }
});

export default router;
