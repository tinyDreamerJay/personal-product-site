# 协作原则

## 项目目标

本仓库是 tinyDreamerJay 的个人介绍与产品作品集。已确认采用方案 2：只保留两个页面，首页负责个人介绍，产品页集中展示 SiYan 和 Cagent。

## 已确认决策

- 技术栈：React 19、TypeScript、Vite、React Router、原生 CSS、Lucide React。
- 路由：`/` 和 `/products`，不要未经讨论拆成独立产品详情页。
- 产品范围：只展示 SiYan 和 Cagent，不加入其他 GitHub 仓库。
- SiYan 是私有业务系统，不链接私有仓库，不公开源码、账号、服务器、数据和环境变量。
- Cagent 是公开项目，可以链接 `https://github.com/tinyDreamerJay/Cagent`。
- 当前不使用后端、数据库、登录、CMS 或分析服务。
- 生产环境部署在 `123.56.110.90:10000`，由 ECS 上的 Nginx 提供 `dist/` 静态文件和 SPA 路由回退。

## 产品内容基线

- 产品页必须让不访问 GitHub 的用户也能理解适用对象、业务问题、完整工作流、关键设计与能力边界；GitHub 只作为补充来源。
- SiYan 的主流程是“商品建档 → 搜索或扫码 → 组成客户订单 → 导出客户 Excel 与厂家 Word”。前端为 Vue 3，后端为 Express，生产数据使用 RDS MySQL，本地可使用 JSON。
- SiYan 的差异化业务规则包括多套商品货号、厂家价格暗码、分级角色与独立删除权限、电脑端资料整理和手机端扫码协同。
- Cagent 是 pi coding-agent runtime 的 Electron 桌面工作台，主链路为 React GUI → Electron IPC → pi RPC；Express/WebSocket 仅是兼容路径，不能作为当前核心架构宣传。
- Cagent 的核心价值是把项目选择、模型连接、文件与命令工具、持久化会话、Steer/Follow-up、上下文压缩、Fork/Clone 和错误恢复做成无需终端的可视工作流。

## 仓库地图

| 路径 | 职责 |
|---|---|
| `src/App.tsx` | 页面结构、路由、文案和产品界面示意 |
| `src/App.css` | 页面布局、组件样式和响应式规则 |
| `src/index.css` | 全局 token、字体与基础样式 |
| `README.md` | 面向开发者的项目入口和运行方式 |

## 部署边界

- ECS 网站目录：`/var/www/personal-product-site`。
- Nginx 站点配置：`/etc/nginx/sites-available/personal-product-site`。
- UFW 必须保留 `10000/tcp` 放行规则，否则阿里云安全组已开放时公网仍无法访问。
- 发布前必须完成 `pnpm lint` 和 `pnpm build`，只部署 `dist/` 内容。
- 修改 Nginx 配置后先运行 `nginx -t`，成功后才能执行 `systemctl reload nginx`。
- 不得在仓库或文档中记录 ECS 密码、SSH 私钥或其他登录凭据。

## 修改约束

- 架构、技术栈、部署方式、页面数量或外部服务存在多种方案时，先说明利弊并与开发者确认。
- 产品文案必须来自仓库证据或开发者确认，不能虚构用户量、商业结果、客户名称或性能指标。
- 避免模板化作品集样式；保持冷白、墨黑、松绿、信号红和金属灰的视觉体系。
- 不加入圆角卡片墙、装饰性渐变、背景光球或无意义的营销文案。
- 所有交互必须支持键盘焦点和 `prefers-reduced-motion`。
- 不在仓库中保存密码、token、私有仓库内容、生产配置或真实业务数据。

## 验证

修改代码后至少运行：

```powershell
pnpm lint
pnpm build
```

修改页面布局或样式后，还要在真实浏览器中检查：

- 桌面端与手机端没有溢出、重叠或文字截断。
- `/` 与 `/products` 可以互相导航。
- 移动端导航可以打开、关闭并完成跳转。
- 外部链接指向正确的 GitHub 页面。

修改长期目标、技术栈、命令或页面结构时，同步更新本文件和 `README.md`。
