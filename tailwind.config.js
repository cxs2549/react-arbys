module.exports = {
	purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				borderColor: '#606060',
				brandRed: '#CC231B',
				brandBrown: '#201A15'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
