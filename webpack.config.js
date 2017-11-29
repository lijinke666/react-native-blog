const path = require('path')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')   //打包完成自动打开浏览器

const HOST = "http://localhost"
const PORT = 666

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),   //静态资源根目录
    port: PORT,           //端口
    // hot: true,            //热更新
    // inline: true,         //iframe 模式
    historyApiFallback: true,    //浏览器 history
    stats: {              //统计
        color: true,      //输出有颜色的信息
        errors: true,     //显示错误信息
        version: true,    //显示版本号
        warnings: true,   //显示警告
        progress: true,   //显示进度,
        timings:true,     //显示时间
    }
  },
  entry: {
    app: __dirname           //index.js
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{
            presets: [
                [
                    "es2015",
                    {
                      "modules": false
                    }
                  ],
                  "stage-3",
                  "react"
            ],
            plugins:[
            "syntax-dynamic-import",   //解析webpack2.4.0  新增的 按需加载 import 语法
            "transform-async-to-generator",     //支持async写法
            "transform-decorators-legacy",      //类的修饰器   @connect
            "transform-object-rest-spread",    //类的静态属性  不会被继承  static defaultProps
            "transform-class-properties",     //可以写类属性 test = ()=>{}
            "transform-runtime"
            ]
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
        __DEBUG__: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),           //热加载插件  
    new OpenBrowserPlugin({                            //编译完成打开浏览器
        url: `${HOST}:${PORT}`
    })
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
}