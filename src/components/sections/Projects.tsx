'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '@/data/projects';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'art-exhibition' | 'cultural-events' | 'live-performance' | 'tv-production'>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: '全部 / All' },
    { id: 'art-exhibition', label: '艺术展览' },
    { id: 'cultural-events', label: '文化活动' },
    { id: 'live-performance', label: '现场演出' },
    { id: 'tv-production', label: '节目制作' },
  ];

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500 rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-creative-purple rounded-full filter blur-[100px] opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-creative-pink rounded-full filter blur-[120px] opacity-15"></div>

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
            项目案例 / Projects
          </h2>
          <p className="text-gray-300 text-lg">
            让每个创意稳准落地并产生可见成效
            <br />
            <span className="text-base text-gray-400">Making every creative idea land with precision and visible results</span>
          </p>
        </motion.div>

        {/* 分类筛选 */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-creative-purple via-creative-pink to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* 项目网格 */}
        <motion.div layout className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                {/* 项目缩略图 */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      // 如果图片不存在，显示占位符
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  {/* 占位图 - 仅在图片加载失败时显示 */}
                  <div className="hidden w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <p className="text-4xl mb-2">🎨</p>
                      <p className="text-sm">项目缩略图</p>
                      <p className="text-xs text-gray-700">{project.thumbnail}</p>
                    </div>
                  </div>

                  {/* 悬浮覆盖层 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-white/90 rounded-full text-gray-900 hover:bg-white transition-colors"
                        >
                          <FaExternalLinkAlt className="mr-2 inline" />
                          查看详情 / View Details
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* 项目信息 */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-primary-400 font-medium">{project.year}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-sm text-gray-400">{project.role}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 line-clamp-2 text-sm">
                    {project.description}
                  </p>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 工具 */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs text-gray-500 flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* 展开提示 */}
                  <p className="text-xs text-gray-500 text-center mt-2">
                    {expandedProject === project.id ? '点击收起 / Click to collapse' : '点击查看详情 / Click to expand'}
                  </p>

                  {/* 展开的详细信息 */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-white/10">
                          {/* 详细描述 */}
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                            {project.longDescription || project.description}
                          </p>

                          {/* 项目简介（如果有longDescription） */}
                          {project.longDescription && (
                            <div className="mb-4 p-3 bg-white/5 rounded-lg">
                              <p className="text-xs text-gray-400 mb-1">项目简介 / Project Overview</p>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {project.description}
                              </p>
                            </div>
                          )}

                          {/* 项目图片画廊 */}
                          {project.images && project.images.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 mb-4">
                              {project.images.map((image, idx) => (
                                <img
                                  key={idx}
                                  src={image}
                                  alt={`${project.title} - 图片 ${idx + 1}`}
                                  className="w-full h-24 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(image, '_blank');
                                  }}
                                />
                              ))}
                            </div>
                          )}

                          {/* 客户信息 */}
                          {project.client && (
                            <p className="text-sm text-gray-400 mb-2">
                              <span className="font-medium">客户 / Client:</span> {project.client}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 空状态 */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">该分类暂无项目 / No projects in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
