const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "xs": "500px",
        "lg": "1024px",
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xs': '200px',  
        'sm': '463px', 
        'md': '1180px',   
        "lg": "1024px",
        "2xl": "1400px",
      },
      colors: {
        primary: '#8bc34a',
        'primary-dark': '#527727',
        secondary: '#333333',
        'secondary-light': '#3C3E3D'
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": {
              opacity: 0
          },
          "100%": {
              opacity: 1
          },
        },
        "fade-out": {
          "0%": {
              opacity: 1
          },
          "100%": {
              opacity: 0
          },
        },
        "fade-in-right": {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
            display:'none'
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '1',
          },
        },
        "fade-out-left": {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(-100%)',
            opacity: '0',
            display:'none'
          },
        },
        slideOutUp: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100%)',
            opacity: '0',
            display:'none'
          },
        },
        slideOutDown: {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: '0',
            display:'none'
          },
        },
        slideInUp: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1',
          },
        },
        slideInDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '1',
          },
        },
        flip: {
          "0%" :{
            transform: "rotateY(-180deg)"
          },
          "25%": {
            transform: "rotateY(-135deg)"
          },
          "50%": {
            transform: "rotateY(-90deg)"
          },
          "75%": {
            transform: "rotateY(-45deg)"
          },
          "100%" :{
            transform: "rotateY(0deg)"
          },
        },
        flipBack: {
          "0%" :{
            transform: "rotateY(0deg)"
          },
          "25%": {
            transform: "rotateY(-45deg)"
          },
          "50%": {
            transform: "rotateY(-90deg)"
          },
          "75%": {
            transform: "rotateY(-135deg)"
          },
          "100%" :{
            transform: "rotateY(-180deg)"
          },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'slide-out-up': 'slideOutUp 0.5s ease-out',
        'slide-in-down': 'slideInDown 0.5s ease-in',
        'slide-out-down': 'slideOutDown 0.5s ease-out',
        'slide-in-up': 'slideInUp 0.5s ease-in',
        flip: 'flip 0.5s ease-out',
        'flip-back': 'flipBack 0.5s ease-in',
        spin: 'spin 2s linear infinite',
        'fade-in': 'fade-in 0.5s ease-in 0.25s 1',
        'fade-out': 'fade-out 0.5s ease-out 0.25s 1',
        'fade-in-right': 'fade-in-right 0.5s ease-in',
        'fade-out-left': 'fade-out-left 0.5s ease-out',
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [animate],
}