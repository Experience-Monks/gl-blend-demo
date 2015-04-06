var Texture = require('gl-texture2d')
var triangle = require('a-big-triangle')
var xtend = require('xtend')

module.exports = function createDemo (opt) {
  var texture = require('baboon-image').transpose(1, 0, 2)
  var texture2 = require('lena').transpose(1, 0, 2)

  // default to texture size
  opt = xtend({
    width: texture.shape[0],
    height: texture.shape[1]
  }, opt)

  // setup context & textures
  var gl = require('webgl-context')(opt)
  var shader = typeof opt.shader === 'function' ? opt.shader(gl) : opt.shader

  // expose an API
  var demo = {
    gl: gl,
    canvas: gl.canvas,
    shader: shader,
    render: render
  }

  // test textures for now to blend with
  var tex1 = Texture(gl, texture)
  var tex0 = Texture(gl, texture2)

  // draw it to the canvas
  render()
  return demo

  function render () {
    var gl = demo.gl
    var shader = demo.shader

    gl.disable(gl.DEPTH_TEST)
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)

    shader.bind()
    shader.uniforms.background = 0
    shader.uniforms.foreground = 1

    tex1.bind(1)
    tex0.bind(0)

    triangle(gl)
  }
}
