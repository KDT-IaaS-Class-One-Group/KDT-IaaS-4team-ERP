import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        wine: '#ce2c1f',
      },
      backgroundColor: {
        wine: '#ce2c1f',
      },
    },
  },
  plugins: [],
};
export default config;
