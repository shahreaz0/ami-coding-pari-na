import React from "react";
import { Row, Col } from "antd";
import "./RegisterPage.css";

const RegisterPage = (props) => {
	return (
		<div className="RegisterPage">
			<Row gutter={[24, 16]}>
				<Col xs={24} md={9} lg={9}>
					<div className="side-text">
						<p>Register</p>
					</div>
				</Col>

				<Col xs={24} md={15} lg={15}>
					<h1>Register form</h1>
				</Col>
			</Row>
		</div>
	);
};

export default RegisterPage;
