import axios from "axios";

const fetch = axios.create({
	baseURL: "https://codeparina.herokuapp.com",
});

export default fetch;
