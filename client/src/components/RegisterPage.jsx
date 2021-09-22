import React from "react";
import { Row, Col } from "antd";
import "./RegisterPage.css";

// components
import RegisterForm from "./RegisterForm";

const RegisterPage = (props) => {
	return (
		<div className="RegisterPage">
			<Row>
				<Col xs={24} md={9} lg={9}>
					<div className="side-text">
						<p>Register</p>
					</div>
				</Col>

				<Col xs={24} md={15} lg={15}>
					<div className="RegisterPage-form">
						<RegisterForm />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default RegisterPage;
