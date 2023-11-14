/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
					'bunker': {
						'50': '#e3e3e370',
						'100': '#eceef2',
						'200': '#d5dae2',
						'300': '#b0b9c9',
						'400': '#8593ab',
						'500': '#667691',
						'600': '#515f78',
						'700': '#434d61',
						'800': '#3a4252',
						'900': '#1f2531',
						'950': '#13151a',
				},
					'text': {
						'50': '#fff'
					}
			}
		},
	},
	plugins: [
		require('tailwindcss-animated'), require("daisyui")
	],
}
