import React, { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import "./Navbar.css";

// contexts
import UserContext from "../contexts/UserContext";

const Navbar = () => {
	let history = useHistory();
	const { state, dispatch } = useContext(UserContext);

	const logout = () => {
		// clear localStorage
		localStorage.clear("token");
		// login set to false
		dispatch({ type: "USER", payload: false });
		// redirect to home
		history.push("/login");
	};

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
					<i className="bx bxs-ghost"></i>
				</NavLink>
				<input type="checkbox" id="chkToggle"></input>
				<ul className="main-nav" id="js-menu">
					{!state ? (
						<div>
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
						</div>
					) : (
						<li className="nav-li">
							<Button type="primary" onClick={logout}>
								LogOut
							</Button>
						</li>
					)}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
