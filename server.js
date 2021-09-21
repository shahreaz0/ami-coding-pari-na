const express = require("express");
const connectDB = require("./configs/db");

// environment vars
if (process.env.NODE_ENV !== "production") require("dotenv").config();

// database connection
connectDB();

// express config
const app = express();

// routes
app.get("/", (req, res) => {
	res.send("ami coding pari na");
});

// server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
