const express = require('express');
const router = express.Router();
const {
  updateLocation,
  updateOrderStatus,
  getOrderStatus,
} = require('../controllers/deliveryController');

const DeliveryExecutive = require('../models/DeliveryExecutive');

// Update Executive Location via POST
router.post('/update-location', updateLocation);

// Order Status Endpoints
router.post('/update-order', updateOrderStatus);
router.get('/order/:id', getOrderStatus);

// Get all executives
router.get('/executives', async (req, res) => {
  try {
    const executives = await DeliveryExecutive.find();
    res.json(executives);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔄 Get executive by executive_id (used in login)
router.get('/executives/:id', async (req, res) => {
  try {
    const executive = await DeliveryExecutive.findOne({ executive_id: req.params.id });
    if (!executive) return res.status(404).json({ error: 'Executive not found' });
    res.json(executive);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new executive (admin functionality)
router.post('/create-executive', async (req, res) => {
  const { name, executive_id, role } = req.body;
  try {
    const newExec = await DeliveryExecutive.create({ name, executive_id, role });
    res.json({ message: 'Executive created', executive: newExec });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
