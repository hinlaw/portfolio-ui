import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./container/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			// fontSize: {
			// 	'xs': ['0.75rem', { lineHeight: '1rem' }],
			// 	'sm': ['0.875rem', { lineHeight: '1.25rem' }],
			// 	'base': ['1rem', { lineHeight: '1.5rem' }],
			// 	'lg': ['1.125rem', { lineHeight: '1.75rem' }],
			// 	'xl': ['1.25rem', { lineHeight: '1.75rem' }],
			// 	'2xl': ['1.5rem', { lineHeight: '2rem' }],
			// 	'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
			// 	'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
			// 	'5xl': ['3rem', { lineHeight: '1' }],
			// 	'6xl': ['3.75rem', { lineHeight: '1' }],
			// },
			// spacing: {
			// 	'4.5': '1.125rem',
			// 	'5.5': '1.375rem',
			// 	'6.5': '1.625rem',
			// 	'7.5': '1.875rem',
			// 	'8.5': '2.125rem',
			// 	'9.5': '2.375rem',
			// 	'13': '3.25rem',
			// 	'15': '3.75rem',
			// 	'128': '32rem',
			// 	'144': '36rem',
			// },
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [require("tailwindcss-motion")],
} satisfies Config;
