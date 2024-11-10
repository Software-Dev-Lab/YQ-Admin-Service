import { DataTypes } from 'sequelize'
import sequelize from '../config/mysql'

const model = sequelize.define(
  'sys_chat',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    send_id: {
      type: DataTypes.BIGINT, // 发送人 id
      allowNull: false,
    },
    recipient_id: {
      type: DataTypes.BIGINT, // 接收人 id
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER, // 内容类型
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER, // 是否发送成功
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    create_at: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    is_read: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0, // 默认值为 0，表示未读
    },
    avatar: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
)

export default model
