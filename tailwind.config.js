import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        cardBackground: "url('/src/assets/work-bg-blue.png')",
      },
    },
  },
  plugins: [daisyui],
};
