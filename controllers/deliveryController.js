const DeliveryExecutive = require('../models/DeliveryExecutive');
const Order = require('../models/Order');
const moment = require('moment-timezone');

exports.updateLocation = async (req, res) => {
  const { executiveId, lat, lan } = req.body;
  try {
    await DeliveryExecutive.findByIdAndUpdate(executiveId, {
      currentLocation: { lat, lan },
      lastUpdated: new Date(),// IST time here too
      status: 'online',
    });
    res.json({ message: 'Location updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;
  try {
    const order = await Order.findOne({ orderId });
    if (!order) return res.status(404).json({ error: 'Order not found' });

    const nowIST = new Date();

    if (status === 'picked_up') order.pickedUpAt = nowIST;
    if (status === 'delivered') {
      order.deliveredAt = nowIST;
      const duration = (order.deliveredAt - order.assignedAt) / 60000;
      order.isLate = duration > order.slaMinutes;
    }

    order.status = status;
    await order.save();
    res.json({ message: 'Order updated', late: order.isLate });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getOrderStatus = async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id }).populate('executiveId');
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
