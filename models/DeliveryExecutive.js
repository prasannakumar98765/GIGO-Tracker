const mongoose = require('mongoose');

const deliveryExecutiveSchema = new mongoose.Schema({
  name: String,
  executive_id: {
    type: Number,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['admin', 'delivery_executive'],
    required: true,
  },
  currentLocation: {
    lat: Number,
    lan: Number,
  },
  lastUpdated: Date,
  status: {
    type: String,
    enum: ['online', 'idle', 'offline'],
    default: 'offline',
  },
});

module.exports = mongoose.model('DeliveryExecutive', deliveryExecutiveSchema);
