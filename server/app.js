const { createSVGWindow } = require('svgdom')
const fs = require('fs');
const { SVG, registerWindow } = require('@svgdotjs/svg.js')

const express = require('express')
const app = express()
const port = 3000

app.use('dangers', express.static('dangers_uri'))

app.get('/labels', (req, res) => {
  const window = createSVGWindow()
  const document = window.document
  registerWindow(window, document)

  const params = req.query;
  const dangers = params['d'].split(",")
  const size = params['size'] ? Number(params['size']) : 100

  var canvas = SVG(document.documentElement).size(size*dangers.length, size)

  var xmove = 0
  dangers.forEach(danger => {
    var file = fs.readFileSync(`dangers_uri/${danger}.txt`).toString();
    canvas.image(file).size(size, size).move(xmove, 0)
    xmove += size
  });
  // console.log(canvas.svg())
  res.contentType('svg')
  res.send(canvas.svg())
})

app.get('/test', (req, res) => {
  const window = createSVGWindow()
  const document = window.document
  registerWindow(window, document)

  var canvas = SVG(document.documentElement).size(100, 100)
  canvas.rect(50,50)

  res.contentType('svg')
  res.send(canvas.svg())
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
