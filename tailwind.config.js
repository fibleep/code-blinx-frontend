/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#170730",
				primary: "#B7A2FA", // flat blue
				secondary: "#6760AF", // deep blue
				tertiary: "#1BABF1", // purple
				accent: "#1473C1", // more purple
			},
			fontFamily: {
				sans: ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
};
