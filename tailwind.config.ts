export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		extend: {
			screens: {
				'tiny': '279px',
				'mb': '428px',
				'tb': '768px',
				'sm': '1024px',
				'sd': '1280px',
				'md': '1366px',
				'lg': '1440px',
				'xl': '1920px',
				'xxl': '2000px',
				'xxxl': '3000px',
				'custombp': {'raw': '(min-height: 1036px)'},
				'customMin': {'raw': '(max-height: 900px)'}
			},
			colors: {
				'bright-cyan': '#00B0DB',
				'vivid-black': '#070101',
				'vivid-blue':'#161339',
				'smh-pink': '#0A0203',
				'lighter-pink': '#FFD7E0',
				'dim-pink': '#E7809F',
				'dark-blue': '#192958',
				'smh-blue': '#0A1633',
				'bright-pink': '#EC008C',
				'button-blue': '#009FC7'
			},
			fontSize: {
				clampHeading: "clamp(38px, 6vw, 120px)",
				clampHeading2: "clamp(35px, 2vw, 35px)",
				clampHeading3: "clamp(40px, 3vw, 90px)",
				clampHeading4: "clamp(30px, 1vw, 38px)",
				clampHeading5: "clamp(14px, 1vw, 16px)",
				clampHeading6: "clamp(185px, 1vw, 200px)",
				clampHeading7: "clamp(10px, 2vw, 14px)",
				clampHeading8: "clamp(120px, 6vw, 120px)",
				clampHeadingSub: "clamp(30px, 6vw, 45px)",
				clampHeadingMain: "clamp(52px, 5vw, 120px)",
				'20': ['20px', '24px'],
				'22': ['22px', '28px'],
				'14': ['12px', '18px'],
				'16': ['16px', '22px'],
				'19': ['19px', '36px'],

				'25': ['25px', '36px'],
				'30': ['30px', '36px'],
				'50': ['50px', '60px'],
				'35': ['35px', '50px'],
				'95': ['50px', '95px'],
				'100': ['100px', '135px'],
				'140': ['140px', '225px'],
				'125': ['125px', '150px'],
				'150': ['150px', '175px'],
				'180': ['180px', '235px'],
				'190': ['190px', '230px'],
				'200': ['200px', '235px']
			  },
			  lineHeight: {
				tight: '1.00',
				normal: '1.35',
				custom: '1.5',
			},
			borderWidth: {
				DEFAULT: '0.5px',
			},
			dropShadow: {
				'3xl': '0 35px 35px rgba(0, 0, 0, 1.25)',
				'4xl': [
					'0 35px 35px rgba(0, 0, 0, 0.25)',
					'0 45px 65px rgba(0, 0, 0, 0.15)'
				]
			  }
		}
	},
  plugins: [],
};
