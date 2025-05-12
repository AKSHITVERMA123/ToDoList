import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      margin: {
        '11': '11em',
        '18': '18px',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.4xl'),
          fontWeight: '700',
        },
        h2: { fontSize: theme('fontSize.3xl'), fontWeight: '700' },
        h3: { fontSize: theme('fontSize.xl'), fontWeight: '700' },
        h4: { fontSize: theme('fontSize.lg'), fontWeight: '700' },
        h5: { fontSize: theme('fontSize.sm'), fontWeight: '700' },
        h6: { fontSize: theme('fontSize.xs'), fontWeight: '700' },
      });
    }),
  ],
} satisfies Config;
