import { FaHeart } from 'react-icons/fa';
import { profile } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* 关于 */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              {profile.name}
            </h3>
            <p className="text-gray-400">
              {profile.tagline}
            </p>
          </div>

          {/* 联系 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式 / Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📍 {profile.location}</li>
              <li>📧 {profile.email}</li>
              {profile.phone && <li>📱 {profile.phone}</li>}
            </ul>
          </div>

          {/* 链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接 / Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">
                  首页 / Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">
                  项目 / Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  联系 / Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            用心制作 / Made with <FaHeart className="text-primary-500" /> by {profile.name}
          </p>
          <p className="mt-2 text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
