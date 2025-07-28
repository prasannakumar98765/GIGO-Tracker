const express = require('express');
const router = express.Router();
const {
  updateLocation,
  updateOrderStatus,
  getOrderStatus,
} = require('../controllers/deliveryController');
const DeliveryExecutive = require('../models/DeliveryExecutive');

// Update executive location
router.post('/update-location', updateLocation);

// Update order status
router.post('/update-order', updateOrderStatus);

// Get order status by orderId
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

// Create a new delivery executive
router.post('/create-executive', async (req, res) => {
  const { name, executive_id, role } = req.body;
  try {
    const newExec = await DeliveryExecutive.create({ name, executive_id, role });
    res.json({ message: 'Executive created', executive: newExec });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get executive by executive_id (for login)
router.get('/executives/:executive_id', async (req, res) => {
  try {
    const executive = await DeliveryExecutive.findOne({ executive_id: req.params.executive_id });
    if (!executive) {
      return res.status(404).json({ error: 'Executive not found' });
    }
    res.json(executive);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
