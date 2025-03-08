// eslint.config.js
module.exports = [
	{
		// Specify which files this configuration applies to
		files: ["**/*.js"],
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: "module",
			// Define global variables that were previously set by "env"
			globals: {
				// Browser globals
				window: "readonly",
				document: "readonly",
				// Node globals
				module: "writable",
				require: "readonly",
				__dirname: "readonly",
				process: "readonly",
				// Common globals
				console: "readonly",
			},
		},
		rules: {
			// Enforce consistent indentation (2 spaces)
			indent: ["error", 2],
			// Enforce Unix linebreak style
			"linebreak-style": ["error", "unix"],
			// Enforce single quotes for strings
			quotes: ["error", "single"],
			// Require semicolons at the end of statements
			semi: ["error", "always"],
			// Warn on unused variables
			"no-unused-vars": "warn",
			// Allow console statements
			"no-console": "off",
			// Require strict equality comparisons
			eqeqeq: "error",
			// Require curly braces for all control statements
			curly: "error",
			// Disallow trailing whitespace at the end of lines
			"no-trailing-spaces": "error",
			// Enforce a space before the opening brace of blocks
			"space-before-blocks": "error",
		},
	},
];
