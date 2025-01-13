import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F2",
        foreground: "#1A1A1A",
        accent: "#C8A087",
        primary: "#829E89",
        secondary: "#D4B5A6",
        tertiary: "#F5EDE7",
        sage: {
          light: "#A8B8AD",
          DEFAULT: "#829E89",
          dark: "#687D6E",
        },
        taupe: {
          light: "#D4B5A6",
          DEFAULT: "#C8A087",
          dark: "#B08E75",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-gilda)", "serif"],
        display: ["var(--font-gilda)", "serif"],
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config;
