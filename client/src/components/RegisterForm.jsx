import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";

// utils
import { registerFormValidate } from "../utils/validate";
// utils
import fetch from "../utils/axios";
import { loginFormValidate } from "../utils/validate";
import {
	registerSuccessNotification,
	registerErrorNotification,
} from "../utils/notifications";

// contexts
import UserContext from "../contexts/UserContext";

const RegisterForm = (props) => {
	let history = useHistory();
	const { state, dispatch } = useContext(UserContext);

	const onFinish = async (values) => {
		try {
			const user = {
				name: values.name,
				email: values.email,
				password: values.password,
			};

			// destructure data from response
			const { data } = await fetch.post("/api/users", user);
			// set login to true
			dispatch({ type: "USER", payload: true });
			// insert token to the local storage
			localStorage.setItem("token", data.token);
			// send notification
			registerSuccessNotification();
			// redirect to the home page
			history.push("/");
		} catch (error) {
			// show proper error message
			if (error.response.status === 400) registerErrorNotification(400);
			if (error.response.status === 500) registerErrorNotification(500);
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
					label="Full Name"
					name="name"
					rules={registerFormValidate.name}
					hasFeedback
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Email"
					name="email"
					rules={registerFormValidate.email}
					hasFeedback
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={registerFormValidate.password}
					hasFeedback
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name="confirm"
					label="Confirm Password"
					dependencies={["password"]}
					hasFeedback
					rules={registerFormValidate.confirmPassword}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Register
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default RegisterForm;
