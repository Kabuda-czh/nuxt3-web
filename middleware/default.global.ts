import { RouteLocationNormalized } from "vue-router";

/**
 * global 代表全局文件 全局路由守卫
 * 
 * @param to 
 * @param from
 */
export default defineNuxtRouteMiddleware(
	(to: RouteLocationNormalized, from: RouteLocationNormalized) => {
		// console.log("要去那个页面: " + to.path);
		// console.log(to);
		// console.log("来自那个页面: " + from.path);
		// console.log(from);

		if (to.path === "/demo1") {
			console.error("禁止访问这个页面");
			abortNavigation();
			return navigateTo("/");
		}
	},
);
