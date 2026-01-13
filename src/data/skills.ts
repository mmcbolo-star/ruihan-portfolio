export interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 1-100
    years?: number;
    icon?: string;
  }[];
}

export const skills: Skill[] = [
  {
    category: '设计软件',
    items: [
      { name: 'Adobe Photoshop', level: 95, years: 8 },
      { name: 'Adobe Illustrator', level: 90, years: 7 },
      { name: 'Figma', level: 85, years: 3 },
      { name: 'After Effects', level: 75, years: 4 },
      { name: 'InDesign', level: 80, years: 6 },
    ],
  },
  {
    category: '设计领域',
    items: [
      { name: '品牌设计', level: 90, years: 5 },
      { name: 'UI/UX设计', level: 85, years: 4 },
      { name: '插画设计', level: 80, years: 5 },
      { name: '动态图形', level: 70, years: 3 },
      { name: '包装设计', level: 75, years: 4 },
    ],
  },
  {
    category: '专业技能',
    items: [
      { name: '创意构思', level: 95 },
      { name: '视觉表现', level: 90 },
      { name: '项目管理', level: 80 },
      { name: '客户沟通', level: 85 },
      { name: '团队协作', level: 88 },
    ],
  },
];
