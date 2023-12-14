module.exports = {
  plugins: [
    require('postcss-import')(),
    require('@fullhuman/postcss-purgecss')({
      content: ['./_site/**/*.html']
    }),

    require('cssnano')({
      preset: ['default', { discardComments: { removeAll: true } }],
    })
  ]
}
