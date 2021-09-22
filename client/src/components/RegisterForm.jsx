import React from "react";
import { Form, Input, Button } from "antd";

// utils
import { registerFormValidate } from "../utils/validate";

const RegisterForm = (props) => {
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
