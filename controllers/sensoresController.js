
const Sensor = require('../models/Sensor');
exports.obtenerSensores = async (req, res, next) => {
  try {
    const sensores = await Sensor.find();
    res.json(sensores);
  } catch (err) {
    next(err);
  }
};
exports.crearSensor = async (req, res, next) => {
  try {
    const { nombre } = req.body;
    const nuevoSensor = new Sensor({ nombre });
    const sensorGuardado = await nuevoSensor.save();
    res.status(201).json(sensorGuardado);
  } catch (err) {
    next(err);
  }
};
    