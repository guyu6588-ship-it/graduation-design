import workAdmin from '@/assets/work-admin.jpg'
import workData from '@/assets/work-data.jpg'
import workH5 from '@/assets/work-h5.jpg'

export type NavItem = {
  label: string
  href: string
}

export type StatItem = {
  value: string
  label: string
}

export type Service = {
  no: string
  title: string
  desc: string
  items: string[]
}

export type Work = {
  type: string
  preview: string
  title: string
  desc: string
  image: string
  imageAlt: string
  techs: string[]
}

export type ProcessStep = {
  no: string
  title: string
  desc: string
}

export const navItems: NavItem[] = [
  { label: '服务', href: '#services' },
  { label: '作品', href: '#works' },
  { label: '流程', href: '#process' },
  { label: '联系', href: '#contact' },
]

export const heroStats: StatItem[] = [
  { value: 'Vue / React', label: '界面与交互' },
  { value: 'Spring Boot', label: '接口与数据' },
  { value: 'Deploy', label: '上线与演示' },
]

export const services: Service[] = [
  {
    no: '01',
    title: '业务管理系统',
    desc: '围绕真实业务流程设计模块，让项目具备登录、数据维护、审核流转和统计分析等完整闭环。',
    items: ['用户与权限', '核心业务模块', '数据统计与导出'],
  },
  {
    no: '02',
    title: 'H5 互动项目',
    desc: '适合移动端展示、课程实践或创新类选题，通过轻量互动增强作品的完成度和记忆点。',
    items: ['答题与闯关', '抽奖与活动', '排行榜与分享'],
  },
  {
    no: '03',
    title: '数据可视化看板',
    desc: '用图表、指标卡和趋势分析呈现系统价值，让答辩时的说明更直观、更有层次。',
    items: ['图表组件', '分析看板', '大屏展示'],
  },
  {
    no: '04',
    title: '部署与说明支持',
    desc: '交付不止代码，还包括演示环境、测试账号和项目说明，降低答辩前的临场风险。',
    items: ['服务器部署', '演示账号', '接口与使用说明'],
  },
]

export const works: Work[] = [
  {
    type: '管理系统',
    preview: '权限 · 数据 · 统计',
    title: '校园二手交易管理平台',
    desc: '覆盖登录权限、信息维护、审核流转和统计分析。',
    image: workAdmin,
    imageAlt: '管理后台系统界面样例图',
    techs: ['Vue3', 'TypeScript', 'Spring Boot', 'MySQL'],
  },
  {
    type: 'H5 游戏',
    preview: '互动 · 计分 · 排名',
    title: 'H5 农场互动小游戏',
    desc: '展示偷菜、答题、抽奖、排行榜等移动端玩法。',
    image: workH5,
    imageAlt: 'H5 小游戏界面样例图',
    techs: ['Vue3', 'Canvas', 'Node.js', 'Redis'],
  },
  {
    type: '可视化',
    preview: '指标 · 图表 · 趋势',
    title: '智慧校园数据可视化看板',
    desc: '通过指标卡、趋势图和排行模块集中展示数据。',
    image: workData,
    imageAlt: '数据可视化看板界面样例图',
    techs: ['Vue3', 'ECharts', 'REST API', 'Mock'],
  },
]

export const processSteps: ProcessStep[] = [
  {
    no: '01',
    title: '确认选题与约束',
    desc: '梳理题目背景、学校要求、技术栈限制、功能范围和时间节点。',
  },
  {
    no: '02',
    title: '拆解模块与数据',
    desc: '明确页面结构、核心数据表、接口清单和演示路径，减少开发过程中的反复调整。',
  },
  {
    no: '03',
    title: '开发与阶段确认',
    desc: '前端、接口、数据库和测试数据同步推进，阶段性确认页面效果和业务逻辑。',
  },
  {
    no: '04',
    title: '部署与演示准备',
    desc: '整理演示地址、测试账号、项目说明和答辩展示重点，确保现场能稳定打开。',
  },
]
