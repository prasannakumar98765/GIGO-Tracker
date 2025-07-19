const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: String,
  assignedAt: Date,
  pickedUpAt: Date,
  deliveredAt: Date,
  status: String,
  slaMinutes: Number,
  isLate: Boolean,
  executiveId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DeliveryExecutive',
  },
});

module.exports = mongoose.model('Order', orderSchema);
