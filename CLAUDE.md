# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

MoonTV 是一个基于 Next.js 15 的跨平台影视聚合播放器，支持多源搜索、在线播放、收藏同步和播放记录。项目采用现代化的全栈架构，支持多种部署方式（Docker、Vercel、Cloudflare Pages）和多种存储后端（LocalStorage、Redis、Cloudflare D1、Upstash）。

## 常用开发命令

```bash
# 开发环境（需要先生成运行时配置和清单文件）
pnpm dev

# 生产构建
pnpm build

# 代码检查和修复
pnpm lint:fix

# 类型检查
pnpm typecheck

# 运行测试
pnpm test

# 单个测试文件
pnpm test:watch

# Cloudflare Pages 构建
pnpm pages:build

# 生成运行时配置（从 config.json）
pnpm gen:runtime

# 生成 PWA 清单
pnpm gen:manifest
```

**重要**：在运行 `pnpm dev` 或 `pnpm build` 之前，必须先运行 `pnpm gen:runtime` 来生成 `src/lib/runtime.ts` 文件。package.json 中的 dev 和 build 命令已自动包含此步骤。

## 核心架构

### 存储抽象层（Storage Abstraction）

项目实现了统一的存储接口 `IStorage`（定义在 [src/lib/types.ts](src/lib/types.ts#L29)），支持多种存储后端的可插拔切换：

- **LocalStorage**: 默认方式，客户端存储，无多账户支持
- **Redis**: 原生 Redis，支持多账户和数据同步
- **Upstash**: 云端 Redis 服务，适用于 Vercel 部署
- **Cloudflare D1**: Cloudflare 的 SQLite 边缘数据库

存储类型通过环境变量 `NEXT_PUBLIC_STORAGE_TYPE` 控制。存储实现在：

- [src/lib/db.client.ts](src/lib/db.client.ts) - LocalStorage 实现
- [src/lib/redis.db.ts](src/lib/redis.db.ts) - Redis 实现
- [src/lib/upstash.db.ts](src/lib/upstash.db.ts) - Upstash 实现
- [src/lib/d1.db.ts](src/lib/d1.db.ts) - D1 实现

统一管理层在 [src/lib/db.ts](src/lib/db.ts)，提供 `DbManager` 类封装所有数据操作。

### 配置管理系统

- **config.json**: 根目录的主配置文件，定义 API 源和缓存时间
- **src/lib/runtime.ts**: 由 `scripts/convert-config.js` 自动生成的 TypeScript 版本，在代码中导入使用
- **动态配置**: 管理员可通过 `/admin` 页面运行时修改站点配置

修改 `config.json` 后需运行 `pnpm gen:runtime` 重新生成 `runtime.ts`。

### Next.js 架构

- **App Router**: 使用 Next.js 15 的 App Router 架构
- **Standalone Output**: 配置为独立输出，优化 Docker 部署（见 next.config.js:4）
- **Edge Runtime**: 部分 API 路由使用边缘运行时以优化性能
- **PWA 支持**: 通过 next-pwa 实现，提供离线缓存和安装能力

API 路由位于 [src/app/api/](src/app/api/)：

- `api/search/` - 多源聚合搜索，支持 20+ API 站点
- `api/admin/` - 管理员配置管理
- `api/favorites/` - 收藏功能
- `api/history/` - 播放记录管理

### 视频播放系统

- **播放器**: ArtPlayer + HLS.js 组合（见 [src/app/play/](src/app/play/)）
- **多源聚合**: 通过 downstream.ts 从多个 API 源聚合搜索结果
- **智能去重**: 基于豆瓣 ID 和集数进行智能去重（见 [src/lib/downstream.ts](src/lib/downstream.ts)）
- **进度同步**: 支持跨设备播放进度同步（使用存储抽象层）

### 用户认证系统

认证逻辑在 [src/lib/auth.ts](src/lib/auth.ts)，支持：

- 密码加密存储
- Session 管理（通过环境变量 PASSWORD 控制全局访问）
- 用户角色：owner（站长）、admin（管理员）、user（普通用户）
- 注册开关：通过 `NEXT_PUBLIC_ENABLE_REGISTER` 控制

**重要安全提醒**：

- 生产环境必须设置 PASSWORD 环境变量
- 仅限个人使用，不应公开访问
- 遵守当地法律法规

### 中间件

[src/middleware.ts](src/middleware.ts) 处理：

- 全局密码验证（PASSWORD 环境变量）
- 用户认证检查
- 路由保护

## 部署相关

### Docker 部署

- 使用 standalone 输出模式
- 多阶段构建（deps → builder → runner）
- Node.js 20 Alpine 基础镜像
- 支持环境变量配置

### Cloudflare Pages 部署

- 使用 `@cloudflare/next-on-pages` 适配器
- 构建命令：`pnpm pages:build`
- 需要 nodejs_compat 兼容性标志
- 支持 D1 数据库绑定（变量名：DB）

D1 数据库初始化 SQL 见根目录的 [D1 初始化.md](D1初始化.md)

### Vercel 部署

- 支持 Upstash Redis 集成
- 需要设置环境变量：
  - `UPSTASH_URL` 和 `UPSTASH_TOKEN`
  - `NEXT_PUBLIC_STORAGE_TYPE=upstash`
  - `USERNAME` 和 `PASSWORD`

## 类型系统

核心类型定义在 [src/lib/types.ts](src/lib/types.ts)：

- `PlayRecord` - 播放记录
- `Favorite` - 收藏
- `SearchResult` - 搜索结果
- `DoubanItem` - 豆瓣数据
- `IStorage` - 存储接口
- `SkipConfig` - 跳过片头片尾配置

管理员相关类型在 [src/lib/admin.types.ts](src/lib/admin.types.ts)

## 测试

- 使用 Jest + React Testing Library
- 测试配置已包含 `.env.local` 变量（见 jest.config.js）
- 运行 `pnpm test` 执行所有测试
- 运行 `pnpm test:watch` 进入监视模式

## 代码质量

- **ESLint**: 自定义规则，包括 simple-import-sort 和 unused-imports 插件
- **Prettier**: 代码格式化，集成 Tailwind CSS 插件
- **Husky**: Git hooks，提交前自动运行 lint-staged
- **Commitlint**: 强制约定式提交格式

## 重要注意事项

1. **包管理器**: 必须使用 pnpm（在 package.json 中配置）
2. **配置生成**: 修改 config.json 后必须运行 `pnpm gen:runtime`
3. **Next.js 版本**: 项目使用 Next.js 15.x，不是 14.x
4. **环境变量**: Cloudflare Pages 尽量使用密钥（Secret）而非文本变量
5. **安全**: 生产环境必须设置 PASSWORD，避免公开访问

## 常见问题解决

### 依赖安装失败

- 使用 pnpm 而非 npm：`pnpm install`
- 如遇 peer dependency 警告，可使用 `pnpm install --legacy-peer-deps`

### 构建失败

- 确保已运行 `pnpm gen:runtime`
- 检查 Node.js 版本（推荐 20.x）
- 清理缓存：`rm -rf .next && pnpm build`

### Cloudflare Pages 部署失败

- 确保构建命令为：`pnpm install --frozen-lockfile && pnpm run pages:build`
- 检查兼容性标志设置为 nodejs_compat
- 确认 D1 绑定变量名为 DB

### 类型错误

- 运行 `pnpm typecheck` 查看详细错误
- 确保 `src/lib/runtime.ts` 已生成
- 检查 @types/react 和 @types/react-dom 版本兼容性
