var path = require( "path" )
var webpack = require( "webpack" )
var merge = require( "webpack-merge" )
var HtmlWebpackPlugin = require( "html-webpack-plugin" )

var TARGET = process.env.npm_lifecycle_event
var ROOT_PATH = path.resolve( __dirname )

var config = {}

var commonConfig = {
  entry: path.resolve( ROOT_PATH, "app/main.jsx" ),
  output: {
    path: path.resolve( ROOT_PATH, "build" ),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: [ "style", "css" ],
      include: path.resolve( ROOT_PATH, "app" )
    }]
  }
}

if ( TARGET === "start" || ! TARGET ) {
  config = {
    module: {
      loaders: [{
        test: /\.jsx?$/,
        loaders: [ "react-hot", "babel" ],
        include: path.resolve( ROOT_PATH, "app" )
      }]
    },
    devtool: "eval-source-map",
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: "Kanban app"
      })
    ],
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    }
  }
}

module.exports = merge( commonConfig, config )
