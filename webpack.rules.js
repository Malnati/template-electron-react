const path = require('path');

module.exports = [
  // Add support for native node modules
  {
    // We're specifying native_modules in the test because the asset relocator loader generates a
    // "fake" .node file which is really a cjs file.
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader',
  },
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(js|jsx)$/,
    use: {
      loader: 'babel-loader',
      options: {
        exclude: /node_modules/,
        presets: ['@babel/preset-react']
      }
    }
  },
  {
    test: /\.(jpg|jpeg|png|gif|svg)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
          outputPath: 'images',
          publicPath: 'images',
          /*
          publicPath: (url, resourcePath, context) => {
            if (process.env.NODE_ENV === 'production') {
              return `./${url}`;
            } else {
              return `file://${path.resolve(__dirname, '', url)}`;
            }
          },
          */ 
        },
      },
    ],
  },
];
