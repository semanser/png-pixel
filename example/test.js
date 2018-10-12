const PNGPixel = require('../png-pixel.js')

PNGPixel.add('input.png', 'output.png', [
    {x: 14, y: 10, color: '#24B3E3'},
    {x: 14, y: 11, color: '#E32437'},
]).then(() => console.log('PNG successfully written'))
