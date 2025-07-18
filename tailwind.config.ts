import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#3692FF",
          200: "#1967D6",
          300: "#1251AA",
        },
        error: "#F74747",
        secondary: {
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
          600: "#4B5563",
          500: "#6B7280",
          400: "#9CA3AF",
          300: "#E5E7EB",
          200: "#F3F4F6",
          100: "#F9FAFB",
          50: "#F9FAFB",
        },
        success: "#22C55E",
        warning: "#FACC15",
        info: "#3182F6",
      },
      fontFamily: {
        pretendard: ["Pretendard Variable", "Pretendard", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", { lineHeight: "18px" }],
        sm: ["13px", { lineHeight: "22px" }],
        md: ["14px", { lineHeight: "24px" }],
        lg: ["16px", { lineHeight: "26px" }],
        "2lg": ["18px", { lineHeight: "28px" }],
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
        "2md": "1000px",
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
