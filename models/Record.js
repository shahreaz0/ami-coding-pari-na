const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.objectId,
		ref: "User",
	},
	payload: [
		{
			timestamp: new Date.now(),
			input_values: String,
		},
	],
});

module.exports = mongoose.model("Record", recordSchema);
