png-pixel
======

[![npm version](https://badge.fury.io/js/png-pixel.svg)](https://badge.fury.io/js/png-pixel)

Draw pixels in PNG easy.

## Installation
    npm install png-pixel --save

## Example
    const PNGPixel = require('png-pixel');
    
    PNGPixel.add('input.png', 'output.png', [
        {x: 0, y: 0, color: '24B3E3'},
        {x: 1, y: 1, color: 'E32437'},
    ]);
    

Note: Input file need to be already exist before adding pixels.

    
    
    


