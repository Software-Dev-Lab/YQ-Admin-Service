/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description:
 */
import Koa from 'koa'
// 引入 cors 中间件
import cors from 'koa2-cors'
import { router } from '../router'
import { corsHandler } from './cors'
// 引入 bodyParser 中间件
import bodyParser from 'koa-bodyparser'
// 引入错误处理中间件
import { errorHandler } from './error-handler'
// 引入静态资源托管
import serveStatic from 'koa-static'
import path from 'path'

// import synchonize from '../models/sync'
// synchonize()

const app = new Koa()

// ctx.body
app.use(bodyParser())

// cors
app.use(cors(corsHandler))

// 静态资源托管
app.use(serveStatic('../public/uploads'))

// errorHandler
app.on('error', errorHandler)

// swagger 配置

// 导入路由
app.use(router.routes())
app.use(router.allowedMethods())

export default app
