module.exports = {
  transpileDependencies: [
    /\bvue-awesome\b/
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_ASSETS_URL
    : '/'
}
