const path = require('path')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')   //打包完成自动打开浏览器
const HtmlWebpackPlugin = require("html-webpack-plugin")            //自动生成一个html 引入打包之后的js

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
    app: __dirname        
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname,'App'),
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/react-native-uncompiled')
        ],
        use:[{
            loader: 'babel-loader'
        }]
      },
      {
        test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: "images/[name].[ext]"          //遇到图片  生成一个images文件夹  名字.后缀的图片
            }
        }]
    },
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
    publicPath:`${HOST}:${PORT}/`
  },
  plugins: [
    new webpack.DefinePlugin({
        __DEBUG__: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),           //热加载插件  
    new OpenBrowserPlugin({                            //编译完成打开浏览器
        url: `${HOST}:${PORT}`
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",           //自动把打包的js文件引入进去
      template: path.resolve(__dirname, "./index.html"),  //模板文件
      hash: false,        //添加hash码
  }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    },
    enforceExtension: false,        //2.0 后 不能写 extensions :[""]
    extensions: ['.js', '.jsx', '.json','.web.js'],      //比如 test.js   可以写成 require('test')
    modules: [
        path.resolve("app"),         //比如 src/app/components/xx  可以写成 app/components/xx
        path.resolve("."),
        path.resolve("app/home"),
        path.resolve("app/components"),
        path.resolve("src/shared"),
        path.resolve("src"),
        "node_modules",
    ],
  }
}