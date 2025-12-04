module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        glass: 'rgba(255,255,255,0.06)',
        'neon-cyan': '#0ea5a4',
        'crystal-blue': '#38bdf8',
        'soft-white': '#f1f5f9',
        slate: {
          900: '#0f172a'
        }
      },
      backdropBlur: {
        xs: '4px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
}
