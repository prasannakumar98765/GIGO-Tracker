const app = require('./app');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
require('dotenv').config();
const checkExecutiveStatus = require('./utils/statusChecker');

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');

  const server = http.createServer(app);
  const io = socketIo(server, {
    cors: { origin: ['https://gigo-tracker-frontend.vercel.app','http://localhost:8000'], methods: ['GET', 'POST'] }
  });

  global.io = io;

  io.on('connection', (socket) => {
  console.log('🔌 New client connected:', socket.id);

  socket.on('locationUpdate', async (data) => {
    const { executiveId, lat, lan } = data;

    try {
      const execModel = require('./models/DeliveryExecutive');

      const updatedTime = new Date(); // ✅ Generate consistent timestamp
      await execModel.findByIdAndUpdate(executiveId, {
        currentLocation: { lat, lan },
        lastUpdated: updatedTime,
        status: 'online',
      });

      // ✅ Include lastUpdated in emit so frontend gets a new key to re-render marker
      socket.broadcast.emit('executiveLocationUpdated', {
        executiveId,
        lat,
        lan,
        lastUpdated: updatedTime.toISOString()
      });

      console.log("📡 Sent update to clients:", {
        executiveId,
        lat,
        lan,
        lastUpdated: updatedTime.toISOString()
      });

    } catch (err) {
      console.error('❌ Failed to update location:', err.message);
    }
  });

  socket.on('disconnect', () => {
    console.log('❎ Client disconnected:', socket.id);
  });
});

  server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  setInterval(checkExecutiveStatus, 5 * 60 * 1000);
})
.catch((err) => console.error('❌ MongoDB connection error:', err));
