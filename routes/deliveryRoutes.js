const express = require('express');
const router = express.Router();
const {
  updateLocation,
  updateOrderStatus,
  getOrderStatus,
} = require('../controllers/deliveryController');
const DeliveryExecutive = require('../models/DeliveryExecutive');

router.post('/update-location', updateLocation);
router.post('/update-order', updateOrderStatus);
router.get('/order/:id', getOrderStatus);

router.get('/executives', async (req, res) => {
  try {
    const executives = await DeliveryExecutive.find();
    res.json(executives);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/create-executive', async (req, res) => {
  const { name } = req.body;
  try {
    const newExec = await DeliveryExecutive.create({ name });
    res.json({ message: 'Executive created', executive: newExec });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
