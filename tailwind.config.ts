import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06141B',
        dark: '#11212D',
        mediumDark: '#253745',
        medium: '#4A5C6A',
        light: '#9BA8AB',
        lighter: '#CCD0CF',
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(6, 20, 27, 1) -5.91%, rgba(74, 92, 106, 0.7) 111.58%)",
      }
    },
  },
  plugins: [],
} satisfies Config;
