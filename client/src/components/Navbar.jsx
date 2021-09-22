import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "antd";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="layout">
			<nav className="navbar">
				<label
					className="navbar-toggle"
					id="js-navbar-toggle"
					htmlFor="chkToggle"
				>
					<i className="bx bx-menu"></i>
				</label>
				<NavLink to="/" className="logo">
					acpn
				</NavLink>
				<input type="checkbox" id="chkToggle"></input>
				<ul className="main-nav" id="js-menu">
					<li className="nav-li">
						<NavLink to="/login" className="nav-links">
							<Button type="primary">Login</Button>
						</NavLink>
					</li>
					<li className="nav-li">
						<NavLink to="/register" className="nav-links">
							<Button>Register</Button>
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
