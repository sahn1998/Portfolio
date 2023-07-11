module.exports = {
    rules: [
      // ...other rules
      {
        test: /\.geojson$/,
        loader: 'geojson-loader',
        type: 'javascript/auto', // Required for Webpack 4 and above
      },
    ],
}