import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geometria"', "Sans-serif"],
        serif: ['"Geometria"', "Sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "#F8F9FB",
          100: "#F1F3F7",
          200: "#E3E7EF",
          300: "#D5DBE7",
          400: "#C7CFDF",
          500: "#2C3E5C", // Main Sophisticated Navy
          600: "#253550",
          700: "#1E2C44",
          800: "#172338",
          900: "#101A2C",
          DEFAULT: "#2C3E5C",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Sophisticated Navy Palette
        navy: {
          50: "#F8F9FB",
          100: "#F1F3F7",
          200: "#E3E7EF",
          300: "#D5DBE7",
          400: "#C7CFDF",
          500: "#2C3E5C", // Sophisticated Navy
          600: "#253550",
          700: "#1E2C44",
          800: "#172338",
          900: "#101A2C",
        },
        // Paleta Azul Clínico (updated to complement navy)
        clinical: {
          50: "#F8F9FB",
          100: "#F1F3F7",
          200: "#E3E7EF",
          300: "#D5DBE7",
          400: "#C7CFDF",
          500: "#2C3E5C", // Sophisticated Navy
          600: "#253550",
          700: "#1E2C44",
          800: "#172338",
          900: "#101A2C",
        },
        // Paleta Verde Menta (kept for accent)
        mint: {
          50: "#F5F9F7",
          100: "#EAEFED",
          200: "#D1E7E3",
          300: "#A7D5C9",
          400: "#7DDBBC",
          500: "#5CCEA9",
          600: "#4DB896",
          700: "#2E7D64",
          800: "#1F5749",
          900: "#133B31",
        },
        // Paleta Azul Turquesa e Coral (kept for accent)
        aqua: {
          50: "#F2F7F7",
          100: "#E6F4F1",
          200: "#C7E8E3",
          300: "#9AD3D0",
          400: "#6CBEC1",
          500: "#3BACB6",
          600: "#2E8A93",
          700: "#236970",
          800: "#1A4F54",
          900: "#123538",
          accent: "#FF7E67", // Coral Suave
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
