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
      libraryTarget: "umd", //  子应用打包成 umd 格式
      library: `${name}`,  //  子应用写入到 window 中
    }
  }
}
