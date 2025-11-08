/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx,astro}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx,astro}',
    ],
    theme: {
        extend: {
            fontFamily: {
                primary: ['var(--font-primary)'],
                secondary: ['var(--font-secondary)'],
                mono: ['var(--font-mono)'],
            },
            colors: {
                'bg-primary': 'var(--bg-primary)',
                'bg-secondary': 'var(--bg-secondary)',
                'bg-tertiary': 'var(--bg-tertiary)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-tertiary': 'var(--text-tertiary)',
                'accent-primary': 'var(--accent-primary)',
                'accent-hover': 'var(--accent-hover)',
            },
        },
    },
    plugins: [],
};