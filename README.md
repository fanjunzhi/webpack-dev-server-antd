## 声明
该架构是我们公司现在开发的前端架构，基于开源和帮助的原则，故共享出来。
不是很完美，请轻吐槽。
基于架构做了一个示例：http://www.woaizm.com/home.html

## 开发命令
```
npm run dev
```

## 上线命令
```
npm run build-release
```

## 目录解析
/src/entry/
该目录下的文件会自动生成webpack的入口

#前端项目架构
*基于node.js 和 ant.design*
##需要node.js版本
```
node 4.x
```
##准备
```
sudo npm install webpack -g
sudo npm install webpack-dev-server -g
```
##前端环境安装启动
*注：如果执行npm install 中途取消，需要重新安装，要清除npm缓存 npm cache clean 删除 node_modules 文件夹，再执行npm install重新安装*
```
npm run dev #开启前端静态服务器（构建生成的文件放在内存中，不生成具体的文件），结合后端服务器可以做到浏览器自动刷新，方便开发。详见下面说明

npm run build-dev #构建development（开发）环境前端代码
npm run build-test #构建test（测试）环境前端代码
npm run build-release #构建（生产）环境前端代码
```

##dev-server
>- 结合webpack-dev-server 可以做到代码改动,浏览器自动刷新.
 - 使用webpack-dev-server 作为静态服务器,以--inline方式启动,js中会添加热刷新相关的代码.前后端各添加一个开发服务器的配置,对项目基本无侵入.
 - 注意前端静态服务器的端口，硬编码方式，多处有对应。

nodejs为例:

> 后台正式服务器添加一个启动模式:

```
exports.devserver = {
    static_url_prefix: 'http://localhost:9096/s/' //这个指向webpack-dev-server服务器
};
```
> 前端webpack.config.js添加一个启动模式:

```
"devserver": {
    "path": '../public',
    "publicPath": 'http://localhost:9096/s/' //这个指向webpack-dev-server服务器
},
```

> webpack-dev-server 启动方式:(以devserver方式启动)
*可以在assets目录中直接执行`npm run dev-server`*    

```
webpack-dev-server --port 9096 --progress --inline  --cfg.clean=false --cfg.runmod=devserver
```

> 后端启动方式:(以devserver方式启动,nodejs 为例：)
*可以在根目录中直接执行`npm run dev`*


> 浏览器输入下面连接访问,就可以达到浏览器自动刷新,尤其适合双屏开发，调整页面细节情况.

```
http://localhost:9090/.../home.html（由于开发模式的资源文件是存在内存的，如果直接打开html文件会报错，采用localhost的方式打开html文件）    
