const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  theme: {
    fontSize: {
      '3xs': ['0.625rem', { lineHeight: '1.5' }], // 10px equivalent
      '2xs': ['0.6875rem', { lineHeight: '1.5' }], // 11px equivalent
      xs: ['0.75rem', { lineHeight: '1.5' }], // 12px equivalent
      sm: ['0.8125rem', { lineHeight: '1.5' }], // 13px equivalent
      base: ['0.875rem', { lineHeight: '1.5' }], // 14px equivalent
      lg: ['0.9375rem', { lineHeight: '1.5' }], // 15px equivalent
      xl: ['1rem', { lineHeight: '1.5' }], // 16px equivalent
      '2xl': ['1.125rem', { lineHeight: '1.5' }], // 18px equivalent
      '3xl': ['1.25rem', { lineHeight: '1.5' }], // 20px equivalent
      '3.5xl': ['1.375rem', { lineHeight: '1.5' }], // 22px equivalent
      '4xl': ['1.5rem', { lineHeight: '1.5' }], // 24px equivalent
      '4.25xl': ['1.625rem', { lineHeight: '1.5' }], // 26px equivalent
      '4.5xl': ['1.75rem', { lineHeight: '1.5' }], // 28px equivalent
      '5xl': ['1.875rem', { lineHeight: '1.5' }], // 30px equivalent
      '5.5xl': ['2rem', { lineHeight: '1.5' }], // 32px equivalent
      '5.75xl': ['2.125rem', { lineHeight: '1.5' }], // 34px equivalent
      '6xl': ['2.25rem', { lineHeight: '1.5' }], // 36px equivalent
      '6.25xl': ['2.5rem', { lineHeight: '1.5' }], // 40px equivalent
      '6.35xl': ['2.625rem', { lineHeight: '1.5' }], // 42px equivalent
      '6.5xl': ['2.75rem', { lineHeight: '1.5' }], // 44px equivalent
      '7xl': ['3rem', { lineHeight: '1.5' }], // 48px equivalent
      '7.25xl': ['3.125rem', { lineHeight: '1.5' }], // 50px equivalent
      '7.5xl': ['3.5rem', { lineHeight: '1.5' }], // 56px equivalent
      '8xl': ['3.75rem', { lineHeight: '1.5' }], // 60px equivalent
      '8.5xl': ['4rem', { lineHeight: '1.5' }], // 64px equivalent
      '9xl': ['4.5rem', { lineHeight: '1.5' }], // 72px equivalent
      '10xl': ['6rem', { lineHeight: '1.5' }], // 96px equivalent
    },
    extend: {
      animation: {
        'spin-l': 'spin-l 1s linear infinite',
        stroke: 'stroke 1s ease-out forwards',
      },
      backgroundImage: {
        'radial-shadow': 'radial-gradient(50% 50% at 50% 50%, currentColor 0%, transparent 100%)',
        'diagonal-stripes':
          'repeating-linear-gradient(-45deg,#e6e8eb,#e6e8eb 1px,#fff 1px,#fff 12px)',
      },
      borderRadius: {
        1: '1px',
      },
      borderWidth: {
        3: '3px',
      },
      minHeight: {
        0: '0',
        'card-sm': '7.5rem',
        'button-sm': '1.75rem',
        'button-md': '2.375rem',
        button: '3rem',
        carousel: '3.5rem',
        83: '21.5rem',
      },
      minWidth: {
        'button-sm': '1.75rem',
        'button-md': '2.375rem',
        button: '3rem',
        'table-cell': '2.5rem',
        'tab-link': '5rem',
      },
      maxWidth: {
        'dialog-sm': '24.5rem',
        '10xl': '26rem',
        dialog: '28rem',
        'screen-2xl': '1440px',
        'clubs-modal': '612px',
      },
      maxHeight: {
        '3/4-screen': '75vh',
        'interactive-tooltip': '448px',
      },
      objectPosition: {
        banner: '70% 0',
      },
      opacity: {
        35: '.35',
        98: '.98',
      },
      outline: (theme) => ({
        transparent: ['2px solid transparent', '0px'],
        focus: [`2px solid ${theme('colors.blue.900')}`, '-1px'],
      }),
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        0.75: '0.175rem',
        1.25: '0.3125rem', // 5px equivalent
        1.75: '0.4375rem', // 7px equivalent
        2.25: '0.563rem', // 9px equivalent
        2.75: '0.688rem', // 11px equivalent
        3.25: '0.813rem', // 13px equivalent
        3.75: '0.938rem', // 15px equivalent
        4.5: '1.125rem', // 18px equivalent
        4.75: '1.25rem', // 20px equivalent
        5.5: '1.375rem', // 22px equivalent
        9.5: '2.375rem', // 38px equivalent
        12.5: '3.125rem', // 50px equivalent
        13: '3.25rem', // 52px equivalent
        13.5: '3.375rem', // 54px equivalent
        15: '3.75rem', // 60px equivalent
        17: '4.25rem', // 68px equivalent
        18: '4.5rem', // 72px equivalent
        22: '5.25rem', // 84px equivalent
        23: '5.75rem', //92px equivalent
        23.5: '5.875rem', //94px equivalent
        25: '6.25rem', // 100px equivalent
        26: '6.5rem', // 104px equivalent
        27: '6.75rem', // 108px equivalent
        30: '7.25rem', // 116px equivalent
        34: '8.25rem', // 132px equivalent
        38: '9.563rem', // 153px equivalent
        42: '10.5rem', //168px equivalent
        50: '12.5rem', // 200px equivalent
        'action-card-wide': '10.563rem',
        'activity-card-wide': '11.25rem',
        dialog: '28rem',
        'dialog-lg': '42.5rem',
        'primary-nav': '3.75rem',
        'secondary-nav': '3rem',
        'all-nav': '6.75rem',
        'standalone-footer-nav': '5rem',
        'standalone-menu-gutter': '4.6875rem',
        'tabs-wide': '8.5rem',
        'media-thumbnail-tile': '5rem',
        'nav-search': '728px',
        'side-bar': '378px',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
      stroke: (theme) => theme('colors'),
      strokeWidth: {
        3: '3',
        4: '4',
        8: '8',
      },
      transformOrigin: {
        'center-left': 'center left',
      },
      height: {
        '2px': '2px',
        83: '21.5rem',
        120: '38rem',
        168: '45rem',
        170: '48rem',
        'card-md': '8.75rem',
        '1/4-screen': '25vh',
        '3/4-screen': '75vh',
        'screen-w': '100vw',
        'masthead-xl': '381px',
        'masthead-lg': '513px',
        'long-button': '56px',
        'sm-icon': '24px',
        'tooltip-image': '223px',
      },
      width: {
        '2px': '2px',
        8.5: '2.125rem',
        22: '5.3125rem',
        24.5: '6.125rem',
        36: '8.75rem',
        45: '11.25rem',
        80: '20rem',
        82: '21rem',
        84: '22rem',
        118: '29.5rem',
        241: '60.25rem',
        'mini-profile': '280px',
        card: '330px',
        toast: '360px',
        inspector: '370px',
        '7/10': '70%',
        tooltip: '420px',
        'tooltip-small': '328px',
      },
      zIndex: {
        '-1': '-1',
        '-10': '-10',
        modal: '100',
        'toast-container': '150',
        'notif-banner': '200',
        select: '250',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active', 'checked', 'hocus-within', 'odd'],
      borderColor: ['active', 'focus', 'checked', 'ph-shown'],
      borderWidth: ['first', 'last', 'focus', 'hover'],
      borderRadius: ['first', 'last', 'focus', 'hover'],
      letterSpacing: ['ph-shown'],
      fontFamily: ['ph-shown'],
      scale: ['group-hover'],
      textColor: ['disabled', 'odd', 'even', 'first', 'last'],
      padding: ['last'],
      margin: ['last'],
      display: ['group-hover'],
      zIndex: ['hover', 'active'],
      fill: ['hover', 'focus'],
    },
  },
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
