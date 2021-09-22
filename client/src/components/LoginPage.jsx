import React from "react";
import { Row, Col } from "antd";
import "./LoginPage.css";

//components
import LoginForm from "./LoginForm";

const LoginPage = (props) => {
	return (
		<div className="LoginPage">
			<Row>
				<Col xs={24} md={9} lg={9}>
					<div className="side-text">
						<p>Login</p>
					</div>
				</Col>

				<Col xs={24} md={15} lg={15}>
					<div className="LoginPage-form">
						<LoginForm />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default LoginPage;
