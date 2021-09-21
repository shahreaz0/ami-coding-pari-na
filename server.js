const express = require("express");

// express config
const app = express();

// routes
app.get("/", (req, res) => {
	res.send("ami coding pari na");
});

// server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
