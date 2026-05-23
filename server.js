const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
const logger = require("./middleware/logger");

// Routes
const studentRoutes = require("./routes/studentRoutes");

// Built-in Middleware
app.use(express.json());

// Custom Middleware
app.use(logger);

// Routes
app.use("/students", studentRoutes);

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});