import { api_url } from '@/settings.js';
import axios from "axios";

const apiClient = axios.create({
	baseURL: api_url,
	headers: {
		"Content-type": "application/json",
		"App-Token": "some_access_token_is_here",
	},
});

export default apiClient;
