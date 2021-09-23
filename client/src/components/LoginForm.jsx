import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, notification } from "antd";

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
			const { status, data } = await fetch.post(
				"/api/users/login",
				values
			);

			dispatch({ type: "USER", payload: true });
			localStorage.setItem("token", data.token);
			loginSuccessNotification();
			history.push("/");
		} catch (error) {
			console.log(error.response.status);
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
