const { Car } = require('../models');

const getAllCars = async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCar = async (req, res) => {
  try {
    const car = await Car.create(req.body);
    res.status(201).json(car);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllCars,
  createCar
  // Adicione outros métodos (getCarById, updateCar, deleteCar)
};