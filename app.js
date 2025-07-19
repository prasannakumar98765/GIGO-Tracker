const express = require('express');
const cors = require('cors');
const deliveryRoutes = require('./routes/deliveryRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/delivery', deliveryRoutes);

module.exports = app;
