const express = require("express");
const connectDB = require("./configs/db");
const cors = require("cors");

// environment variables
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// database connection
connectDB();

// express configs
const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", require("./routes/users"));

// server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
