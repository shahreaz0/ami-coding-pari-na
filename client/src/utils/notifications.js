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
