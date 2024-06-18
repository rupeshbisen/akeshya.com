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

      fontSize: {
        clamp: "clamp(1.5rem, 5vw, 5rem)",
        heading: "clamp(1.5rem, 3vw, 4.5rem)",
      },
      keyframes: {
        'up-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'up-down': 'up-down 2s ease-in-out infinite alternate-reverse both',
      },
    },
  },
  plugins: [],
};
export default config;
