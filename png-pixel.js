const fs = require('fs')
const { PNG } = require('pngjs')
const convert = require('color-convert')

PNGPixel = {
  add: (input, output, pixels) => {
    return new Promise((resolve, reject) => {
      fs.createReadStream(input)
        .pipe(new PNG({}))
        .on('parsed', function () {
          const imageInfo = this

          pixels.map(function (pixel) {
            const idx = (imageInfo.width * parseInt(pixel.y, 10) + parseInt(pixel.x, 10)) << 2
            const col = convert.hex.rgb(pixel.color)

            imageInfo.data[idx] = col[0]
            imageInfo.data[idx + 1] = col[1]
            imageInfo.data[idx + 2] = col[2]
            imageInfo.data[idx + 3] = pixel.opacity || 255
            return pixel
          });

          this.pack().pipe(fs.createWriteStream(output)).on('close', data => resolve())
        })
    })
  }
}

module.exports = PNGPixel
