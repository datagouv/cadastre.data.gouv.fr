const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
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
