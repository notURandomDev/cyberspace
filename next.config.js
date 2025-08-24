/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL("https://i-blog.csdnimg.cn/**"),
      new URL("https://heroui.com/images/**"),
    ],
  },
  eslint: {
    // 忽略构建过程中的ESLint错误
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
