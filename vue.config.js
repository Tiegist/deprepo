module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/your-repo-name/'
      : '/',
    configureWebpack: {
      // Add any additional configurations here
    },
    // Other options can also be specified here
  }