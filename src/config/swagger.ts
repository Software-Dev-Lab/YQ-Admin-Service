import Router from 'koa-router'
import swaggerJSDoc from 'swagger-jsdoc'
import path from 'path'

const swagger = new Router()

const swaggerDefinition = {
  info: {
    title: 'YQ-Admin-Koa-Server: 中后台解决方案',
    version: '1.0.0',
    description:
      'YQ-Admin-Koa-Server 是一套基于 Koa 框架的中后台解决方案，提供了用户管理、权限管理、菜单管理、角色管理、日志管理等功能，帮助开发者快速搭建中后台应用。',
  },
  host: 'localhost:8000',
  basePath: '/',
}

const options = {
  swaggerDefinition,
  apis: [path.resolve(__dirname, '../router/*.ts')],
}

const swaggerSpec = swaggerJSDoc(options)

swagger.get('/swagger.json', async function (ctx) {
  ctx.set('Content-Type', 'application/json')
  ctx.body = swaggerSpec
})

export default swagger
