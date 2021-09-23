import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./GameForm.css";

// utils
import { gameFormValidate } from "../utils/validate";
import { search } from "../utils/helpers";

const GameForm = (props) => {
	const onFinish = (values) => {
		const { text, query } = values;
		// make an array form comma separeted string
		const numberStr = text.split(",");
		// make an number array from number string
		const numbers = numberStr.map((number) => parseInt(number));

		const found = search(numbers, query);

		props.found(found);
		props.show(true);

		console.log(found);
	};
	return (
		<div className="GameForm">
			<Form
				name="basic"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
				layout="vertical"
			>
				<Form.Item
					label="Input Values"
					name="text"
					rules={gameFormValidate.text}
					hasFeedback
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Search Value"
					name="query"
					rules={gameFormValidate.query}
					hasFeedback
				>
					<InputNumber />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit">
						Khoj
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default GameForm;
