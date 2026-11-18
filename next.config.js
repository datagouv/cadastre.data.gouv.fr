import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer({
  // `next/image` is not used: disable the image optimizer endpoint (/_next/image)
  images: {
    unoptimized: true,
  },
})
