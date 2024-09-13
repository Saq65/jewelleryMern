const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authroute = require("../backend/routes/authRoute");
const path = require('path');

dotenv.config();

const app = express();
const port = 5000;

// MongoDB connection
mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log("Server is connected to database");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

// Middleware
app.use(express.json());  // Use built-in express.json() for JSON parsing
app.use(cors());
app.use(express.static(path.join(__dirname, 'jewellery-shop', 'dist')));
app.use(cors({ origin: '*' })); // Adjust origin as needed

// Routes
app.use("/api/auth", authroute);

// Serve static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'jewellery-shop', 'dist', 'index.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statuscode).json({
    success: false,
    message,
    statuscode,
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
