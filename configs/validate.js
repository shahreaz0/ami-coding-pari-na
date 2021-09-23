const Joi = require("joi");

// register user validation
const registerSchema = Joi.object({
	name: Joi.string().min(3).max(30).required(),
	password: Joi.string().min(6).required(),
	email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
	password: Joi.string().min(6).required(),
	email: Joi.string().email().required(),
});

module.exports = { registerSchema, loginSchema };
