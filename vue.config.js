module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/deprepo/'
      : '/',
    configureWebpack: {
      // Add any additional configurations here
    },
    // Other options can also be specified here
  }