const path = require('path');

module.exports = {
  devServer: {
    port: 3000, // Change port here
    disableHostCheck: true // Disables Webpack's invalid host header error
  },
  configureWebpack: { // Aliases for project paths
    resolve: {
      alias: {
        '@Api': path.resolve(__dirname, 'src/api'),
        '@Models': path.resolve(__dirname, 'src/models'),
        '@Controls': path.resolve(__dirname, 'src/components/controls'),
        '@Layouts': path.resolve(__dirname, 'src/components/layouts'),
        '@Pages': path.resolve(__dirname, 'src/components/pages'),
        '@Plugins': path.resolve(__dirname, 'src/plugins'),
        '@Router': path.resolve(__dirname, 'src/router'),
        '@Store': path.resolve(__dirname, 'src/store'),
        '@Utils': path.resolve(__dirname, 'src/utils')
      }
    }
  }
};
