module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Nigerian Heritage Professional
        primary: {
          DEFAULT: "#007A3D", // Nigerian green for trust and national pride
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#007A3D", // green-500
          600: "#00695C", // green-600
          700: "#004D40", // green-700
          800: "#00332A", // green-800
          900: "#001A14", // green-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#1B4332", // Deeper academic authority for headers
          50: "#E8F0EC", // teal-50
          100: "#C5D9CE", // teal-100
          200: "#9FC0AE", // teal-200
          300: "#79A78E", // teal-300
          400: "#5C9476", // teal-400
          500: "#1B4332", // teal-500
          600: "#183D2E", // teal-600
          700: "#143528", // teal-700
          800: "#102D22", // teal-800
          900: "#0A1F17", // teal-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#FFB000", // Achievement gold for success moments
          50: "#FFF8E1", // amber-50
          100: "#FFECB3", // amber-100
          200: "#FFE082", // amber-200
          300: "#FFD54F", // amber-300
          400: "#FFCA28", // amber-400
          500: "#FFB000", // amber-500
          600: "#FFA000", // amber-600
          700: "#FF8F00", // amber-700
          800: "#FF6F00", // amber-800
          900: "#E65100", // amber-900
        },
        // Background Colors
        background: "#FEFEFE", // Clean canvas for focused learning
        surface: "#F8F9FA", // Subtle card elevation without distraction
        // Text Colors
        text: {
          primary: "#2C3E50", // Extended reading comfort and professionalism
          secondary: "#6C757D", // Clear hierarchy without harsh contrast
        },
        // Status Colors
        success: "#28A745", // Positive reinforcement that feels earned
        warning: "#FFC107", // Gentle urgency for exam deadlines
        error: "#DC3545", // Helpful guidance without academic shame
        // Neutral Colors
        gray: {
          50: "#F8F9FA", // gray-50
          100: "#E9ECEF", // gray-100
          200: "#DEE2E6", // gray-200
          300: "#CED4DA", // gray-300
          400: "#ADB5BD", // gray-400
          500: "#6C757D", // gray-500
          600: "#495057", // gray-600
          700: "#343A40", // gray-700
          800: "#212529", // gray-800
          900: "#1A1E21", // gray-900
        },
      },
      fontFamily: {
        headline: ['Montserrat', 'sans-serif'], // Headlines and CTAs
        body: ['Inter', 'sans-serif'], // Body text
        accent: ['Lora', 'serif'], // Testimonials and cultural content
        sans: ['Inter', 'sans-serif'], // Default sans-serif
        serif: ['Lora', 'serif'], // Default serif
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      boxShadow: {
        'academic': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'academic-hover': '0 6px 20px rgba(0, 0, 0, 0.12)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-in-out',
        'slide-up': 'slideUp 400ms ease-out',
        'celebration': 'celebration 400ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        celebration: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'academic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}