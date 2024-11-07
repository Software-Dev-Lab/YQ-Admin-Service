/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-11
 * @Description:
 */
import Router from 'koa-router'
import upload from '../middleware/upload.middleware'

// 创建实例
const uploadRouter = new Router({ prefix: '/upload' })

/**
 * 单文件上传
 */
uploadRouter.post('/single', upload.single('file'), async (ctx, next) => {
  // 图片地址拼接
  const avatarUrl = `http://localhost:3000/public/uploads/${ctx.req.file.filename}`
  ctx.body = {
    code: 200,
    avatarUrl: avatarUrl,
  }
})

/**
 * 多文件上传
 */
export default uploadRouter
