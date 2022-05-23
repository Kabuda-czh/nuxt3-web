import axios from "axios";

const Axios = axios.create({
	baseURL: "http://127.0.0.1:4523/mock/993470",
	timeout: 10000,
	responseType: "json",
	withCredentials: true, // 是否允许带cookie这些
	headers: {
		"Content-Type": "application/json;charset=UTF-8",
	},
});

//Post  请求方式
const post = (url: string, params = {}, config = {}) => {
	return new Promise((resolve, reject) => {
		Axios.post(url, params, config)
			.then(
				(response) => {
					resolve(response.data);
				},
				(err) => {
					reject(err);
				},
			)
			.catch((error) => {
				reject(error);
			});
	});
};

//GET 请求方式
const get = (url: string, params = {}) => {
	return new Promise((resolve, reject) => {
		Axios.get(url, { params: params })
			.then(
				(response) => {
					resolve(response.data);
				},
				(err) => {
					reject(err);
				},
			)
			.catch((error) => {
				reject(error);
			});
	});
};

const patch = (url: string, params = {}) => {
	return new Promise((resolve, reject) => {
		Axios.patch(url, params)
			.then(
				(response) => {
					resolve(response.data);
				},
				(err) => {
					reject(err);
				},
			)
			.catch((error) => {
				reject(error);
			});
	});
};

const put = (url: string, params = {}) => {
	return new Promise((resolve, reject) => {
		Axios.put(url, { params: params })
			.then(
				(response) => {
					resolve(response.data);
				},
				(err) => {
					reject(err);
				},
			)
			.catch((error) => {
				reject(error);
			});
	});
};

export { get, post, patch, put };
