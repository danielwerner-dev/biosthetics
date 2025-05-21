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
          DEFAULT: "#30324B",
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
        // Paleta Azul Clínico
        clinical: {
          50: "#F0F7FF", // Azul Claríssimo
          100: "#F5F9FC", // Azul Gelo
          200: "#E1EFFF",
          300: "#C3DFFF",
          400: "#93C5FD",
          500: "#4A90E2", // Azul Médio
          600: "#3B82F6",
          700: "#2C5282", // Azul Profundo
          800: "#1E3A5F",
          900: "#172B46",
        },
        // Paleta Verde Menta
        mint: {
          50: "#F5F9F7", // Verde Gelo
          100: "#EAEFED", // Cinza Claro
          200: "#D1E7E3",
          300: "#A7D5C9",
          400: "#7DDBBC",
          500: "#5CCEA9", // Verde Menta
          600: "#4DB896",
          700: "#2E7D64", // Verde Profundo
          800: "#1F5749",
          900: "#133B31",
        },
        // Paleta Azul Turquesa e Coral
        aqua: {
          50: "#F2F7F7", // Cinza Azulado
          100: "#E6F4F1", // Turquesa Claro
          200: "#C7E8E3",
          300: "#9AD3D0",
          400: "#6CBEC1",
          500: "#3BACB6", // Azul Turquesa
          600: "#2E8A93",
          700: "#236970",
          800: "#1A4F54",
          900: "#123538",
          accent: "#FF7E67", // Coral Suave
        },
        // Nova paleta principal
        primary: {
          50: "#EDEDF2",
          100: "#DBDBE5",
          200: "#B7B8CC",
          300: "#9395B2",
          400: "#6F7199",
          500: "#30324B", // Cor principal
          600: "#292A40",
          700: "#222336",
          800: "#1B1C2B",
          900: "#141521",
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
