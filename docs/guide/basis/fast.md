# koa 简介

Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并没有捆绑任何中间件， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。

## 初始化项目

`npm init -y`

## 安装 Koa2

`npm install koa`

编写 HelloWorld

```js
import Koa from 'koa'
const app = new Koa()

app.use(ctx => {
    ctx.body = 'hello! world'
})

app.listen(3000)
```

## 运行

`node index.js`

浏览器输入[http://localhost:3000](http://localhost:3000)即可看到 hello world
