import { useEffect } from "react";
import socket from "../socket";

const simulateMovement = (execId) => {
  let lat = 12.9716; // Start near Bangalore
  let lan = 77.5946;

  setInterval(() => {
    lat += (Math.random() - 0.5) * 0.002; // Random jitter
    lan += (Math.random() - 0.5) * 0.002;

    socket.emit("locationUpdate", {
      executiveId: execId,
      lat,
      lan,
    });

    console.log("📡 Sent location:", { executiveId: execId, lat, lan });
  }, 3000);
};

const SimulateLocation = () => {
  useEffect(() => {
    // Replace with a valid executive ID from your MongoDB
    const EXEC_ID = "687a3ae8eaa5a61c41ec92c9"; 
    simulateMovement(EXEC_ID);
  }, []);

  return <div>Simulating live movement...</div>;
};

export default SimulateLocation;
