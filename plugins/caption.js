const plugin = require('tailwindcss/plugin')

const caption = plugin(function({addUtilities}){
    addUtilities({
        '.caption-bottom': {
            'caption-side': 'bottom'
        },
        '.caption-top': {
            'caption-side': 'top'
        }
    })
})

module.exports = caption;