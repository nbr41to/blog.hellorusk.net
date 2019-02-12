const fs = require('fs')

module.exports = {
  exportPathMap: async function () {
    fs.copyFileSync('./static/keybase.txt', './out/keybase.txt')

    return {
      '/': { page: '/' },
      '/whoami': { page: '/whoami' },
      '/404.html': { page: '/_error' },
    }
  }
}