import { RouteRecordRaw } from "vue-router";

export const staticRoutes: Array<RouteRecordRaw> = [
	{
		path: "/",
		redirect: "home",
	},
	{
		path: "/home",
		name: "home",
		component: () => import("@/views/Home/index.vue"),
	},
];
