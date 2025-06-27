import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
        },
        error: "var(--error)",
        secondary: {
          900: "var(--secondary-900)",
          800: "var(--secondary-800)",
          700: "var(--secondary-700)",
          600: "var(--secondary-600)",
          500: "var(--secondary-500)",
          400: "var(--secondary-400)",
          300: "var(--secondary-300)",
          200: "var(--secondary-200)",
          100: "var(--secondary-100)",
          50: "var(--secondary-50)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        info: "var(--info)",
      },
      fontFamily: {
        pretendard: ["Pretendard Variable", "Pretendard", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "18px" }],
        sm: ["13px", { lineHeight: "22px" }],
        md: ["14px", { lineHeight: "24px" }],
        lg: ["16px", { lineHeight: "26px" }],
        xl: ["20px", { lineHeight: "32px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["32px", { lineHeight: "42px" }],
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
      },
      screens: {
        sm: "375px",
        md: "744px",
        lg: "1200px",
        xl: "1440px",
      },
      boxShadow: {
        custom: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      },
      dropShadow: {
        custom: "0 0 0.75rem rgba(0, 0, 0, 15%)",
      },
      borderRadius: {
        DEFAULT: "8px",
        sm: "5px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "26px",
        "3xl": "35px",
        full: "9999px",
        btn: "40px",
        tag: "26px",
      },
      zIndex: {
        60: "60",
        70: "70",
        modal: "1000",
      },
      spacing: {
        4.5: "18px",
        7.5: "30px",
      },
      minWidth: {
        btn: "88px",
        input: "240px",
      },
      maxWidth: {
        modal: "540px",
      },
      letterSpacing: {
        tight: "-0.5px",
        normal: "0",
        wide: "0.8px",
      },
      lineHeight: {
        tight: "1.1",
        normal: "1.5",
        loose: "1.7",
        14: "14.3px",
        19: "19.1px",
      },
    },
  },
  plugins: [forms],
};

export default config;
