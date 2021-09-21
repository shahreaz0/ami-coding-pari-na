const router = require("express").Router();
const gravatar = require("gravatar");

// configs
const { registerSchema, loginSchema } = require("../configs/validate");
const { generateToken } = require("../configs/jwt");

// models
const User = require("../models/User");

// route 	GET /api/users/
// desc 	get all users
// access 	Public
router.get("/", async (req, res) => {
	try {
		const users = await User.find();

		res.send(users);
	} catch (e) {
		// statements
		console.log(e);
	}
});

// route 	POST /api/users/
// desc 	Create users
// access 	Public
router.post("/", async (req, res) => {
	const { error, value } = registerSchema.validate(req.body);
	if (error) return res.status(400).send(error.details);

	// destructure all fields from value
	const { name, email, password } = value;

	try {
		// user exist or not
		let user = await User.findOne({ email });
		if (user) {
			return res.status(400).send({ message: "User already exists" });
		}

		// avatar url generate with gravatar
		const avatar = gravatar.url(email, { s: "200", r: "pg", d: "mm" });

		// create user instance
		user = new User({ name, email, password, avatar });

		// save user to the db
		await user.save();

		// response
		res.send({ ...user._doc, token: generateToken(user.id) });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Server error" });
	}

	res.send(req.value);
});

// route 	POST /api/users/login/
// desc 	login users
// access 	Public
router.post("/login", async (req, res) => {
	const { error, value } = loginSchema.validate(req.body);
	if (error) return res.status(400).send(error.details);

	const { email, password } = value;

	try {
		const user = await User.findOne({ email });

		if (user && (await user.comparePassword(password))) {
			return res.send({ ...user._doc, token: generateToken(user.id) });
		} else {
			return res.send({ message: "Incorrect email or password" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Server error" });
	}
});

module.exports = router;
