png-pixel
======

[![npm version](https://badge.fury.io/js/png-pixel.svg)](https://badge.fury.io/js/png-pixel)

Draw pixels in PNG easy.

## Installation
    npm install png-pixel --save

## Example
```js
    const PNGPixel = require('png-pixel');
    
    PNGPixel.add('input.png', 'output.png', [
        {x: 0, y: 0, color: '24B3E3'},
        {x: 1, y: 1, color: 'E32437'},
    ]).then(function(writeStream) {
        writeStream.on('close', function() {
          console.log(`PNG written to ${this.path}`);
        });
    });
```

Note: Input file need to be already exist before adding pixels.

    
    
    


