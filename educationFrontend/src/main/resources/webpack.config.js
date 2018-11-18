const PUBLIC_PATH = require('path').join(__dirname, 'public');
console.log(PUBLIC_PATH);
// const { initBackendStub } = require('./backendStub/backendStub');
// const { initBackendStub } = require('./utils/backendProxy');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
      // path: PUBLIC_PATH,
      path: "C:\\Users\\Lodbrok\\Documents\\javaProjects\\educationWeb\\backend\\src\\main\\resources\\templates",
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
