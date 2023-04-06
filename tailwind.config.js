/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontSize: {
				'fluid-xs': 'clamp(0.43rem, calc(0.60rem + -0.19vw), 0.56rem)',
				'fluid-sm': 'clamp(0.70rem, calc(0.77rem + -0.08vw), 0.75rem)',
				'fluid-m': 'clamp(1.00rem, calc(0.96rem + 0.18vw), 1.13rem)',
				'fluid-lg': 'clamp(1.33rem, calc(1.19rem + 0.70vw), 1.82rem)',
				'fluid-xl': 'clamp(1.78rem, calc(1.44rem + 1.67vw), 2.95rem)',
				'fluid-2xl': 'clamp(2.37rem, calc(1.68rem + 3.42vw), 4.76rem)',
				'fluid-3xl': 'clamp(3.16rem, calc(1.86rem + 6.50vw), 7.71rem)',
				'fluid-4xl': 'clamp(4.21rem, calc(1.85rem + 11.81vw), 12.48rem)',
				p: 'clamp(0.71rem, calc(0.59rem + 0.6vw), 1.125rem)'
			},
			spacing: {
				'3xs': 'clamp(0.25rem, calc(0.23rem + 0.09vw), 0.31rem)',
				'2xs': 'clamp(0.50rem, calc(0.48rem + 0.09vw), 0.56rem)',
				xs: 'clamp(0.75rem, calc(0.71rem + 0.18vw), 0.88rem)',
				s: 'clamp(1.00rem, calc(0.96rem + 0.18vw), 1.13rem)',
				m: 'clamp(1.50rem, calc(1.45rem + 0.27vw), 1.69rem)',
				lg: 'clamp(2.00rem, calc(1.93rem + 0.36vw), 2.25rem)',
				xl: 'clamp(3.00rem, calc(2.89rem + 0.54vw), 3.38rem)',
				'2xl': 'clamp(4.00rem, calc(3.86rem + 0.71vw), 4.50rem)',
				'3xl': 'clamp(6.00rem, calc(5.79rem + 1.07vw), 6.75rem)',

				/* One-up pairs */
				'3xs-2xs': 'clamp(0.25rem, calc(0.16rem + 0.45vw), 0.56rem)',
				'2xs-xs': 'clamp(0.50rem, calc(0.39rem + 0.54vw), 0.88rem)',
				'xs-s': 'clamp(0.75rem, calc(0.64rem + 0.54vw), 1.13rem)',
				's-m': 'clamp(1.00rem, calc(0.80rem + 0.98vw), 1.69rem)',
				'm-lg': 'clamp(1.50rem, calc(1.29rem + 1.07vw), 2.25rem)',
				'lg-xl': 'clamp(2.00rem, calc(1.61rem + 1.96vw), 3.38rem)',
				'xl-2xl': 'clamp(3.00rem, calc(2.57rem + 2.14vw), 4.50rem)',
				'2xl-3xl': 'clamp(4.00rem, calc(3.21rem + 3.93vw), 6.75rem)',

				/* Custom pairs */
				's-lg': 'clamp(1.00rem, calc(0.64rem + 1.79vw), 2.25rem)'
			}
		}
	},
	plugins: []
};
