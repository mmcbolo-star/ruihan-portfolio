'use client';

import { motion } from 'framer-motion';
import { FaArrowDown, FaCheckCircle, FaGlobe, FaDollarSign, FaRocket } from 'react-icons/fa';
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 pb-0">
      {/* 背景装饰 - 增强��度 */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full filter blur-[100px] opacity-40 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-creative-purple rounded-full filter blur-[100px] opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-creative-pink rounded-full filter blur-[120px] opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent rounded-full filter blur-[80px] opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-creative-cyan rounded-full filter blur-[80px] opacity-30 animate-float" style={{animationDelay: '0.5s'}}></div>

      {/* 网格装饰 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 左侧: 头像和基本信息 */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative inline-block mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative">
                {/* 头像外围光晕 */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 via-creative-purple to-creative-pink blur-xl opacity-40 animate-pulse"></div>

                {/* 头像容器 */}
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl mx-auto lg:mx-0">
                  {/* 渐变边缘遮罩 */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none"></div>

                  {/* 真实头像图片 */}
                  <img
                    src={`${profile.avatar}?v=20260112`}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />

                  {/* 底部高光 */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* 装饰性光点 */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full blur-md opacity-60"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-creative-purple rounded-full blur-sm opacity-40"></div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-creative-purple via-creative-pink to-primary-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {profile.name}
            </motion.h1>

            <motion.p
              className="text-2xl lg:text-3xl font-semibold text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {profile.title} <span className="text-xl text-gray-400"> Cultural Arts Project Management & Producer</span>
            </motion.p>

            <motion.p
              className="text-xl text-gray-300 mb-8 italic leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              "拥有10年资历的文化艺术项目操盘手，擅长以全链路项目管控力，驱动艺术创意实现高效的国际化商业落地。"
              <br />
              <span className="text-base text-gray-400">A cultural and arts project practitioner with 10 years of experience, specializing in end-to-end project management to drive efficient international commercialization of creative ideas.</span>
            </motion.p>
          </motion.div>

          {/* 右侧: 核心优势 */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* 核心优势卡片 */}
            <motion.div
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-2xl p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {/* 卡片标题 */}
              <div className="text-center mb-8">
                <motion.h2
                  className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-creative-purple via-creative-pink to-primary-600 mb-2"
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  我可以为您解决什么？
                </motion.h2>
                <p className="text-sm text-gray-400">What can I solve for you?</p>
              </div>

              {/* 优势列表 */}
              <div className="space-y-5">
                {[
                  {
                    icon: <FaCheckCircle className="text-xl flex-shrink-0" />,
                    title: '解决"项目概念落地难"',
                    description: '凭借主导 40+ 场大型活动与展览的实操经验，确保复杂的艺术创意从设计方案到现场执行实现高质量闭环，避免项目"烂尾"或"失真"',
                    color: 'text-creative-purple',
                    bg: 'bg-creative-purple/10',
                  },
                  {
                    icon: <FaGlobe className="text-xl flex-shrink-0" />,
                    title: '解决"国际项目对接门槛"',
                    description: '利用中、英、西三语优势与海外学术背景，可直接对接国际艺术家与跨国商务资源，消除跨境合作中的沟通屏障与文化隔阂',
                    color: 'text-creative-pink',
                    bg: 'bg-creative-pink/10',
                  },
                  {
                    icon: <FaDollarSign className="text-xl flex-shrink-0" />,
                    title: '解决"商业变现乏力"',
                    description: '具备极强的资源整合能力，曾驱动单场活动现场销售额突破 100 万元，能将文化流量精准转化为可量化的经济效益',
                    color: 'text-primary-500',
                    bg: 'bg-primary-500/10',
                  },
                  {
                    icon: <FaRocket className="text-xl flex-shrink-0" />,
                    title: 'Vibe Coding 实践者',
                    description: '具备快速原型开发能力，能够利用基础 AI 编程工具测试创意场景、开发互动体验，缩短从"想法"到"产品"的路径，让技术更好地服务于项目，提高项目人效比',
                    color: 'text-accent',
                    bg: 'bg-accent/10',
                  },
                ].map((advantage, index) => (
                  <motion.div
                    key={index}
                    className={`p-5 rounded-xl ${advantage.bg} border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    }}
                  >
                    {/* 悬浮光晕效果 */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${advantage.color.replace('text-', 'from-')} via-transparent to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                    {/* 流光边框 */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-shimmer"></div>

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${advantage.bg} ${advantage.color} flex-shrink-0`}
                        whileHover={{
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {advantage.icon}
                      </motion.div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-2 ${advantage.color} group-hover:translate-x-1 transition-transform duration-300`}>
                          {advantage.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {advantage.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 底部装饰线 */}
              <div className="mt-8 h-1 bg-gradient-to-r from-creative-purple via-creative-pink to-primary-600 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* 滚动提示 */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm">向下滚动 / Scroll Down</span>
          <FaArrowDown className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
