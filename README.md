# gl-blend-demo

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A demo to visualize different blend modes. Takes in a shader, width, and height, and returns a GL canvas context with a test image blended over a background. 

## Usage

[![NPM](https://nodei.co/npm/gl-blend-demo.png)](https://www.npmjs.com/package/gl-blend-demo)

#### `gl = example(opt)`

Build an example where `opt` can be:

- options for [webgl-context](https://github.com/mattdesl/webgl-context) (width, height, etc)
- `shader` which can be a function to create a shader (taking `gl` as first parameter) or a `gl-shader` object

Returns the GL context, which might then be added to document.body.

## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing).

## License

MIT, see [LICENSE.md](http://github.com/Jam3/gl-blend-demo/blob/master/LICENSE.md) for details.
