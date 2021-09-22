import React from "react";
import { Row, Col } from "antd";
import "./LoginPage.css";

const LoginPage = (props) => {
	return (
		<div className="LoginPage">
			<Row gutter={[24, 16]}>
				<Col xs={24} md={9} lg={9}>
					<div className="side-text">
						<p>LOGIN</p>
					</div>
				</Col>

				<Col xs={24} md={15} lg={15}>
					<h1>login form</h1>
				</Col>
			</Row>
		</div>
	);
};

export default LoginPage;
