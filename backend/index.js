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
app.use(cors({ origin: '*' })); // Allow all origins, adjust if needed

// Serve static files
app.use(express.static(path.join(__dirname, 'jewellery-shop', 'dist')));

// Logging middleware
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

// Routes
app.use("/api/auth", authroute);

// Serve index.html for all non-API routes
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
