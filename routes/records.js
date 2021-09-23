const router = require("express").Router();

// models
const Record = require("../models/Record");

// route 	GET /api/records/
// desc 	insert record to the database
// access 	Public
router.post("/", async (req, res) => {
	try {
		const { userId, data } = req.body;
		let record = await Record.findOne({ userId });

		if (record) {
			record.payload.push(data);
			await record.save();
			return res.send(record);
		}

		record = new Record({ userId, payload: [data] });
		// record.userId = userId;
		// record.payload.push();
		await record.save();
		res.send(record);
	} catch (error) {
		console.log(error);
		res.status(500).send("Server error");
	}
});

// route 	GET /api/records/
// desc 	get records by params
// access 	Public
router.get("/", async (req, res) => {
	try {
		const records = await Record.find();
		res.send(records);
	} catch (error) {
		console.log(error);
		res.status(500).send("Server error");
	}
});

module.exports = router;
