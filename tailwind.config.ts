import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      fontFamily: {
        circular: ["CircularStd", "sans-serif"],
        mark: ["MarkPro", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        gold: {
          50: "#FFFAEB",
          100: "#FFF5D6",
          200: "#FFE9A8",
          300: "#FFDF80",
          400: "#FFD452",
          500: "#FFCA28",
          600: "#EBB000",
          700: "#B38600",
          800: "#755800",
          900: "#3D2E00",
        },
        night: {
          50: "#E3E3EE",
          100: "#C6C6DC",
          200: "#8A8AB7",
          300: "#57578E",
          400: "#343455",
          500: "#10101A",
          600: "#0E0E16",
          700: "#0A0A10",
          800: "#060609",
          900: "#040406",
        },
      },
    },
  },
  plugins: [],
};
export default config;
