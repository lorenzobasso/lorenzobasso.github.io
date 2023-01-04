const colors = require('tailwindcss/colors');

const {
	emerald: primary,
	violet: secondary,
	red: error,
	amber: warn,
	sky: info,
	slate: surface
} = colors;

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: primary[400],
					d: primary[500],
					l: primary[300],
					on: primary[900],
					dark: {
						DEFAULT: primary[700],
						d: primary[800],
						l: primary[600],
						on: primary[100]
					}
				},
				secondary: {
					DEFAULT: secondary[400],
					d: secondary[500],
					l: secondary[300],
					on: secondary[900],
					dark: {
						DEFAULT: secondary[700],
						d: secondary[800],
						l: secondary[600],
						on: secondary[100]
					}
				},
				error: {
					DEFAULT: error[300],
					d: error[400],
					l: error[200],
					on: error[900],
					dark: {
						DEFAULT: error[800],
						d: error[800],
						l: error[600],
						on: error[200]
					}
				},
				warn: {
					DEFAULT: warn[300],
					d: warn[400],
					l: warn[200],
					on: warn[900],
					dark: {
						DEFAULT: warn[800],
						d: warn[800],
						l: warn[600],
						on: warn[200]
					}
				},
				info: {
					DEFAULT: info[300],
					d: info[400],
					l: info[200],
					on: info[900],
					dark: {
						DEFAULT: info[800],
						d: info[800],
						l: info[600],
						on: info[200]
					}
				},
				surface: {
					DEFAULT: surface[200],
					d: surface[300],
					l: surface[100],
					on: surface[900],
					dark: {
						DEFAULT: surface[900],
						d: surface[900],
						l: surface[700],
						on: surface[100]
					}
				}
			}
		}
	},

	plugins: [],
	darkMode: 'class'
};

module.exports = config;
