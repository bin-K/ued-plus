# 项目结构

```
ued-plus
├── CONTRIBUTING.md // 搭建教程
├── README.md
├── changelogs // 更新日志
├── commitlint.config.cjs // commitizen 配置文件，git 提交时做限制，不允许随意提交信息
├── devlogs // 开发思路记录
├── package.json
├── packages // 组件核心代码
│   ├── components // 组件
│   │   ├── components.ts // 暴露所有组件文件
│   │   ├── index.ts // 全局入口文件
│   │   ├── package.json
│   │   ├── script // 打包组件需要的文件
│   │   │   ├── build // 打包组件流程入口
│   │   │   └── utils // 打包组件工具
│   │   ├── src // 组件开发文件夹
│   │   ├── vite.config.ts // vue 配置文件
│   ├── hooks // 组件提取的公共钩子
│   ├── theme // 组件公共样式和主题样式
│   └── utils // 组件提取的公共工具
├── play // 组件调试，一个vue项目
├── pnpm-workspace.yaml // 配置工作区文件
├── scripts // 初始化时执行的脚本已经打Tag需要生成日志的脚本
│   ├── changelog // 日志生成的配置的文件
│   │   ├── changelog-option.cjs
│   │   └── cz-lerna-changelog.cjs
│   └── shell // git flow 初始化和打tag回调的脚本
│       ├── filter-flow-hotfix-finish-tag-message.sh
│       ├── filter-flow-release-finish-tag-message.sh
│       └── init.sh
├── site // 组件文档
│   ├── deploy.sh // 文档部署脚本
│   ├── docs // 文档内容
│   │   ├── changelogs // 日志
│   │   ├── components // 组件文档
│   │   ├── guide // 指南
│   │   │   ├── installation // 安装
│   │   │   └── quickstart // 快速开始
│   │   ├── index.md
│   │   └── public
│   │       └── favicon.svg
│   └── package.json
└── tsconfig.json // ts配置文件
```
