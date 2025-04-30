
const express = require('express');
const router = express.Router();
const Sensor = require('../models/Sensor');

// GET /api/sensores - Obtener todos
router.get('/', async (req, res, next) => {
  try {
    const sensores = await Sensor.find();
    res.json(sensores);
  } catch (err) {
    next(err); // Pasa el error al middleware
  }
});

// POST /api/sensores - Crear nuevo
router.post('/', async (req, res, next) => {
  try {
    const { nombre } = req.body;
    
    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es requerido' });
    }
    const nuevoSensor = new Sensor({ nombre });
    const sensorGuardado = await nuevoSensor.save();
    
    res.status(201).json(sensorGuardado);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
    