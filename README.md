# CQC 大模型运营 · AI 助审 Agent 问答展示站

一个基于 [Astro](https://astro.build) 的静态展示站,用于呈现一次关于**字节 CQC 电商内容质量治理大模型运营**的完整问答:自动驳回模型、AI 助审 Agent、TCS 人审平台链路,以及「助审信息精确率仅 ~11%」的误差归因与改进方案。

## 在线访问

站点通过 GitHub Actions 自动部署到 GitHub Pages:

**https://wjl110.github.io/Aihub/**

> 首次启用需在仓库 **Settings → Pages** 中将 Source 设置为 **GitHub Actions**,之后每次推送到 `main` 分支都会自动构建并发布。

## 页面结构

| 路由 | 内容 |
| :--- | :--- |
| `/` | 概览:业务链路、关键指标、回答要点 |
| `/question/` | 问题原文(业务背景与当前思路) |
| `/answer/` | 完整分析(误差归因、RAG 数据集、统一治理检测模型、助审产品指标) |

## 项目结构

```
/
├── .github/workflows/deploy.yml   # GitHub Pages 自动部署工作流
├── cqc-llm-ops-qa/                # 问答内容源文件(Markdown)
│   ├── README.md                  # 内容导航与摘要
│   ├── question.md                # 问题原文
│   └── answer.md                  # 完整分析
├── src/
│   ├── layouts/
│   │   ├── Layout.astro           # 全局布局(导航栏 + 页脚)
│   │   └── ArticleLayout.astro    # 文章页布局(Markdown 排版样式)
│   └── pages/
│       ├── index.astro            # 概览首页
│       ├── question.astro         # 渲染 question.md
│       └── answer.astro           # 渲染 answer.md
└── astro.config.mjs               # 已配置 site/base 以适配 GitHub Pages
```

问答正文维护在 `cqc-llm-ops-qa/` 目录的 Markdown 文件中,页面直接引用渲染,修改 Markdown 即可更新站点内容。

## 本地开发

```bash
npm install     # 安装依赖
npm run dev     # 本地开发服务器 localhost:3000
npm run build   # 构建到 ./dist/
npm run preview # 本地预览构建产物
```
