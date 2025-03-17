const express = require("express");
const User = require("../models/usuariosModels"); // Asegúrate de que el modelo está bien importado
const router = express.Router();
const app = express();

// BASIC QUERIES

// Obtener usuarios por rol
router.get("/role/:role", async (req, res) => {
  try {
    const users = await User.find({ role: req.params.role });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Buscar usuarios por nombre
router.get("/name/:name", async (req, res) => {
  try {
    const users = await User.find({ $text: { $search: req.params.name } });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener usuarios por rango de fechas de creación
router.get("/date-range", async (req, res) => {
  const { startDate, endDate } = req.query;
  try {
    const users = await User.find({
      createdAt: {
        $gte: new Date(startDate),
        $lt: new Date(endDate),
      },
    });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CRUD

// Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({
      error: "Error al crear un nuevo usuario",
      message: error.message,
    });
  }
});

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener usuarios",
      message: error.message,
    });
  }
});

// Obtener un usuario por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error: "Error al obtener el usuario",
      message: error.message,
    });
  }
});

// Actualizar un usuario por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      error: "Error al actualizar el usuario",
      message: error.message,
    });
  }
});

// Eliminar un usuario por ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({
        error: "Usuario no encontrado",
      });
    }
    res.status(200).json({
      message: "Usuario eliminado exitosamente",
    });
  } catch (error) {
    res.status(500).json({
      error: "Error al eliminar el usuario",
      message: error.message,
    });
  }
});

module.exports = router;
