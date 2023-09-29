module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		"plugin:@typescript-eslint/recommended",
		// 告诉 ESLint 关闭与 Prettier 格式化规则冲突的任何规则，需写在最后，会覆盖前面的配置
		"plugin:prettier/recommended",
	],
	overrides: [],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: [
		"vue",
		"@typescript-eslint", // 将 Prettier 的格式化功能集成到 ESLint 中。会应用Prettier的配置
		"prettier",
		"simple-import-sort",
	],
	// 自定义规则
	rules: {
		"simple-import-sort/imports": [
			"error",
			{
				groups: [
					[
						"^vue", // vue放在首行
						// 以字母(或数字或下划线)或“@”后面跟着字母开头的东西,通常为nodeModules引入
						"^@?\\w",
						"^@(/.*|$)", // 内部导入 "@/"
						"^\\.\\.(?!/?$)", // 父级导入. 把 `..` 放在最后.
						"^\\.\\./?$",
						// 同级导入. 把同一个文件夹.放在最后
						"^\\./(?=.*/)(?!/?$)",
						"^\\.(?!/?$)",
						"^\\./?$",
						"^.+\\.?(css|less|scss)$", // 样式导入.
						"^\\u0000", // 带有副作用导入，比如import 'a.css'这种.
					],
				],
			},
		],
	},
};
