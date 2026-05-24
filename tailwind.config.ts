import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17212b",
        muted: "#657386",
        paper: "#ffffff",
        line: "#d9e1ea",
        teal: "#0f766e",
        blue: "#2563eb",
        amber: "#b45309",
        green: "#15803d"
      },
      boxShadow: {
        soft: "0 16px 48px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

