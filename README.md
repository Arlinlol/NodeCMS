|--- development.js   //开发环境下的入口文件
|--- nginx.conf  //nginx 配置文件
|--- package.json
|--- pm2.json //pm2 配置文件
|--- production.js //生产环境下的入口文件
|--- README.md
|--- src
| |--- bootstrap  //启动自动执行目录
| | |--- master.js //Master 进程下自动执行
| | |--- worker.js //Worker 进程下自动执行
| |--- config  //配置文件目录
| | |--- adapter.js  // adapter 配置文件
| | |--- config.js  // 默认配置文件
| | |--- config.production.js  //生产环境下的默认配置文件，和 config.js 合并
| | |--- extend.js  //extend 配置文件
| | |--- middleware.js //middleware 配置文件
| | |--- router.js //自定义路由配置文件
| |--- controller  //控制器目录
| | |--- base.js
| | |--- index.js
| |--- service  //服务目录
| | |--- **.js //用户自己定义的服务
| |--- logic //logic 目录
| | |--- index.js
| |--- model //模型目录
| | |--- index.js
|--- view  //模板目录
| |--- index_index.html
|--- www
| |--- static  //静态资源目录
| | |--- css
| | |--- img
| | |--- js


## 特别提示
```
本项目已升级到ThinkJS 3.0 ,项目运行的 Node 版本大于 7.6.0（推荐使用 8.x.x 版本）;
```
## git
> github地址：[https://github.com/arterli/CmsWing](https://github.com/arterli/CmsWing)

> 码云地址：[http://git.oschina.net/arterli/CmsWing](http://git.oschina.net/arterli/CmsWing)

> **简介:**
> - 模块化：全新的架构和模块化的开发机制，便于灵活扩展和二次开发。
> - 模型/栏目/分类信息体系：通过栏目和模型绑定，以及不同的模型类型，不同栏目可以实现差异化的功能，轻松实现诸如资讯、下载、讨论和图片等功能。通过分类信息和栏目绑定，可以自动建立索引表，轻松实现复杂的信息检索。
> - 用户行为：支持自定义用户行为，可以对单个用户或者群体用户的行为进行记录及分享，为您的运营决策提供有效参考数据。
> - 云服务支持：支持云存储、云安全、云过滤和云统计等服务，更多贴心的服务让您的网站更安心。
> - 安全稳健：提供稳健的安全策略，包括备份恢复、容错、防止恶意攻击登录，网页防篡改等多项安全管理功能，保证系统安全，可靠、稳定的运行。

![PC](http://www.cmswing.com/static/dome/macbookpro.png)
![IPAD](http://www.cmswing.com/static/dome/ipad.png)
![iphone](http://www.cmswing.com/static/dome/iphone.png)

## QQ 交流群: 49757468
有问题可以到QQ群 进行交流.

## install dependencies
```
npm install
```
## start server
```
npm start
```

## deploy with pm2

use pm2 to deploy app on production envrioment.

```
可以在项目根目录下执行 pm2 start pm2.json 来启动项目
```

## 后台账号密码1
```
账号:admin
密码:123456
```
## 演示网站
#####PC端直接输入下面网址:
>CmsWing.com [www.cmswing.com](http://www.cmswing.com/ "Title") CMSWing 官网.
>CmsWing.net [www.cmswing.net](http://www.cmswing.net/ "Title") CMSWing 演示网站.
>LVOO[www.lvoo.net](http://www.lvoo.net) 分类信息应用案例展示。
#####手机端,用手机浏览器或者微信客户端扫下面二维码:
![二维码](http://data.cmswing.com/1C30EFE7-A0DD-474B-88B5-4AD2270C422E.png)
## 内置模型 - 同时支持PC端与手机端【微信公众平台】
##### 新闻系统模型 
##### 下载系统模型 
##### 视频系统模型
##### 图库系统模型
##### 商城系统模型
##### 问答社区模型

##后台部分截图

![内容管理](http://data.cmswing.com/%E5%86%85%E5%AE%B9%E7%AE%A1%E7%90%86%20%20%20CmsWing%E5%86%85%E5%AE%B9%E7%AE%A1%E7%90%86%E6%A1%86%E6%9E%B6.png?imageView2/2/w/973)
![微信](http://data.cmswing.com/%E7%81%AB%E7%8B%90%E6%88%AA%E5%9B%BE_2016-05-20T09-51-31.869Z.png?imageView2/2/w/973)

##手机端(微信)前台模版截图

![新闻详情](http://data.cmswing.com/D8738B846D03D0854FA7FBB6C0CE189B.png)

本地运行

安装nodejs

下载并安装node.js安装包，同时会安装npm包管理器(选择7.6.0以上的版本，推荐使用8+)

安装cmswing

下载 CMSWING 到本地.

修改数据库配置文件

打开 src/config/model.js 文件，

把 user(数据库用户名)，password（数据库密码），database（数据库名），host（数据库地址，一般为 127.0.0.1），修改成自己的数据库信息。

安装依赖

进入项目根目录,运行

npm install
如果太慢，可以使用 taobao 源进行安装。

npm install --registry=https://registry.npm.taobao.org --verbose
运行CMSWING

项目根目录下，运行

npm start
如果能看到类似下面的内容，表示服务启动成功。

[2017-06-25 15:21:35.408] [INFO] - Server running at http://127.0.0.1:8360
[2017-06-25 15:21:35.412] [INFO] - ThinkJS version: 3.1
[2017-06-25 15:21:35.413] [INFO] - Enviroment: development
[2017-06-25 15:21:35.413] [INFO] - Workers: 8
前台访问：http://127.0.0.1:8360
后台访问: http://127.0.0.1:8360/admin/index
后台登陆：
账号:admin
密码:123456

线上部署

代码开发、测试完成后，需要部署到线上机器部署然后提供服务。

生产环境

项目根目录下名为 production.js 的文件，该文件为生产环境运行的入口文件，定义的 env 为 production。切不可在生产环境把 development.js 作为入口文件来启动服务。

服务管理

PM2

PM2 是一款专业管理 Node.js 服务的模块，建议在线上使用。使用 PM2 需要以全局的方式安装，如：

sudo npm install -g pm2
安装完成后，命令行下会有 pm2 命令。

创建项目时，会在项目目录下创建名为 pm2.json 的配置文件，内容类似如下：

{
  "apps": [{
    "name": "demo",
    "script": "production.js",
    "cwd": "/Users/welefen/Develop/git/thinkjs/demo",
    "max_memory_restart": "1G",
    "autorestart": true,
    "node_args": [],
    "args": [],
    "env": {}
  }]
}
将 name 字段改为项目名，cwd 字段改为线上项目的具体路径。

项目启动

可以在项目根目录下执行 pm2 start pm2.json 来启动项目，执行完成后会显示如下的信息：



项目重启

由于 Node.js 是自身启动服务运行的，所以当有代码更新后，需要重启服务才能让其生效。

最简单的办法可以通过 pm2 restart pm2.json 重启服务，但这种方式会导致服务临时性的中断（重启服务需要时间，重启过程中会导致无法处理用户的请求从而导致服务中断）。如果不想服务中断，那么可以通过发送信号的方式来重启方式，具体命令为：

pm2 sendSignal SIGUSR2 pm2.json
通过发送 SIGUSR2 信号，pm2 会将这个信号派发给框架，框架主进程捕获到这个信号后，会 fork 一个新的子进程提供服务，然后逐渐将之前的子进程重启，从而达到不中断服务重启的目的。

cluster 模式

框架会强制使用 cluster，然后使用 master/worker 的方式提供服务，所以就不能开启 pm2 中的 cluster 模式（如果开启，那么启动服务会直接报错退出）。

手动管理进程

项目启动

如果生产环境不想使用 PM2 来管理服务，那么可以手工通过脚本来管理，可以先在项目根目录下执行 node production.js 启动服务。

当访问服务没问题后，可以通过 nohup node production.js & 启动服务，通过 nohup 和 & 将服务在后台运行，执行后会看到类似下面的日志：

$ nohup node production.js &
[2] 1114
appending output to nohup.out
看到输出后，回车，执行 exit 命令退出当前终端，这样服务就在后台运行了。

启动完成后，可以通过 ps aux | grep node 查看具体的 node 进程情况：

welefen           3971   0.0  0.3  3106048  46244 s001  S+   11:14AM   0:00.65 /usr/local/bin/node /Users/welefen/demo/production.js
welefen           3970   0.0  0.3  3106048  46064 s001  S+   11:14AM   0:00.64 /usr/local/bin/node /Users/welefen/demo/production.js
welefen           3969   0.0  0.3  3106040  46248 s001  S+   11:14AM   0:00.65 /usr/local/bin/node /Users/welefen/demo/production.js
welefen           3968   0.0  0.3  3106048  46400 s001  S+   11:14AM   0:00.65 /usr/local/bin/node /Users/welefen/demo/production.js
welefen           3967   0.0  0.3  3106048  46608 s001  S+   11:14AM   0:00.65 /usr/local/bin/node /Users/welefen/demo/production.js
welefen           3966   0.0  0.3  3106048  46432 s001  S+   11:14AM   0:00.65 /usr/local/bin/node /Users/welefen/demo/production.js
welefen           3965   0.0  0.3  3106040  46828 s001  S+   11:14AM   0:00.65 /usr/local/bin/node /Users/welefen/demo/production.js
welefen           3964   0.0  0.3  3106048  46440 s001  S+   11:14AM   0:00.64 /usr/local/bin/node /Users/welefen/demo/production.js
welefen           3963   0.0  0.2  3135796  40960 s001  S+   11:14AM   0:00.31 node production.js
其中前面几个为 fork 出来的子进程，最后一个为主进程。

重启服务

当代码修改后，需要重启服务，最简单的办法就是找到主进程的 pid，然后通过 kill -9 PID 杀死进程然后重新启动。如果不想中断服务，那么可以给主进程发送 SIGUSR2 信号来完成：

kill -s USR2 PID
比如上面打印出来的日志中主进程的 pid 为 3963，那么可以通过 kill -s USR2 3963 来无中断重启服务。当然每次这么执行比较麻烦，可以包装成一个简单的脚本来执行。

#!/bin/sh
cd PROJECT_PATH; # 进入项目根目录
nodepid=`ps auxww | grep node | grep production.js | grep -v grep | awk '{print $2}' `
if [ -z "$nodepid" ]; then
    echo 'node service is not running'
    nohup node production.js > ~/file.log 2>&1 &
else
    echo 'node service is running'
    kill -s USR2 $nodepid 2>/dev/null
    echo 'gracefull restart'
fi
使用 nginx

虽然 Node.js 自身可以直接创建 HTTP(S) 服务，但生产环境不建议直接把 Node 服务可以对外直接访问，而是在前面用 WebServer（如：nginx） 来挡一层，这样有多个好处：

可以更好做负载均衡，比如：同一个项目，启动多个端口的服务，用 nginx 做负载
静态资源使用 nginx 直接提供服务性能更高
HTTPS 服务用 nginx 提供性能更高
创建项目时，会在项目根目录下创建了一个名为 nginx.conf 的配置文件：

server {
    listen 80;
    server_name example.com www.example.com;
    root /Users/welefen/Downloads/demo/www;
    set $node_port 8360;
    index index.js index.html index.htm;
    if ( -f $request_filename/index.html ){
        rewrite (.*) $1/index.html break;
    }
    if ( !-f $request_filename ){
        rewrite (.*) /index.js;
    }
    location = /index.js {
        proxy_http_version 1.1;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_pass http://127.0.0.1:$node_port$request_uri;
        proxy_redirect off;
    }
    location ~ /static/ {
        etag         on;
        expires      max;
    }
}
项目中需要将 server_name、root、port 字段值根据实际情况配置，然后将配置文件软链到 nginx 的配置文件目录下，最后重启 nginx 服务即可（可以通过 nginx -s reload 重新加载配置文件）。

如果还是想直接通过 Node.js 提供服务，也是可以的，可以直接监听 80 或者 443 的端口（部分环境下需要 sudo 执行才能监听这二个端口）。

HTTPS

现代网站强制建议使用 HTTPS 访问，这样可以提供网站内容的安全性，避免内容被监听、篡改等问题。如果不愿意支付证书的费用，可以使用 Let’s Encrypt 提供的免费 SSL/TLS 证书，可以参见文章 Let’s Encrypt，免费好用的 HTTPS 证书。

常见问题

为什么上线后静态资源访问不了？

创建项目时，会自动生成中间件配置 src/config/middleware.js（多模块项目文件为 src/common/config/middleware.js），里面有个 resource 中间件用来处理静态资源的请求，但这个中间件默认只在开发环境下开启的，线上环境是关闭的，所以会看到上线后静态资源访问不了的情况。

线上环境静态资源请求推荐用 nginx 来处理，这样性能会更高，对 Node 服务的压力也会小一些。如果非要框架处理静态资源请求，那么可以把 src/config/middleware.js 里的配置打开即可。

module.exports = [
  ...
  {
    handle: 'resource',
    enable: true // 始终开启，默认为 `enable: isDev` 表示只再开发环境下开启
  },
  ...
]



