const {join} = require('path')
const nextRuntimeDotenv = require('next-runtime-dotenv')

const withConfig = nextRuntimeDotenv({
  public: [
    'API_ADRESSE'
  ]
})

module.exports = withConfig({
  webpack(config, {dev, isServer}) {
    if (!dev && !isServer) {
      const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: join(__dirname, 'reports/bundles.html'),
        defaultSizes: 'gzip'
      }))
    }

    return config
  },

  exportPathMap() {
    return {
      '/': {page: '/'},
      '/datasets': {page: '/datasets'},
      '/mentions-legales': {page: '/mentions-legales'},
      '/faq': {page: '/faq'},
      '/datasets/plan-cadastral-informatise': {page: '/datasets/plan-cadastral-informatise'},
      '/datasets/cadastre-strasbourg': {page: '/datasets/cadastre-strasbourg'},
      '/datasets/cadastre-etalab': {page: '/datasets/cadastre-etalab'}
    }
  }
})
