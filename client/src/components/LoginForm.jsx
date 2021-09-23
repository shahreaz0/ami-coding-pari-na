import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";

// utils
import fetch from "../utils/axios";
import { loginFormValidate } from "../utils/validate";
import {
	loginSuccessNotification,
	loginErrorNotification,
} from "../utils/notifications";

// contexts
import UserContext from "../contexts/UserContext";

const LoginForm = (props) => {
	let history = useHistory();
	const { state, dispatch } = useContext(UserContext);

	// when form data pass the validation
	const onFinish = async (values) => {
		try {
			// destructure data from response
			const { data } = await fetch.post("/api/users/login", values);
			// set login to true
			dispatch({ type: "USER", payload: true });
			// insert token to the local storage
			localStorage.setItem("userInfo", JSON.stringify(data));
			// send notification
			loginSuccessNotification();
			// redirect to the home page
			history.push("/");
		} catch (error) {
			// show proper error message
			if (error.response.status === 400) loginErrorNotification(400);
			if (error.response.status === 500) loginErrorNotification(500);
		}
	};

	return (
		<div className="LoginForm">
			<Form
				name="basic"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				autoComplete="off"
				layout="vertical"
			>
				<Form.Item
					label="Email"
					name="email"
					rules={loginFormValidate.email}
					hasFeedback
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={loginFormValidate.password}
					hasFeedback
				>
					<Input.Password />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Login
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LoginForm;
