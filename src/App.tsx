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
            <p className="product-description">SiYan 面向真实的本地经营场景，把商品档案、厂家关系、订单处理、账号权限与扫码操作组织成一条连续流程。固定价格暗码规则和订单文档生成，让日常操作可追踪、可复用。</p>
            <ul className="feature-list"><li><PackageCheck size={18} /><span><strong>商品与订单</strong>统一管理基础资料和流转状态</span></li><li><ScanLine size={18} /><span><strong>扫码工作流</strong>连接现场操作与系统记录</span></li><li><Boxes size={18} /><span><strong>价格暗码</strong>用固定映射保护并校验厂家价格</span></li></ul>
            <div className="tech-line"><span>React</span><span>Vite</span><span>Node.js</span><span>RDS / JSON</span></div>
          </div><SiyanVisual />
        </div>
      </section>

      <section className="product-section cagent-section" id="cagent">
        <div className="page-shell product-layout product-layout-reverse">
          <CagentVisual />
          <div className="product-copy">
            <p className="product-kicker"><span>02</span> 编程 Agent · OPEN SOURCE</p><h2>Cagent</h2>
            <p className="product-lead">把编程 Agent 最重要的能力，放进一个干净、专注的工作界面。</p>
            <p className="product-description">Cagent 基于 pi Agent SDK 构建，支持逐 token 流式输出、文件与命令工具、多个会话，以及可折叠的工具执行记录。前后端通过 WebSocket 保持实时反馈。</p>
            <ul className="feature-list"><li><Zap size={18} /><span><strong>实时响应</strong>逐 token 展示 Agent 的输出</span></li><li><TerminalSquare size={18} /><span><strong>工具执行</strong>读取、编辑文件并运行命令</span></li><li><Code2 size={18} /><span><strong>会话管理</strong>在多个上下文间清楚切换</span></li></ul>
            <div className="tech-line"><span>React 19</span><span>TypeScript</span><span>Express</span><span>WebSocket</span></div>
            <a className="primary-action product-link" href={cagentUrl} target="_blank" rel="noreferrer">查看 GitHub <ExternalLink size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="closing-band"><div className="page-shell closing-layout"><p className="eyebrow">下一步</p><h2>产品会继续长，<br />介绍也会跟着更新。</h2><a className="text-action" href={profileUrl} target="_blank" rel="noreferrer">关注 GitHub 动态 <ArrowRight size={18} /></a></div></section>
    </main>
  )
}

function App() {
  return <BrowserRouter><ScrollToTop /><SiteHeader /><Routes><Route path="/" element={<HomePage />} /><Route path="/products" element={<ProductsPage />} /></Routes><SiteFooter /></BrowserRouter>
}

export default App
