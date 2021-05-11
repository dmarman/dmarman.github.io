const path = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  externals: {
    'chart.js': 'Chart'
  },
  plugins: [
    new webpack.ProvidePlugin({
      Chart: 'chart.js'
    })
  ]
}

const dist = Object.assign({},config,{
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chartjs-plugin-dragdata.js'
  }
})

const prod = Object.assign({},config,{
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chartjs-plugin-dragdata.min.js'
  }
})

const assets = Object.assign({},config,{
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs/assets'),
    filename: 'chartjs-plugin-dragdata.min.js'
  }
})

module.exports = [
  dist, prod, assets
]
