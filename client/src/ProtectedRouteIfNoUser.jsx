import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

// contexts
import UserContext from "./contexts/UserContext";

const ProtectedRouteIfNoUser = ({
	component: Component,
	redirectRoute,
	...rest
}) => {
	const { state } = useContext(UserContext);
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!state) return <Component />;
				return <Redirect to={redirectRoute} />;
			}}
		/>
	);
};

export default ProtectedRouteIfNoUser;
