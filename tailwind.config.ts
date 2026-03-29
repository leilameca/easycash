import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        muted: "hsl(var(--muted))",
        accent: "hsl(var(--accent))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        danger: "hsl(var(--danger))",
        success: "hsl(var(--success))"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
