const express = require("express");

const app = express();
const PORT = 3000;


const logger = require("./middleware/logger");


const studentRoutes = require("./routes/studentRoutes");


app.use(express.json());


app.use(logger);


app.use("/students", studentRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
