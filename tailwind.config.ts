import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        heading: "#4F4F4F",
        subHeading: "#b3b3b3",
        textColor: "#888888",
        golden: "#FFBB01",
        testimonialHeading: "#A4A4A4",
      },
      fontSize: {
        xs: ["0.75rem", "1rem"], // Extra small
        sm: ["0.875rem", "1.25rem"], // Small
        base: ["1rem", "1.5rem"], // Base
        lg: ["1.125rem", "1.75rem"], // Large
        xl: ["1.25rem", "1.75rem"], // Extra large
        "2xl": ["1.5rem", "2rem"], // 2x extra large
        "3xl": ["1.875rem", "2.25rem"], // 3x extra large
        "4xl": ["2.25rem", "2.5rem"], // 4x extra large
        "5xl": ["3rem", "1"], // 5x extra large
        "6xl": ["3.75rem", "1"], // 6x extra large
        "7xl": ["4.5rem", "1"], // 7x extra large
        "8xl": ["6rem", "1"], // 8x extra large
        "9xl": ["8rem", "1"], // 9x extra large
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
};
export default config;
