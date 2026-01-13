import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出配置（支持GitHub Pages）
  output: 'export',

  // 图片优化（使用CDN）
  images: {
    unoptimized: true,  // 静态导出需要关闭优化
  },

  // 基础路径（GitHub Pages子目录）
  // 注意：如果仓库名不是ruihan-portfolio，需要修改这里
  basePath: process.env.NODE_ENV === 'production' ? '/ruihan-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ruihan-portfolio' : '',

  // 页面预渲染
  trailingSlash: true,

  // 压缩输出
  compress: true,
};

export default nextConfig;
