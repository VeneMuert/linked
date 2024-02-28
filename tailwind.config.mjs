/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {    
	  colors:{
			'Green': '#c5f82a',
			'White': 'hsl(0, 0%, 100%)',
			'Grey': 'hsl(0, 0%, 20%)',
			'DarkGrey': 'hsl(0, 0%, 12%)',
			'OffBlack': '#141414',
	  },
	  extend: {},
	},
	plugins: [],
  };
