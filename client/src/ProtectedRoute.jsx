import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// contexts
import UserContext from "./contexts/UserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { state, dispatch } = useContext(UserContext);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (state) {
					return <Component />;
				}
				return <Redirect to="/login" />;
			}}
		/>
	);
};

export default ProtectedRoute;
