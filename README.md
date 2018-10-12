<img alt="Logo" src="./images/header.png"/>

[![npm version](https://badge.fury.io/js/png-pixel.svg)](https://badge.fury.io/js/png-pixel)


## Installation
    npm install png-pixel --save

## Usage
```js
const PNGPixel = require('../png-pixel.js')

PNGPixel.add('input.png', 'output.png', [
    {x: 14, y: 10, color: '#24B3E3'},
    {x: 14, y: 11, color: '#E32437'},
    {x: 2, y: 5, color: 'E4238E', opacity: 128} // opacity is a 0-255
]).then(() => console.log('PNG successfully written'))
```

> Note: Input file need to be already exist before adding pixels.

    
    
    


