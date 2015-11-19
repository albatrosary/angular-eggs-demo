(function() {
  'use strict';

  module.exports = {
    base: {
      src: ['app/**/*.ts'],
      dest: '.tmp/scripts/main.js',
      options: {
        experimentalDecorators: true,
        module: 'amd', //or commonjs
        target: 'es5', //or es3
        sourceMap: true,
        declaration: true,
        references: [
          'app/typings/**/*.d.ts'
        ]
      }
    }
  };
})();
