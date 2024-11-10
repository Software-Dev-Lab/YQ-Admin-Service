import type { Context } from 'koa'
import ChatService from '../service/chat.service'

class ChatController {
  async getAllChatRecords(ctx: Context) {
    const records = await ChatService.allChatRecords()
    ctx.body = {
      code: 200,
      data: records,
      msg: '获取成功',
    }
  }
  async getChatRecordsBetween(ctx: Context) {
    const { recipient_id, send_id } = ctx.request.body as any
    const records = await ChatService.betweenChatRecords(recipient_id, send_id)

    ctx.body = {
      code: 200,
      data: records,
      msg: '获取成功',
    }
  }
}

export default new ChatController()
