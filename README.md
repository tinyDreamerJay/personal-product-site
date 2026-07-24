# personal-product-site

tinyDreamerJay 的个人介绍与产品作品集。网站采用两页结构：首页介绍个人方向与代表作品，产品页集中展示私有业务系统 SiYan 和开源编程 Agent Cagent。

## 快速开始

前置条件：Node.js 22 或更高版本、pnpm 10 或更高版本。

```powershell
pnpm install
pnpm dev
```

开发服务器默认打开 `http://localhost:5173`。页面可以正常显示、导航可以在“关于我”和“产品”之间切换，即表示启动成功。

## 常用命令

| 命令 | 用途 |
|---|---|
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 执行 TypeScript 检查并构建生产文件 |
| `pnpm lint` | 检查代码问题 |
| `pnpm preview` | 本地预览生产构建 |

## 内容来源

- SiYan：私有仓库。网站只使用已核实的产品定位、功能和技术信息，不公开源代码或敏感配置。
- Cagent：[GitHub 仓库](https://github.com/tinyDreamerJay/Cagent)。
- 个人资料：[tinyDreamerJay](https://github.com/tinyDreamerJay)。

## 页面结构

| 路径 | 内容 |
|---|---|
| `/` | 个人介绍、能力方向与代表作品入口 |
| `/products` | SiYan 与 Cagent 的统一产品介绍页 |

## 项目说明

长期协作规则、内容边界和验证要求见 [AGENTS.md](AGENTS.md)。项目目前是纯静态前端，不需要后端、数据库或环境变量。

## 生产部署

- 公网地址：`http://123.56.110.90:10000`
- ECS 网站目录：`/var/www/personal-product-site`
- Nginx 配置：`/etc/nginx/sites-available/personal-product-site`
- Nginx 监听端口：`10000`
- ECS 防火墙：UFW 已放行 `10000/tcp`

发布新版本前运行 `pnpm lint` 和 `pnpm build`，再把 `dist/` 中的构建结果同步到网站目录。同步后依次运行 `nginx -t` 和 `systemctl reload nginx`，最后检查 `/` 与 `/products` 均返回 `200`。生产部署不要上传源码、密码或其他凭据。
