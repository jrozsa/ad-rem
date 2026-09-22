// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://jrozsa.github.io',
	base: '/ad-rem',
	trailingSlash: 'always',
	redirects: {
		'/dobytok': '/ad-rem/polnohospodarstvo/#hovadzi-dobytok',
	},
});
