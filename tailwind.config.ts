import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        primary: "1.375rem",
        secondary: "1.125rem",
        tertiary: "1.5rem",
        xlg: "0.75rem",
        fourth: "1.5625rem",
        fifth: ["1.75rem", { lineHeight: "2.383125rem" }],
        sixth: ["2.5rem", { lineHeight: "3.1325rem" }],
        xxxs: ["0.5rem", { lineHeight: "0.7rem" }],
        xxs: ["0.625rem", { lineHeight: "0.9375rem" }],
        sme: "0.875rem",
        md: ["0.875rem", { lineHeight: "1.25em" }],
        "3.5xl": ["2rem", { lineHeight: "2rem" }],
        "2.5xl": ["1.7rem", { lineHeight: "2.383125rem" }],
        "1.5xl": ["1.3125rem", { lineHeight: "1.75rem" }],
        "6.5xl": ["4rem", { lineHeight: "6rem" }],
      },
      colors: {
        primary: "#400F4B",
        secondaryc: "#1B2B41",
        tertiaryc: "#192739",
        footer: "#BCBDBD",
        btn: "#6E257E",
        txt: "#F4F5F7",
        bgx: "#1C3454",
      },
      borderRadius: {
        primary: "1.875rem",
        secondary: "50%",
        tertiary: "0.25rem",
        "2xc": "1.25rem",
        lgx: "0.625rem",
        third: "0.3125rem",
      },
    },
  },
  plugins: [],
};
export default config;
