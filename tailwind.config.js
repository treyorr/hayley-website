/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#fb7185",
                    secondary: "#fbcfe8",
                    accent: "#9f1239",
                    neutral: "#ffffff",
                    "base-100": "#fecdd3",
                    info: "#f472b6",
                    success: "#e11d48",
                    warning: "#ffffff",
                    error: "#ffffff",
                },
            },
        ],
    },
    mode: "jit",
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
        },
    },
    plugins: [daisyui],
};
