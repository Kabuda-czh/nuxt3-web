import { Blogs, BlogsFindById } from "./api";
import { get } from "@/utils";

export const findAll = async () => {
	const data = await get(Blogs);
	return data;
};

export const findById = async (id: string) => {
	const data = await get(`${BlogsFindById}/${id}`);
	return data;
};
