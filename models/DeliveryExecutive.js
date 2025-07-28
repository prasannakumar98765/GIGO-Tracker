const mongoose = require('mongoose')

const deliveryExecutiveShema = new mongoose.Schema({
    name: String,
    executive_id: Number,
    role: String,
    currentLocation: {
        lat: Number,
        lan: Number
    },
    lastUpdated: Date,
     status: {
    type: String,
    enum: ['online', 'idle', 'offline'],
    default: 'offline'
  }
})

module.exports = mongoose.model('DeliveryExecutive', deliveryExecutiveShema)