import { createServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'
import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import { APP_PORT } from './config'
import { connectMysql } from './config/mysql'

async function runServer() {
  const port = APP_PORT // 端口
  try {
    await Promise.all([
      connectMysql(), // 连接mysql
      // connectRedis(), // 连接redis
    ])

    await new Promise((resolve) => {
      const server = createServer(app.callback())

      const io = new SocketIOServer(server, {
        cors: {
          origin: '*', // 可根据需要设置具体的源
        },
      })

      // 启动服务器
      server.listen(port, () => {
        console.log(`应用运行在: http://127.0.0.1:${port}`)
      })

      // 处理 Socket.IO 连接
      io.on('connection', (socket) => {
        console.log('初始化成功！可以绑定和触发事件了')

        // 监听客户端发送的消息
        socket.on('send', (data: string) => {
          console.log('客户端发送的内容：', data)
          socket.emit('getMsg', '我是返回的消息...')
        })

        // 3秒后发送初始化消息
        setTimeout(() => {
          socket.emit('getMsg', '我是初始化3秒后的返回消息...')
        }, 3000)
      })
    })
  } catch (error) {
    console.log(`项目启动失败:${error}`)
  }
}

runServer()
