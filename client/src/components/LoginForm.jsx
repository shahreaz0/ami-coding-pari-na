import React from "react";
import { Form, Input, Button } from "antd";

// utils
import { loginFormValidate } from "../utils/validate";

const LoginForm = (props) => {
	const onFinish = (values) => {
		console.log("Success:", values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div className="LoginForm">
			<Form
				name="basic"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
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
