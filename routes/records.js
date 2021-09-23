const router = require("express").Router();

// route 	GET /api/records/
// desc 	insert record to the database
// access 	Public
router.post("/", async (req, res) => {
	res.send(req.body);
});

// route 	GET /api/records/
// desc 	get records by params
// access 	Public
router.get("/", async (req, res) => {
	res.send("records");
});

module.exports = router;
