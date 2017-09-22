import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify';

const cssmin = new CleanCSS();
const htmlminOpts = {
  caseSensitive: true,
  collapseWhitespace: true,
  removeComments: true,
};

export default {
  entry: 'src/main-aot.js',
  dest: 'aot-dist/build.js',
  sourceMap: false,
  format: 'iife',
  onwarn: function(warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    // intercepts in some rollup versions
    // if ( warning.indexOf("The 'this' keyword is equivalent to 'undefined'") > -1 ) { return; }

    // console.warn everything else
    console.warn( warning.message );
  },
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: ['node_modules/**/*'],
      namedExports: {
        'node_modules/@progress/kendo-drawing/node_modules/pako/dist/pako_deflate.js': [ 'deflate' ]
      }
    }),
    uglify()
  ]
}
