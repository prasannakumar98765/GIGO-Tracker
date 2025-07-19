const DeliveryExecutive = require('../models/DeliveryExecutive');

const checkExecutiveStatus = async () => {
  const now = new Date();
  const offlineThreshold = 15 * 60 * 1000; // 15 mins
  const idleThreshold = 5 * 60 * 1000;     // 5 mins

  const executives = await DeliveryExecutive.find();

  for (let exec of executives) {
    const diff = now - new Date(exec.lastUpdated || 0);

    let newStatus = 'offline';
    if (diff < idleThreshold) {
      newStatus = 'online';
    } else if (diff < offlineThreshold) {
      newStatus = 'idle';
    }

    if (exec.status !== newStatus) {
      exec.status = newStatus;
      await exec.save();
    }
  }

  console.log('✅ Executives status checked/updated.');
};

module.exports = checkExecutiveStatus;
