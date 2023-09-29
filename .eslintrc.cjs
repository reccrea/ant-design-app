module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
		// 'plugin:@typescript-eslint/recommended',
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
	],
	// 自定义规则
	rules: {},
};
