// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        primary: "#02897A",
        secondary: "#22343D",
        accent: "#173A56",
        "primary-dark": "#025951",
        dark: "#2D2D2D",
        light: "#F5F5F5",
        white: "#FFFFFF",
        "dark-bg": "#1F2937",
        "dark-secondary": "#374151",
        "dark-text": "#F3F4F6",
        "dark-muted": "#9CA3AF"
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"]
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "fade-in-down": "fadeInDown 0.5s ease-out",
        "fade-in-left": "fadeInLeft 0.5s ease-out",
        "fade-in-right": "fadeInRight 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        }
      }
    }
  },
  plugins: []
}
