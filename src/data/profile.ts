export interface Profile {
  name: string;
  title: string;
  tagline: string;
  avatar: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  wechat?: string;
  xiaohongshu?: string;
  social: {
    github?: string;
    linkedin?: string;
    dribbble?: string;
    behance?: string;
  };
  experience: number;
}

export const profile: Profile = {
  name: '芮菡',
  title: '文化艺术项目管理/制片',
  tagline: '拥有10年资历的文化艺术项目操盘手，擅长以全链路项目管控力，驱动艺术创意实现高效的国际化商业落地。',
  avatar: '/images/avatar.jpg',
  bio: `我是一名充满热情的文化艺术项目操盘手，专注于艺术项目的策划与执行。拥有10年项目管理经验，
  擅长从创意策划到商业落地全链路管控。我相信优秀的艺术项目不仅要有创意，更要实现商业价值与文化传播的双赢。`,
  location: '中国.北京',
  email: 'mmcbolo@gmail.com',
  phone: '18811076692',
  wechat: 'kati930',
  xiaohongshu: 'https://xhslink.com/m/3K7co9DYa6',
  social: {
    github: 'https://github.com/yourusername', // 请替换为真实GitHub
    linkedin: 'https://linkedin.com/in/yourusername', // 请替换为真实LinkedIn
    behance: 'https://behance.net/yourusername', // 请替换为真实Behance
  },
  experience: 10,
};
