/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],
	theme: {
		fontFamily: { sans: ["Hanken_Grotesk", "sans-serif"] },
		extend: {
			colors: {
				white: "hsl(0, 0%, 100%)",
				sky: "#0369a1",
				rose: "#be123c",
				red: "hsl(0, 100%, 67%)",
				yellow: "hsl(39, 100%, 56%)",
				green: "hsl(166, 100%, 37%)",
				blue: {
					cobalt: "hsl(234, 85%, 45%)",
					slate: "hsl(252, 100%, 67%)",
					royal: "hsl(241, 81%, 54%)",
					violet: "hsla(256, 72%, 46%, 1)",
					persian: "hsla(241, 72%, 46%, 0)",
					pale: "hsl(221, 100%, 96%)",
					dark: "hsl(224, 30%, 27%)",
					lavender: "hsl(241, 100%, 89%)",
				},
			},
		},
	},
	plugins: [],
};
