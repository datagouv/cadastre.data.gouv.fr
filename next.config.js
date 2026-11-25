import {execSync} from 'node:child_process'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// Version shown in the footer: APP_VERSION, else latest git tag, else short commit hash
function getAppVersion() {
  try {
    return process.env.APP_VERSION || execSync('git describe --tags --abbrev=0 || git rev-parse --short HEAD', {stdio: ['ignore', 'pipe', 'ignore']}).toString().trim()
  } catch {
    return ''
  }
}

export default withBundleAnalyzer({
  // `next/image` is not used: disable the image optimizer endpoint (/_next/image)
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: getAppVersion(),
  },
})
