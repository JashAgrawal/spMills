/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				accent: "#fb923c",
			},
			fontFamily: {
				"Oswald": ["Oswald", "sans-serif"],
				"Fatface": ["Abril Fatface", "cursive"],
			},
		},
	},
	plugins: [],
};
