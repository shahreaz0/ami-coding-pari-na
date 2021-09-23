import { notification } from "antd";

export const loginSuccessNotification = () => {
	notification.success({
		message: "Login Sucessful",
		description: "Now you are logged in",
		placement: "bottomLeft",
	});
};

export const loginErrorNotification = (statusCode) => {
	if (statusCode === 400) {
		notification.error({
			message: "Username or password incorrect!",
			description: "Try again with correct email or password!",
			placement: "bottomLeft",
		});
	}

	if (statusCode === 500) {
		notification.error({
			message: "Server Error",
			description: "Somthing went wrong",
			placement: "bottomLeft",
		});
	}
};

export const registerSuccessNotification = () => {
	notification.success({
		message: "Registration Sucessful",
		description: "Now you are logged in",
		placement: "bottomLeft",
	});
};

export const registerErrorNotification = (statusCode) => {
	if (statusCode === 400) {
		notification.error({
			message: "User already exists with this email",
			description: "This email is taken. Use another email",
			placement: "bottomLeft",
		});
	}

	if (statusCode === 500) {
		notification.error({
			message: "Server Error",
			description: "Somthing went wrong",
			placement: "bottomLeft",
		});
	}
};

export const logoutSuccessNotification = () => {
	notification.success({
		message: "Logout Sucessful",
		description: "Now you are logged out",
		placement: "bottomLeft",
	});
};
