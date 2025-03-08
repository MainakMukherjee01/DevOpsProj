// eslint.config.js
module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	// Use ESLint's recommended rules as a base
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 12, // or use 2021 if you prefer
		sourceType: "module",
	},
	rules: {
		// Enforce consistent indentation (2 spaces)
		indent: ["error", 2],

		// Enforce Unix linebreak style
		"linebreak-style": ["error", "unix"],

		// Enforce the use of single quotes for strings
		quotes: ["error", "single"],

		// Require semicolons at the end of statements
		semi: ["error", "always"],

		// Warn on unused variables (helps catch potential errors)
		"no-unused-vars": ["warn"],

		// Allow console statements (set to "error" if you prefer to disallow them)
		"no-console": "off",

		// Require the use of === and !== over == and !=
		eqeqeq: "error",

		// Require curly braces for all control statements
		curly: "error",

		// Disallow trailing whitespace at the end of lines
		"no-trailing-spaces": "error",

		// Enforce a space before the opening brace of blocks
		"space-before-blocks": "error",
	},
};
