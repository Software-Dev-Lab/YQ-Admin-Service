import ChatModel from '../models/chat.model'

class ChatService {
  async allChatRecords() {
    const records = await ChatModel.findAll()
    return records
  }
}

export default new ChatService()
