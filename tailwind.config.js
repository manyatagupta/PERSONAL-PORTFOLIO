/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        podium: ['"FSP DEMO - PODIUM Sharp 4.11"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
        clash: ['"Clash Display"', "sans-serif"],
        satoshi: ['"Satoshi"', "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-up-delay-1": "fade-up 0.8s ease-out 0.2s forwards",
        "fade-up-delay-2": "fade-up 0.8s ease-out 0.4s forwards",
        "fade-up-delay-3": "fade-up 0.8s ease-out 0.6s forwards",
        "fade-up-delay-4": "fade-up 0.8s ease-out 0.8s forwards",
      },
    },
  },
  plugins: [],
};
