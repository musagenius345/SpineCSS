module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
          svgo: false,
        }
      }]
    }),
      require('postcss-preset-env')({
      stage: 0,
      features: {
        'logical-properties-and-values': false,
        'prefers-color-scheme-query': false,
        'gap-properties': false,
        'custom-properties': false,
        'place-properties': false,
        'not-pseudo-class': false,
        'focus-visible-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'color-functional-notation': false,
        // 'custom-media-queries': {},
        'double-position-gradients': false,
      }
    })
  ]
}