/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        minWidth: {
            minWidth: '1100px',
        },
        maxWidth: {
            maxWidth: '1500px',
        },
        extend: {},
    },
    plugins: [],
};
