const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3310;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the frontend/dist directory
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Handle all routes by serving index.html (for React Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Medical Tourism Backend Server is running",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Medical Tourism Backend Server running on port ${PORT}`);
  console.log(`📁 Serving static files from: ${path.join(__dirname, "../frontend/dist")}`);
  console.log(`🌐 Access the application at: http://localhost:${PORT}`);
});
