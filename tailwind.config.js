const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
	theme: {
		screens: {
			sm: '375px',
			md: '768px',
			lg: '992px',
			xl: '1440px',
		},
		fontFamily: {
			'sans': ['Be Vietnam Pro', ...defaultTheme.fontFamily.sans]
		},
		extend: {
			colors: {
				brightRed: 'hsl(12, 88%, 59%)',
			}
		},
	},
  plugins: [],
}
