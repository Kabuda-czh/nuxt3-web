import { RouteLocationNormalized } from "vue-router";

/**
 * 单个文件的路由守卫, 不会直接生效需要在单个文件中成为专属导航中间件
 *
 * @param to
 * @param from
 */
export default defineNuxtRouteMiddleware(
	(to: RouteLocationNormalized, from: RouteLocationNormalized) => {
		console.log("Hello Demo7");
	},
);
