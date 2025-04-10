/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: { max: '639px' },
        xxs: { max: '375px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwind-scrollbar-hide'), require('tailwindcss-animate')],
};
