/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'acm-cyan': '#0099CC',
        'acm-blue': '#005778',
        'acm-neon': '#00eaff',
        'acm-magenta': '#ff00ff',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px #0099CC, 0 0 10px #0099CC, 0 0 15px #0099CC' },
          '100%': { boxShadow: '0 0 10px #0099CC, 0 0 20px #0099CC, 0 0 30px #0099CC' },
        },
        'text-reveal': {
          '0%': { transform: 'translate(0, 100%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}