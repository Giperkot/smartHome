const PUBLIC_PATH = require('path').join(__dirname, 'public');
console.log(PUBLIC_PATH);
// const { initBackendStub } = require('./backendStub/backendStub');
// const { initBackendStub } = require('./utils/backendProxy');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
      // path: PUBLIC_PATH,
      path: PUBLIC_PATH + "/target",
      filename: "index.js",
      library: "index"
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 3000,
    // before: initBackendStub
  }
  ,

  devtool: "cheap-inline-module-source-map"
};
