'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWeixin, FaBook } from 'react-icons/fa';
import { profile } from '@/data/profile';
import { useState } from 'react';

export default function Contact() {
  const [showWechatQR, setShowWechatQR] = useState(false);

  const contactMethods = [
    {
      name: '电话 / Phone',
      icon: FaPhone,
      value: profile.phone || '138****8888',
      action: () => {
        if (profile.phone) {
          window.open(`tel:${profile.phone}`);
        }
      },
      color: 'from-green-400 to-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      name: '邮箱 / Email',
      icon: FaEnvelope,
      value: profile.email,
      action: () => {
        window.open(`mailto:${profile.email}`);
      },
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-500/10',
    },
    {
      name: '微信 / WeChat',
      icon: FaWeixin,
      value: profile.wechat || 'ruihan_design',
      action: () => {
        setShowWechatQR(!showWechatQR);
      },
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-600/10',
      hasPopup: true,
    },
    {
      name: '小红书 / XHS',
      icon: FaBook,
      value: '@小斯特劳斯',
      action: () => {
        if (profile.xiaohongshu) {
          window.open(profile.xiaohongshu, '_blank');
        }
      },
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-500/10',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* 背景装饰 - 增强亮度 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500 rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-creative-purple rounded-full filter blur-[100px] opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-creative-pink rounded-full filter blur-[120px] opacity-20"></div>
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-accent rounded-full filter blur-[80px] opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-creative-cyan rounded-full filter blur-[80px] opacity-30 animate-float" style={{animationDelay: '1s'}}></div>

      {/* 网格装饰 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-creative-purple via-creative-pink to-primary-600">
            联系我 / Contact
          </h2>
          <p className="text-gray-300 text-lg">期待与您的合作与交流 / Looking forward to collaborating with you</p>
        </motion.div>

        {/* 联系方式网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  className={`${method.bgColor} backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full`}
                  whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)' }}
                  onClick={method.action}
                >
                  {/* 图标 */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${method.color} text-white mb-4`}>
                    <Icon className="text-2xl" />
                  </div>

                  {/* 名称 */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {method.name}
                  </h3>

                  {/* 值 */}
                  <p className="text-gray-300 mb-4 break-all">
                    {method.value}
                  </p>

                  {/* 提示文字 */}
                  {method.name === '微信 / WeChat' && (
                    <p className="text-sm text-gray-400">
                      {showWechatQR ? '点击关闭二维码 / Click to close' : '点击查看二维码 / Click to view QR'}
                    </p>
                  )}
                  {method.name === '电话 / Phone' && (
                    <p className="text-sm text-gray-400">
                      点击拨打 / Click to call
                    </p>
                  )}
                  {method.name === '邮箱 / Email' && (
                    <p className="text-sm text-gray-400">
                      点击发送邮件 / Click to email
                    </p>
                  )}
                  {method.name === '小红书 / XHS' && (
                    <p className="text-sm text-gray-400">
                      点击访问主页 / Click to visit
                    </p>
                  )}
                </motion.div>

                {/* 微信二维码弹窗 */}
                {method.name === '微信 / WeChat' && showWechatQR && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-50 flex items-center justify-center bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-white/10"
                  >
                    <div className="text-center">
                      <p className="text-sm text-gray-300 mb-3">扫描二维码添加微信 / Scan to add WeChat</p>
                      {/* 微信二维码图片 */}
                      <img
                        src="/images/wechat-qr.jpg"
                        alt="微信二维码 / WeChat QR"
                        className="w-48 h-48 object-contain rounded-lg mx-auto bg-white"
                        onError={(e) => {
                          // 如果图片不存在，显示占位符
                          e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"%3E%3Crect width="192" height="192" fill="%23f5f5f5"/%3E%3Ctext x="96" y="96" text-anchor="middle" dominant-baseline="middle" font-size="14" fill="%23666"%3E请将微信二维码放在%3C/text%3E%3Ctext x="96" y="116" text-anchor="middle" dominant-baseline="middle" font-size="14" fill="%23666"%3E/images/wechat-qr.jpg%3C/text%3E%3C/svg%3E';
                        }}
                      />
                      <p className="text-sm text-white mt-3 font-medium">{profile.wechat}</p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 额外信息 */}
        <motion.div
          className="mt-16 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-2">📍 {profile.location}</p>
          <p className="text-sm">
            工作时间：周一至周五 9:00-18:00 / Mon-Fri 9:00-18:00
          </p>
          <p className="text-sm mt-1">
            一般会在24小时内回复您的消息 / Usually reply within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
