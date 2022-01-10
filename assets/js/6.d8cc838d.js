(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{387:function(t,s,a){t.exports=a.p+"assets/img/001.c93c24f1.png"},397:function(t,s,a){"use strict";a.r(s);var e=a(52),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://koa.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/koa-2.13.4-lightgrey",alt:"koa"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/koajs/multer",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/%40koa%2Fmulter-3.0.0-orange",alt:"@koa/multer"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/koajs/bodyparser",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/koa--bodyparser-4.3.0-orange",alt:"koa-bodyparser"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://mongoosejs.com/",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/mongoose-6.1.4-orange",alt:"mongoose"}}),e("OutboundLink")],1),t._v(" "),e("a",{attrs:{href:"https://github.com/scttcper/koa2-swagger-ui",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://img.shields.io/badge/koa2--swagger--ui-5.3.0-green",alt:"koa2-swagger-ui"}}),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),e("p",[t._v("自从 Node 逐渐兴起时，就一直想做一款后台框架，看了很多优秀的开源项目但是发现没有合适的，要不就是好久没有更新和维护了，于是利用空闲时间自己开始写一套后台框架，最终考虑到自己也是前端工程师的缘故，最终确定了使用 Koa 和 MongoDB 搭建。")])]),t._v(" "),e("h2",{attrs:{id:"功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[t._v("#")]),t._v(" 功能")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   登录 / 注册\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   路由 / 白名单\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   文件上传\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   日志\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   jwt 验证 / 加密\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   跨域\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   接口文档\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   数据库\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   静态资源\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   验证器\n"),e("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v("   全局错误处理\n")])])]),e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),e("p",[t._v("你需要本地安装 node 和 git")]),t._v(" "),e("h2",{attrs:{id:"目录结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),e("p",[t._v("本项目已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("\n├── bin                        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建文件")]),t._v("\n│   └── www                    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行命令")]),t._v("\n├── controller                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 控制器")]),t._v("\n│   └── user.js                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户相关模块")]),t._v("\n├── db                         "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库")]),t._v("\n│   └── index.js               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库配置文件")]),t._v("\n├── logger                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志")]),t._v("\n│   └── index.js               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志配置文件")]),t._v("\n├── model                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 模型")]),t._v("\n│   └── user.js                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户模型文件")]),t._v("\n├── public                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 静态资源文件")]),t._v("\n├── routes                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── upload.js              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上传路由")]),t._v("\n│   └── user.js                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户路由")]),t._v("\n├── utils                      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 工具库")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── config.js              "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# jwt配置文件")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── swagger.js             "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接口文档配置文件")]),t._v("\n│   └── user.js                "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 封装生成token文件")]),t._v("\n├── app.js                     "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口文件")]),t._v("\n└── package.json               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# package.json")]),t._v("\n")])])]),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# clone the project")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/youxiubiji/koa-mongodb-template.git\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enter the project directory")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" koa-mongodb-template\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install dependency")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# develop")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n")])])]),e("p",[t._v("启动完成后会自动打开浏览器访问 "),e("a",{attrs:{href:"http://localhost:3000/swagger",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000/swagger"),e("OutboundLink")],1),t._v("， 你看到下面的页面就代表操作成功了。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(387),alt:""}})]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("建议")]),t._v(" "),e("p",[t._v("到目前位置，你就可以直接写业务逻辑了，")])])])}),[],!1,null,null,null);s.default=n.exports}}]);