const Joi = require("joi");

// register user validation
const registerSchema = Joi.object({
	name: Joi.string().min(3).max(30).required(),
	password: Joi.string()
		.pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
		.min(6)
		.required(),
	email: Joi.string().email().required(),
});

module.exports = { registerSchema };
