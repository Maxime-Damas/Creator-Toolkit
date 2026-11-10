/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hud: {
          bg: '#15171B',
          panel: 'rgba(28, 31, 36, 0.95)',
          panelSolid: '#1C1F24',
          surface: '#252A31',
          surfaceHover: '#2E343D',
          border: '#343A43',
          borderLight: '#434A56',
          text: '#E5E7EB',
          muted: '#9299A4',
          accent: '#E58A32',
          accentHover: '#EF9945',
          accentMuted: 'rgba(229, 138, 50, 0.15)',
          success: '#42A879',
          error: '#D65B5B',
          axisX: '#D65B5B',
          axisY: '#42A879',
          axisZ: '#3B82F6',
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '6px',
      },
      spacing: {
        '68': '17rem',
        '80': '20rem',
        '84': '21rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
