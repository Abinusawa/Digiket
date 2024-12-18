/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Always center the container
        padding: {
          DEFAULT: '1rem', // Default padding for all devices
          sm: '2rem', // Small devices
          lg: '4rem', // Large devices
          xl: '6rem', // Extra-large devices
        },
      },
    },
  },
  plugins: [],
}

