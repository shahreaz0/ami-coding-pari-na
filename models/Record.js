const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},

	payload: [
		{
			timestamp: {
				type: Date,
				default: Date.now(),
			},
			input_values: {
				type: String,
				required: true,
			},
		},
	],
});

module.exports = mongoose.model("Record", recordSchema);
