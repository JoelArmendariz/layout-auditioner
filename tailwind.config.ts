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
        white: { DEFAULT: "#fafafa", dark: "#DCDCDC", hover: "#E5E5E5" },
        gray: { DEFAULT: "#515979" },
        primary: { DEFAULT: "#8B5CF6", hover: "#7D53DC", active: "#734CCA" },
        secondary: { DEFAULT: "#303548", hover: "#292D3D", active: "#1E212D" },
        success: { DEFAULT: "#4ADE80", hover: "#45CC76", active: "#40BB6D" },
      },
    },
  },
  plugins: [],
};
export default config;
