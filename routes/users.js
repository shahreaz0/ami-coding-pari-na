const router = require("express").Router();

// configs
const { registerSchema } = require("../configs/validate");

// route 	POST /api/users/
// desc 	Create users
// access 	Public
router.post("/", (req, res) => {
	const { error, value } = registerSchema.validate(req.body);
	if (error) return res.status(400).send(error.details);

	res.send(req.value);
});

router.get("/", (req, res) => {
	res.send("users route");
});

module.exports = router;
