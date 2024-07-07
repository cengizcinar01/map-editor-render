const express = require("express");
const serverConfig = require("./src/configs/serverConfig");

const app = express();

// Import routes
const mapRoutes = require("./src/routes/mapRoutes");

// Initialize routes
app.use("/map", mapRoutes);

// Health check endpoint
app.get("/health", (req, res) => res.sendStatus(200));

app.listen(serverConfig.port, () => {
  console.log(`Server is running on port ${serverConfig.port}`);
});
