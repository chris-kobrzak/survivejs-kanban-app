var path = require( "path" )
var webpack = require( "webpack" )
var HtmlWebpackPlugin = require( "html-webpack-plugin" )
var ROOT_PATH = path.resolve( __dirname )

module.exports = {
  entry: path.resolve( ROOT_PATH, "app/main" ),
  output: {
    path: path.resolve( ROOT_PATH, "build" ),
    filename: "bundle.js"
  },
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
