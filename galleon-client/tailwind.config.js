/** @ type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html}"],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#0D0E0F',
      violet: '#7F3DFF',
      red: '#FD3C4A',
      green: '#00A86B',
      yellow: '#FCAC12',
      blue: '#0077FF'
    },
    extend: { fontFamily:{
      inter: ['Inter', 'sans-serif']
    }},
  
    fontSize: {
      xs: [ '12px',{lineHeight: '12px'}],
      sm: [ '13px',{lineHeight: '16px'}],
      md: [ '16px',{lineHeight: '19px'}],
      lg: [ '24px',{lineHeight: '22px'}],
      xl: [ '32px',{lineHeight: '34px'}],
      title: [ '64px',{lineHeight: '80px'}]

    }

  },
  plugins: [
 
  ]
   
}
