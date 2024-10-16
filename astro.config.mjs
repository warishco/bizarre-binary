// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Bizarre Binary Docs',
			description: 'Welcome to Bizarre Binary, your trusted companion for exploring the vast expanse of space.',
			logo: {
				src: './src/assets/bizarre-binary-logo.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/warishco',
				linkedin: 'https://www.linkedin.com/in/warish',
				'x.com': 'https://x.com/warishwrites',
			},
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
