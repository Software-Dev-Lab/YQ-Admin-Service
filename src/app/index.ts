/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description:
 */
import Koa from 'koa'
import cors from 'koa2-cors'
import { router } from '../router'
import { corsHandler } from './cors'
import swagger from '../config/swagger'
import bodyParser from 'koa-bodyparser'
import { koaSwagger } from 'koa2-swagger-ui'
import { errorHandler } from './error-handler'

// import synchonize from '../models/sync'
// synchonize()

const app = new Koa()

// ctx.body
app.use(bodyParser())

app.use(cors(corsHandler))

// errorHandler
app.on('error', errorHandler)

// swagger 配置
app.use(swagger.routes())
app.use(swagger.allowedMethods())
app.use(
  koaSwagger({
    routePrefix: '/service-docs',
    swaggerOptions: {
      url: '/swagger.json',
    },
  })
)

// 导入路由
app.use(router.routes())
app.use(router.allowedMethods())

export default app
