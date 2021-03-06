# 功能简介
- [ ] 后台命令行代码生成工具
  - [ ] 结合 knex（要先写好对应的 js 文件）
- [ ] 前端代码生成
  - [ ] 上传 js 文件
  - [ ] 根据 js 文件，生成代码
  - [ ] 可以手动新增数据项
- [ ] 前端代码自动生成
  - [ ] 基本 CRUD

# 后端使用 koa + postgresql + redis
## 各组件作用
* knex: 数据库连接 migrate seed 工具
* chai: 是一个 BDD/TDD 模式的断言库，可以再 node 和浏览器环境运行，可以高效的和任何 js 测试框架搭配使用。BDD，行为驱动开发（注重测试逻辑），TDD是测试驱动开发（注重输出结果）。
* mocha: 是一个功能丰富的 JavaScript 测试框架，他可以跑在 node 和浏览器上，使异步测试变得简单和有趣。Mocha 在运行测试用例过程中，当捕获到错误时，依旧能够灵活地运行精确的报告。
* koa-bodyparser: Koa默认不解析请求体，所以我们需要添加中间件进行正文解析。
* koa-passport是koa的一个中间件，它实际上只是对passport的一个封装。 利用koa-passport可以简便的实现登录注册功能，不但包括本地验证，还有很多提供第三方登录的模块可以使用。
* passport-local这个库提供了一个本地鉴权的代码框架。

# 前端使用 react + Material-UI
## 各组件作用
