const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: async function(defaultPathMap) {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: !debug ? '/card-display-page/' : '',
  webpack: (config, { dev }) => {
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
}
