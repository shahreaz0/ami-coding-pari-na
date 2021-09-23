import React, { useState } from "react";
import { Row, Col } from "antd";
import "./Home.css";

// components
import GameForm from "./GameForm";

const Home = (props) => {
	const [found, setFound] = useState(false);
	const [show, setShow] = useState(false);

	const text = found ? "true" : "false";

	return (
		<div className="Home">
			<Row>
				<Col xs={24} md={9} lg={9}>
					<div className="side-text">
						<p>Khoj</p>
					</div>
				</Col>

				<Col xs={24} md={15} lg={15}>
					<div className="Home-form">
						<GameForm found={setFound} show={setShow} />
						{show && <div className="card">{text}</div>}
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
