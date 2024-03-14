# 基于 Node.js 镜像构建
FROM node:16.19.1 AS build

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY . .

# 安装依赖
RUN npm install

# 构建项目
RUN vite build

# 新建一个Nginx镜像
FROM nginx:1.21.3

# 将构建出来的dist目录复制到Nginx镜像中
COPY --from=build /app/dist /usr/share/nginx/html

# 将Nginx配置文件复制到容器内
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露容器端口
EXPOSE 80

# 启动Nginx服务
CMD ["nginx", "-g", "daemon off;"]
