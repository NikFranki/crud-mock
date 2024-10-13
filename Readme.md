# CRUD Mock

## 提高效率，支持热更新文件，自动重启服务

1.1 安装 nodemon
你可以全局或作为开发依赖安装 nodemon。推荐将其作为项目的开发依赖，以确保团队成员使用相同的版本。

bash
Copy code

### 使用 npm 安装 nodemon 作为开发依赖

npm install --save-dev nodemon

### 或者使用 yarn

yarn add --dev nodemon

1.2 配置 nodemon
在项目根目录下创建一个 nodemon.json 文件，用于配置 nodemon 的行为。这个文件可以指定要监视的文件类型、忽略的文件以及重启时执行的命令等。

json
Copy code
{
  "watch": ["src"],
  "ext": "js,json",
  "ignore": ["src/public"],
  "exec": "node src/index.js",
  "env": {
    "NODE_ENV": "development"
  }
}
配置说明：

"watch": 指定要监视的目录或文件。在此示例中，监视 src 目录。watch 可以不配置。 如果你不提供 watch 配置，nodemon 会默认监视当前工作目录及其子目录下的所有文件（默认忽略 node_modules 和其他一些系统默认忽略的文件夹）。因此，如果你的项目不使用 src 目录，移除或调整 watch 配置即可。
"ext": 指定要监视的文件扩展名，例如 js 和 json。
"ignore": 指定要忽略的目录或文件，例如静态文件目录 src/public。
"exec": 指定要执行的命令，例如启动 Express 服务器的入口文件 src/index.js。
"env": 设置环境变量，这里设置 NODE_ENV 为 development。
1.3 修改 package.json 脚本
在 package.json 文件中添加一个新的脚本命令，以便使用 nodemon 启动服务器。

json
Copy code
{
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon"
  }
}
这样，你可以通过以下命令启动开发服务器：

bash
Copy code

使用 npm

npm run dev

或者使用 yarn

yarn dev
1.4 完整示例
假设你的项目结构如下：

css
Copy code
my-express-app/
├── package.json
├── nodemon.json
└── src/
    ├── index.js
    └── routes/
        └── index.js
src/index.js 示例代码：

javascript
Copy code
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 中间件
app.use(express.json());

// 路由
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// 启动服务器
app.listen(port, () => {
  console.log(`服务器正在运行在 http://localhost:${port}`);
});
src/routes/index.js 示例代码：

javascript
Copy code
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = router;
启动开发服务器：

bash
Copy code
npm run dev
现在，当你修改 src 目录下的任何 .js 或 .json 文件时，nodemon 会自动重启服务器，实时反映你的更改。

## 2. 使用 pm2 实现热更新

pm2 是一个功能强大的进程管理工具，除了可以管理生产环境中的应用外，也支持开发环境中的热更新。

2.1 安装 pm2
bash
Copy code

### 全局安装 pm2

npm install -g pm2

### 或者作为开发依赖安装

npm install --save-dev pm2
2.2 配置 pm2
创建一个 ecosystem.config.js 文件，用于配置 pm2 的行为。

javascript
Copy code
module.exports = {
  apps: [
    {
      name: "my-express-app",
      script: "src/index.js",
      watch: true,
      ignore_watch: ["node_modules", "src/public"],
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
2.3 启动 pm2 开发模式
bash
Copy code

### 启动 pm2

pm2 start ecosystem.config.js

### 查看 pm2 状态

pm2 status

### 监控日志

pm2 logs
说明：

watch: true：启用文件监视。
ignore_watch：指定要忽略的目录或文件。
env 和 env_production：设置不同环境的环境变量。
2.4 停止 pm2 应用
bash
Copy code
pm2 stop my-express-app
注意：虽然 pm2 强大，但对于简单的开发环境，nodemon 更加轻量和易用。