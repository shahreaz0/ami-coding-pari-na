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
	// destructure query parameters
	const { user_id, end_datetime, start_datetime } = req.query;

	// check all the params available or not
	if (!user_id || !end_datetime || !start_datetime) {
		return res.status(400).send({ message: "Send proper parameters" });
	}

	try {
		const records = await Record.findOne({ userId: req.query.user_id });

		// if no records send 400
		if (!records) {
			return res
				.status(400)
				.send({ message: "No records found with this user id" });
		}

		const end = new Date(end_datetime);
		const start = new Date(start_datetime);

		// filter payload by datetime frame
		const filtered = records.payload.filter((data) => {
			return end > data.timestamp && start < data.timestamp;
		});

		// send final respone if all is ok
		res.send({ status: "success", id: user_id, payload: filtered });
	} catch (error) {
		console.log(error);
		res.status(500).send("Server error");
	}
});

module.exports = router;
