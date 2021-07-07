const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

// CONFIG DEFAULT
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };

// CONFIG PERSONALIZADO
module.exports = {
  module: {
    rules: [
      // PARA MANEJAR HTML
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      // PARA MANEJAR CSS
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // PARA MANEJAR JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  plugins: [
    // PARA CREAR UN HTML QUE YA CARGUE NUESTRO JS A PARTIR DE NUESTRO CÓDIGO
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    // PARA EXTRAER EL CSS DE NUESTRO CÓDIGO JS EN UN ARCHIVO APARTE
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  // PARA MINIMIZAR EL CSS
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // PARA REMOVER COMENTARIOS Y MINIFICAR EL CSS FINAL
      new TerserPlugin(), // PARA REMOVER COMENTARIOS Y MINIFICAR EL JS FINAL
    ],
  },
};
