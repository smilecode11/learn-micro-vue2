const path = require("path");
const { name } = require('./package.json')

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      progress: true,
    },
    port: 9004,
    headers: {
      'Access-Control-Allow-Origin': '*'  //  本地服务允许跨域
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      // jsonpFunction: `webpackJsonp_${name}`,

    }
  }
}
