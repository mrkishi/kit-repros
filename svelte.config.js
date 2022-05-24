import { resolve } from 'node:path';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		vite: {
			server: {
				fs: {
					allow: [resolve('../kit/packages/kit/src')]
				}
			}
		}
	}
};

export default config;
