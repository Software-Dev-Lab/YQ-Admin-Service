/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-11
 * @Description:
 */
import menuModel from './menu.model'
import roleModel from './role.model'
import userModel from './user.model'
import roleMenuModel from './roleMenu.model'
import userRoleModel from './userRole.model'
import departmentModel from './department.model'
import chatModel from './chat.model'

roleModel.belongsToMany(menuModel, {
  through: roleMenuModel,
  foreignKey: 'roleId',
})
menuModel.belongsToMany(roleModel, {
  through: roleMenuModel,
  foreignKey: 'menuId',
})

userModel.belongsToMany(roleModel, {
  through: userRoleModel,
  foreignKey: 'userId',
})
roleModel.belongsToMany(userModel, {
  through: userRoleModel,
  foreignKey: 'roleId',
})

userModel.belongsTo(departmentModel, { foreignKey: 'deptId' })
departmentModel.hasMany(userModel, { foreignKey: 'deptId' })

export {
  menuModel,
  roleModel,
  userModel,
  departmentModel,
  roleMenuModel,
  userRoleModel,
  chatModel,
}
