/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f0f9ff",   // blue-50
          100: "#e0f2fe",  // blue-100
          200: "#bae6fd",  // blue-200
          300: "#7dd3fc",  // blue-300
          400: "#38bdf8",  // blue-400
          500: "#0ea5e9",  // blue-500
          600: "#0284c7",  // blue-600
          700: "#0369a1",  // blue-700
          800: "#075985",  // blue-800
          900: "#0c4a6e",  // blue-900
        },
        secondary: {
          50: "#f0fdfa",   // teal-50
          100: "#ccfbf1",  // teal-100
          200: "#99f6e4",  // teal-200
          300: "#5eead4",  // teal-300
          400: "#2dd4bf",  // teal-400
          500: "#14b8a6",  // teal-500
          600: "#0d9488",  // teal-600
          700: "#0f766e",  // teal-700
          800: "#115e59",  // teal-800
          900: "#134e4a",  // teal-900
        },
        accent: {
          50: "#f8fafc",   // slate-50
          100: "#f1f5f9",  // slate-100
          200: "#e2e8f0",  // slate-200
          300: "#cbd5e1",  // slate-300
          400: "#94a3b8",  // slate-400
          500: "#64748b",  // slate-500
          600: "#475569",  // slate-600
          700: "#334155",  // slate-700
          800: "#1e293b",  // slate-800
          900: "#0f172a",  // slate-900
        },
      },
    },
  },
  plugins: [],
};
