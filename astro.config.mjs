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
					label: 'Cosmic Navigation',
					items: [
						// Each item here is one entry in the navigation menu.
						{ slug: 'cosmic-navigation/reading-star-charts-and-maps' },
						{ label: 'Plotting a Course Through Space', slug: 'cosmic-navigation/plotting-course-through-space' },
						'cosmic-navigation/dealing-with-gravity-and-orbit', // shorthand for an internal link
					],
				},
				{ label: 'Spaceships and Rockets', link: 'https://www.nasa.gov/humans-in-space/spaceships-and-rockets/' },
				{ label: 'Space Movie', link: 'https://en.wikipedia.org/wiki/Interstellar_(film)' }, // An external link to the NASA website.
			],
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 2 },
			customCss: [
				// Path to your custom CSS file
				'./src/styles/style.css',
		  ],
		}),
	],
});
