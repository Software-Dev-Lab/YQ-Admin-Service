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
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    recipient_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
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
