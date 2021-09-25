import React, { useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";
import "./GameForm.css";

// utils
import { gameFormValidate } from "../utils/validate";
import { search } from "../utils/helpers";
import fetch from "../utils/axios";

const GameForm = (props) => {
	const onFinish = async (values) => {
		const { text, query } = values;
		// make an array form comma separeted string
		const numberStr = text.split(",");
		// make an number array from number string
		const numbers = numberStr.map((number) => parseInt(number));

		const found = search(numbers, query);
		props.found(found);
		props.show(true);

		// sort array in desc order then join
		const resStr = numbers.sort((a, b) => b - a).join(",");

		// grab user id from localstorage
		const { _id } = JSON.parse(localStorage.getItem("userInfo"));

		try {
			const { data } = await fetch.post("/api/records", {
				userId: _id,
				data: {
					input_values: resStr,
				},
			});
		} catch (error) {
			alert("Someting wrong. Try Again");
		}
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
