export const initialState = localStorage.getItem("userInfo") ? true : false;

export const reducer = (state, action) => {
	if (action.type === "USER") {
		return action.payload;
	}

	return state;
};
