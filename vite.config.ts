import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import postcssPresetEnv from "postcss-preset-env";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		//设置别名
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	plugins: [
		vue(),
		Components({
			resolvers: [
				AntDesignVueResolver({
					importStyle: false, // css in js
				}),
			],
		}),
	],
	server: {
		host: "0.0.0.0",
		cors: true,
	},
	css: {
		// 预处理器配置项
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
		postcss: {
			plugins: [postcssPresetEnv()],
		},
	},
});
