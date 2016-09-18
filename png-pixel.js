const fs = require('fs');
const PNG = require('pngjs').PNG;
const convert = require('color-convert');

PNGPixel = {
  add: function(input, output, pixels) {
    return new Promise(function(resolve, reject) {
      fs.createReadStream(input)
        .pipe(new PNG({}))
        .on('parsed', function callback() {
          pixels.map(pixel => {
            const idx = (this.width * parseInt(pixel.y, 10) + parseInt(pixel.x, 10)) << 2;
            const col = convert.hex.rgb(pixel.color);

            this.data[idx] = col[0];
            this.data[idx + 1] = col[1];
            this.data[idx + 2] = col[2];
            this.data[idx + 3] = pixel.opacity || 255;
            return pixel;
          });

          resolve(this.pack().pipe(fs.createWriteStream(output)));

        });
    });
  }
}

module.exports = PNGPixel;
