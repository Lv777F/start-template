# 构建阶段
FROM oven/bun:latest AS builder

WORKDIR /app

# 复制项目文件
COPY package.json bun.lock ./
COPY app ./app
COPY messages ./messages
COPY project.inlang ./project.inlang
COPY public ./public
COPY app.config.ts tsconfig.json biome.json components.json postcss.config.ts ./

# 安装依赖并构建项目
RUN bun install
RUN bun run build

# 运行阶段
FROM oven/bun:slim AS runner

WORKDIR /app

# 复制构建产物
COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package.json ./

# 设置环境变量
ENV NODE_ENV=production
ENV PORT=3000

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["bun", "run", ".output/server/index.mjs"]