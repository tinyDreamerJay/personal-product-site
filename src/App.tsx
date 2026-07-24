import { useEffect, useState } from 'react'
import {
  ArrowRight, Boxes, Check, ChevronRight, CircleDot, Code2, ExternalLink,
  Menu, PackageCheck, ScanLine, TerminalSquare, X, Zap,
} from 'lucide-react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

const profileUrl = 'https://github.com/tinyDreamerJay'
const avatarUrl = 'https://avatars.githubusercontent.com/u/174190349?v=4'
const cagentUrl = 'https://github.com/tinyDreamerJay/Cagent'

const capabilities = [
  { label: '业务系统', detail: '把商品、订单与扫码流程落成可维护的软件。' },
  { label: 'Agent 产品', detail: '围绕真实工作流设计清楚、安静的 AI 工具。' },
  { label: '工程协作', detail: '让代码、文档与验证方式一起演进。' },
]

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">跳到正文</a>
      <Link className="brand" to="/" onClick={closeMenu} aria-label="tinyDreamerJay 首页">
        <span className="brand-mark">TJ</span><span>tinyDreamerJay</span>
      </Link>
      <button className="menu-button" type="button" aria-label={menuOpen ? '关闭导航' : '打开导航'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="主导航">
        <NavLink to="/" end onClick={closeMenu}>关于我</NavLink>
        <NavLink to="/products" onClick={closeMenu}>产品</NavLink>
        <a href={profileUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>GitHub <ExternalLink size={16} aria-hidden="true" /></a>
      </nav>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><span className="status-dot" aria-hidden="true" />持续构建中</div>
      <p>业务软件 · AI 工具 · 清楚的工程过程</p>
      <a href={profileUrl} target="_blank" rel="noreferrer" aria-label="在 GitHub 查看 tinyDreamerJay"><ExternalLink size={18} aria-hidden="true" /></a>
    </footer>
  )
}

function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero page-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span>独立构建者</span><span>2026</span></p>
          <h1>把复杂工作，<br />做成安静的软件。</h1>
          <p className="hero-intro">我是 tinyDreamerJay。关注真实业务流程与个人 Agent，习惯从问题出发，把产品、界面和工程方法一起做完整。</p>
          <div className="hero-actions">
            <Link className="primary-action" to="/products">查看产品 <ArrowRight size={18} aria-hidden="true" /></Link>
            <a className="text-action" href={profileUrl} target="_blank" rel="noreferrer">GitHub 主页 <ChevronRight size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="portrait-stage" aria-label="tinyDreamerJay GitHub 头像">
          <div className="portrait-meta portrait-meta-top"><span>BUILD</span><span>01</span></div>
          <img src={avatarUrl} alt="tinyDreamerJay" width="460" height="460" fetchPriority="high" />
          <div className="portrait-meta portrait-meta-bottom"><span>SHIP</span><span>REFINE</span></div>
          <div className="build-line" aria-hidden="true"><span /></div>
        </div>
      </section>

      <section className="capability-band">
        <div className="page-shell capability-layout">
          <div className="section-heading"><p className="eyebrow">工作方式</p><h2>不是功能堆叠，<br />而是把路径理顺。</h2></div>
          <div className="capability-list">
            {capabilities.map((item, index) => (
              <article key={item.label}><span className="capability-index">0{index + 1}</span><div><h3>{item.label}</h3><p>{item.detail}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-work page-shell">
        <div className="section-heading section-heading-inline">
          <div><p className="eyebrow">代表作品</p><h2>两个产品，两个真实问题。</h2></div>
          <Link className="text-action" to="/products">查看完整介绍 <ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="work-grid">
          <Link className="work-entry siyan-entry" to="/products#siyan">
            <div className="work-entry-top"><span>业务系统</span><span>PRIVATE</span></div>
            <div className="work-monogram">思言</div>
            <div><h3>SiYan</h3><p>商品、厂家、客户订单与扫码管理，服务一条完整的日常经营链路。</p></div>
            <ArrowRight className="work-arrow" size={22} aria-hidden="true" />
          </Link>
          <Link className="work-entry cagent-entry" to="/products#cagent">
            <div className="work-entry-top"><span>AI 工具</span><span>OPEN SOURCE</span></div>
            <div className="terminal-mark" aria-hidden="true"><span>$</span><i /></div>
            <div><h3>Cagent</h3><p>一个极简编程 Agent，把对话、工具执行与会话管理收进安静的界面。</p></div>
            <ArrowRight className="work-arrow" size={22} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}

function SiyanVisual() {
  const rows = [['RJ.BO', '示例商品 A', '¥29.80', '已编码'], ['J.LO', '示例商品 B', '¥9.60', '已编码']]
  return (
    <div className="product-window siyan-window" aria-label="SiYan 商品管理界面示意">
      <div className="window-bar"><span>SiYan / 商品</span><span className="window-status"><CircleDot size={13} /> 本地业务</span></div>
      <div className="siyan-toolbar"><div><Boxes size={18} /><strong>商品档案</strong></div><span>暗码示例</span></div>
      <div className="table-head"><span>暗码</span><span>商品</span><span>售价</span><span>状态</span></div>
      {rows.map((row) => <div className="table-row" key={row[0]}><code>{row[0]}</code><span>{row[1]}</span><strong>{row[2]}</strong><span className="stock-ok">{row[3]}</span></div>)}
      <div className="scan-strip"><ScanLine size={26} /><span>扫码后，商品、库存与订单同步进入同一条流程。</span></div>
    </div>
  )
}

function CagentVisual() {
  return (
    <div className="product-window cagent-window" aria-label="Cagent 对话与工具执行界面示意">
      <div className="window-bar"><span>Cagent / Session 04</span><span className="window-status"><CircleDot size={13} /> Connected</span></div>
      <div className="agent-thread">
        <div className="agent-message user-message">检查当前项目，并告诉我最值得先修的地方。</div>
        <div className="agent-message agent-message-main"><span className="agent-label">Cagent</span>我会先读取项目结构与配置，然后给出可验证的修改顺序。</div>
        <div className="tool-call"><div><TerminalSquare size={16} /><code>read · package.json</code><Check size={15} /></div><div><Code2 size={16} /><code>read · src/App.tsx</code><Check size={15} /></div></div>
      </div>
      <div className="agent-input"><span>继续描述任务…</span><span className="agent-send" aria-hidden="true"><ArrowRight size={17} /></span></div>
    </div>
  )
}

function ProductsPage() {
  useEffect(() => { if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' }) }, [])
  return (
    <main className="products-page" id="main-content">
      <section className="products-intro page-shell">
        <p className="eyebrow">产品介绍</p><h1>从经营现场，<br />到编程现场。</h1>
        <p>两个产品都从长期使用出发：一个整理业务秩序，一个缩短人与代码之间的距离。</p>
        <div className="product-index" aria-label="产品索引"><a href="#siyan"><span>01</span> SiYan <ArrowRight size={17} /></a><a href="#cagent"><span>02</span> Cagent <ArrowRight size={17} /></a></div>
      </section>

      <section className="product-section siyan-section" id="siyan">
        <div className="page-shell product-layout">
          <div className="product-copy">
            <p className="product-kicker"><span>01</span> 业务管理系统 · PRIVATE</p><h2>SiYan</h2>
            <p className="product-lead">让商品、厂家、客户订单和扫码管理不再散落在不同工具里。</p>
            <p className="product-description">SiYan 面向商品贸易中的日常协作：同一件商品既有内部 SKU、客户货号和厂家货号，也关联图片、包装、材质、价格与厂家。系统把这些资料沉淀为可检索的商品档案，再继续服务扫码加单和两类订单交付。</p>
            <ul className="feature-list"><li><PackageCheck size={18} /><span><strong>商品与订单</strong>统一管理基础资料和流转状态</span></li><li><ScanLine size={18} /><span><strong>扫码工作流</strong>连接现场操作与系统记录</span></li><li><Boxes size={18} /><span><strong>价格暗码</strong>用固定映射保护并校验厂家价格</span></li></ul>
            <div className="tech-line"><span>Vue 3</span><span>Express</span><span>MySQL / JSON</span><span>Excel / Word</span></div>
          </div><SiyanVisual />
        </div>
        <div className="page-shell product-deep-dive">
          <div className="narrative-heading"><p className="eyebrow">一条订单怎样完成</p><h3>资料不是终点，<br />可交付的订单才是。</h3><p>SiYan 的核心不是把表格搬进网页，而是让商品资料在查询、下单和对外文档中持续复用，减少重复查找、抄写和格式整理。</p></div>
          <div className="workflow" aria-label="SiYan 业务流程">
            <article><span>01 · 建档</span><h4>统一商品身份</h4><p>维护 SKU、条码、客户与厂家货号、图片、包装和规格，同组商品还能通过关联键一起查看。</p></article>
            <article><span>02 · 找货</span><h4>搜索或扫码定位</h4><p>按名称、货号、条码、厂家、材质等字段查询；扫码先精确匹配，只有唯一结果时才接受模糊匹配。</p></article>
            <article><span>03 · 组单</span><h4>进入客户订单</h4><p>扫码把商品加入订单，再补充客户货号、件数、合计数量与客单价，历史订单可按客户和货号追溯。</p></article>
            <article><span>04 · 交付</span><h4>生成两种文档</h4><p>面向客户导出带商品图的 Excel，面向厂家按固定模板生成 Word，各自只呈现对方真正需要的信息。</p></article>
          </div>
          <div className="decision-grid">
            <div><p className="detail-label">业务细节</p><h4>同一价格，两种表达</h4><p>厂家价格按固定数字映射转成字母暗码，例如 <code>RJ.BO</code> 对应 <code>29.80</code>。系统不仅保存编码，还提供检查脚本识别历史错误，避免规则只存在于人的记忆里。</p></div>
            <div><p className="detail-label">协作边界</p><h4>权限跟着责任走</h4><p>普通用户以查询为主，管理员维护商品、订单、厂家别名和客户价格；超级管理员再负责账号与二维码页面。删除商品和订单是独立权限，避免把高风险操作随角色一并放开。</p></div>
            <div><p className="detail-label">现场适配</p><h4>电脑整理，手机扫码</h4><p>后台适合批量录入、Excel 导入和订单整理；手机扫码页缩短现场操作，只保留加入现有订单时真正需要的数量与价格字段。</p></div>
            <div><p className="detail-label">运行方式</p><h4>从本地验证到线上经营</h4><p>开发时可用 JSON 文件快速验证，生产环境使用 RDS MySQL；商品图片可来自本地资源、OSS 或数据地址，导出不依赖某一台电脑的浏览器状态。</p></div>
          </div>
          <p className="product-boundary"><strong>产品边界：</strong>这是为特定经营流程持续打磨的私有系统，因此这里只展示产品逻辑，不公开客户数据、源码、账号、服务器或生产配置。</p>
        </div>
      </section>

      <section className="product-section cagent-section" id="cagent">
        <div className="page-shell product-layout product-layout-reverse">
          <CagentVisual />
          <div className="product-copy">
            <p className="product-kicker"><span>02</span> 编程 Agent · OPEN SOURCE</p><h2>Cagent</h2>
            <p className="product-lead">把编程 Agent 最重要的能力，放进一个干净、专注的工作界面。</p>
            <p className="product-description">Cagent 是 pi coding-agent runtime 的桌面工作台。用户选择项目和模型后，可以直接描述任务；Agent 在项目目录中读取、写入、编辑文件并运行命令，界面同步呈现思考、工具状态与最终结果。</p>
            <ul className="feature-list"><li><Zap size={18} /><span><strong>实时响应</strong>逐 token 展示 Agent 的输出</span></li><li><TerminalSquare size={18} /><span><strong>工具执行</strong>读取、编辑文件并运行命令</span></li><li><Code2 size={18} /><span><strong>会话管理</strong>在多个上下文间清楚切换</span></li></ul>
            <div className="tech-line"><span>Electron</span><span>React 19</span><span>TypeScript</span><span>pi RPC</span></div>
            <a className="primary-action product-link" href={cagentUrl} target="_blank" rel="noreferrer">查看源码与安装说明 <ExternalLink size={17} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="page-shell product-deep-dive cagent-deep-dive">
          <div className="narrative-heading"><p className="eyebrow">一次任务怎样推进</p><h3>对话只是入口，<br />项目变化才是结果。</h3><p>Cagent 面向想使用编程 Agent、又不希望长期停留在终端的人。界面负责把运行中的关键状态变得可见，同时把真正的 Agent 能力交给 pi runtime。</p></div>
          <div className="workflow" aria-label="Cagent 工作流程">
            <article><span>01 · 准备</span><h4>选择项目与模型</h4><p>以当前工作目录建立项目边界，连接已配置的 provider 和模型；凭据留在本机运行时中。</p></article>
            <article><span>02 · 委托</span><h4>用自然语言描述任务</h4><p>发送需求后实时接收正文与独立思考内容，不必等完整响应结束才知道 Agent 正在做什么。</p></article>
            <article><span>03 · 执行</span><h4>观察工具链</h4><p>读取、写入、编辑和命令执行按调用 ID 展示运行、部分输出、完成或失败，多个并发调用不会互相串线。</p></article>
            <article><span>04 · 延续</span><h4>保留可恢复的上下文</h4><p>会话由 pi 持久化，可切换历史、压缩长上下文、从某条用户消息 Fork，或在当前叶节点 Clone。</p></article>
          </div>
          <div className="decision-grid">
            <div><p className="detail-label">生成中控制</p><h4>任务进行时仍能纠偏</h4><p><code>Steer</code> 把新要求立即插入当前生成，<code>Follow-up</code> 等当前轮完成后继续处理；需要停止时可以中止生成，而不是只能等待。</p></div>
            <div><p className="detail-label">上下文治理</p><h4>长任务不靠无限堆消息</h4><p>界面展示思考等级、消息数量和上下文状态，支持自动或手动压缩。会话树、Fork 与 Clone 让探索方案时保留原路径。</p></div>
            <div><p className="detail-label">运行时能力</p><h4>不重新发明 Agent 内核</h4><p>pi 负责 provider、模型、工具、Skills、MCP、Extensions 与会话；Cagent 专注桌面交互、状态映射和错误恢复，让底层能力可以继续升级。</p></div>
            <div><p className="detail-label">可靠反馈</p><h4>失败也要回到可操作状态</h4><p>模型网关失败、RPC 管道中断和工具错误都会落到明确状态；工具输出可折叠并限制超长内容，界面在异常后恢复输入，而不是卡在“生成中”。</p></div>
          </div>
          <p className="product-boundary"><strong>适用范围：</strong>Cagent 是本地桌面端编程工具，适合围绕一个项目持续工作；它不是云端代码托管平台，也不会替代模型服务本身。使用者仍需配置可用的模型 provider。</p>
        </div>
      </section>

      <section className="closing-band"><div className="page-shell closing-layout"><p className="eyebrow">共同方法</p><h2>先理解工作，<br />再决定软件长什么样。</h2><a className="text-action" href={profileUrl} target="_blank" rel="noreferrer">了解构建者 <ArrowRight size={18} /></a></div></section>
    </main>
  )
}

function App() {
  return <BrowserRouter><ScrollToTop /><SiteHeader /><Routes><Route path="/" element={<HomePage />} /><Route path="/products" element={<ProductsPage />} /></Routes><SiteFooter /></BrowserRouter>
}

export default App
