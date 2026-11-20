import {execSync} from 'node:child_process'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

// Version shown in the footer: latest git tag, overridable via APP_VERSION
function getAppVersion() {
  if (process.env.APP_VERSION) {
    return process.env.APP_VERSION
  }

  try {
    return execSync('git describe --tags --abbrev=0', {stdio: ['ignore', 'pipe', 'ignore']}).toString().trim()
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
