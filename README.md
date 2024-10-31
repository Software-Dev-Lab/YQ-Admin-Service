<!--
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-10
 * @Description: 
-->
# koa-admin-server

本项目是基于**Node**、**Koa**、**Typescript**、**mysql**、** 制作的 admin 后台管理系统服务端

## 启动后端服务流程

1. 自己创建数据库表

2. 导入 ym_admin.sql 初始数据

3. 将根路径的 .env.yours的数据库内容修改为你自己的 并将后缀名 **.yours** 删除

4. 在config文件下创建 keys/private-key.pem  keys/public-key.pem, 分别为私钥和公钥匙，自己生成私钥公钥, 命令如下:

```shell
openssl genrsa -out private-key.pem 2048
openssl rsa -in private-key.pem -pubout -out public-key.pem
```

5. 执行命令

```shell
pnpm i # 安装包
pnpm run dev # 启动项目
```

## 项目核心目录结构

```bash
- src
  - app
  - config
  - controller
  - middleware
  - models
  - router
  - service
  - utils
  - types
```
