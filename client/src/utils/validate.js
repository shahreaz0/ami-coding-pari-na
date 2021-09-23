const registerFormValidate = {
	name: [
		{
			required: true,
			message: "Please input your Full Name!",
		},
	],
	email: [
		{
			type: "email",
			message: "The input is not valid Email!",
		},
		{
			required: true,
			message: "Please input your Email!",
		},
	],
	password: [
		{
			required: true,
			message: "Please input your password!",
		},
		// {
		// 	pattern: new RegExp("(?=.*?[A-Z])"),
		// 	message: "Password must contain one Capital letter!",
		// },
		// {
		// 	pattern: new RegExp("(?=.*?[0-9])"),
		// 	message: "Password must contain one digit!",
		// },
	],
	confirmPassword: [
		{
			required: true,
			message: "Please confirm your password!",
		},
		({ getFieldValue }) => ({
			validator(_, value) {
				if (!value || getFieldValue("password") === value) {
					return Promise.resolve();
				}

				return Promise.reject(
					new Error(
						"The two passwords that you entered do not match!"
					)
				);
			},
		}),
	],
};

const loginFormValidate = {
	email: [
		{
			type: "email",
			message: "The input is not valid Email!",
		},
		{
			required: true,
			message: "Please input your Email!",
		},
	],
	password: [
		{
			required: true,
			message: "Please input your password!",
		},
		// {
		// 	pattern: new RegExp("(?=.*?[A-Z])"),
		// 	message: "Password must contain one Capital letter!",
		// },
		// {
		// 	pattern: new RegExp("(?=.*?[0-9])"),
		// 	message: "Password must contain one digit!",
		// },
	],
};

export { registerFormValidate, loginFormValidate };
