module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'font-h-1': 'var(--font-h-1)',
  			'font-h-2': 'var(--font-h-2)',
  			'font-body': 'var(--font-body)',
  			'font-body-small': 'var(--font-body-small)',
  			sans: [
  				'ui-sans-serif',
  				'system-ui',
  				'sans-serif',
  				'Apple Color Emoji"',
  				'Segoe UI Emoji"',
  				'Segoe UI Symbol"',
  				'Noto Color Emoji"'
  			]
  		},
  		fontSize: {
  			'font-h-1': [
  				'var(--font-h-1-size)',
  				{
  					lineHeight: 'var(--font-h-1-line-height)',
  					fontWeight: 'var(--font-h-1-weight)',
  					letterSpacing: 'var(--font-h-1-letter-spacing)',
  					fontStyle: 'var(--font-h-1-style)'
  				}
  			],
  			'font-h-2': [
  				'var(--font-h-2-size)',
  				{
  					lineHeight: 'var(--font-h-2-line-height)',
  					fontWeight: 'var(--font-h-2-weight)',
  					letterSpacing: 'var(--font-h-2-letter-spacing)',
  					fontStyle: 'var(--font-h-2-style)'
  				}
  			],
  			'font-body': [
  				'var(--font-body-size)',
  				{
  					lineHeight: 'var(--font-body-line-height)',
  					fontWeight: 'var(--font-body-weight)',
  					letterSpacing: 'var(--font-body-letter-spacing)',
  					fontStyle: 'var(--font-body-style)'
  				}
  			],
  			'font-body-small': [
  				'var(--font-body-small-size)',
  				{
  					lineHeight: 'var(--font-body-small-line-height)',
  					fontWeight: 'var(--font-body-small-weight)',
  					letterSpacing: 'var(--font-body-small-letter-spacing)',
  					fontStyle: 'var(--font-body-small-style)'
  				}
  			]
  		},
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	},
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: ["class"],
};
