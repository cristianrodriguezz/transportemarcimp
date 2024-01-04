/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
					'bunker': {
						'50': '#fcfbfc',
						'100': '#eceef2',
						'200': '#d5dae2',
						'300': '#b0b9c9',
						'400': '#8593ab',
						'500': '#667691',
						'600': '#515f78',
						'700': '#434d61',
						'800': '#fdfcfc',
						'900': '#1e206f',
						'950': '#ffffff',
				},
					'text': {
						'50': '#fff',
						'100': '#00000f'
					}
			},
			boxShadow: {
        'personalizado': '1px 4px 20px -2px rgb(0 0 0 / 10%)',
      }
		

		},

	},
	plugins: [
		require('tailwindcss-animated'), require("daisyui")
	],
}
