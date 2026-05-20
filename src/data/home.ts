import projectAdminTrade from '@/assets/projects/project-admin-trade.svg'
import projectCampusDashboard from '@/assets/projects/project-campus-dashboard.svg'
import projectDormRepair from '@/assets/projects/project-dorm-repair.svg'
import projectExamBank from '@/assets/projects/project-exam-bank.svg'
import projectFitnessMiniapp from '@/assets/projects/project-fitness-miniapp.svg'
import projectH5Farm from '@/assets/projects/project-h5-farm.svg'
import projectHospitalBooking from '@/assets/projects/project-hospital-booking.svg'
import projectMallAgri from '@/assets/projects/project-mall-agri.svg'
import projectSalesBi from '@/assets/projects/project-sales-bi.svg'

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
  category: string
  type: string
  preview: string
  title: string
  desc: string
  image: string
  imageAlt: string
  difficulty: string
  cycle: string
  techs: string[]
  deliverables: string[]
  modules: string[]
  logic: string[]
}

export type ProcessStep = {
  no: string
  title: string
  desc: string
}

export const navItems: NavItem[] = [
  { label: '服务', href: '#services' },
  { label: '项目库', href: '#works' },
  { label: '流程', href: '#process' },
  { label: '联系', href: '#contact' },
]

export const heroStats: StatItem[] = [
  { value: '30+', label: '可参考项目方向' },
  { value: '8 类', label: '主流实践场景' },
  { value: '源码 / 部署', label: '完整演示交付' },
]

export const projectCategories = ['全部', '管理系统', '商城系统', '校园项目', '可视化', '小程序/H5']

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
    category: '校园项目',
    type: '管理系统',
    preview: '权限 · 数据 · 统计',
    title: '校园二手交易管理平台',
    desc: '覆盖登录权限、信息维护、审核流转和统计分析。',
    image: projectAdminTrade,
    imageAlt: '管理后台系统界面样例图',
    difficulty: '标准',
    cycle: '2-3 周',
    techs: ['Vue3', 'TypeScript', 'Spring Boot', 'MySQL'],
    deliverables: ['源码', '数据库', '部署演示', '答辩说明'],
    modules: ['用户登录与权限', '商品发布管理', '商品审核流转', '交易数据统计'],
    logic: ['学生发布闲置商品并维护信息', '管理员审核商品状态和违规内容', '买卖双方完成沟通与交易记录沉淀'],
  },
  {
    category: '小程序/H5',
    type: 'H5 游戏',
    preview: '互动 · 计分 · 排名',
    title: 'H5 农场互动小游戏',
    desc: '展示偷菜、答题、抽奖、排行榜等移动端玩法。',
    image: projectH5Farm,
    imageAlt: 'H5 小游戏界面样例图',
    difficulty: '进阶',
    cycle: '2-4 周',
    techs: ['Vue3', 'Canvas', 'Node.js', 'Redis'],
    deliverables: ['移动端页面', '活动逻辑', '接口服务', '演示数据'],
    modules: ['移动端游戏首页', '农场互动操作', '积分与排行榜', '活动记录管理'],
    logic: ['用户进入活动后完成指定互动任务', '系统记录分数、次数和排名变化', '后台可查看活动数据并调整基础配置'],
  },
  {
    category: '可视化',
    type: '可视化',
    preview: '指标 · 图表 · 趋势',
    title: '智慧校园数据可视化看板',
    desc: '通过指标卡、趋势图和排行模块集中展示数据。',
    image: projectCampusDashboard,
    imageAlt: '数据可视化看板界面样例图',
    difficulty: '标准',
    cycle: '2-3 周',
    techs: ['Vue3', 'ECharts', 'REST API', 'Mock'],
    deliverables: ['看板页面', '图表配置', '接口文档', '演示说明'],
    modules: ['核心指标卡', '趋势分析图', '排行统计', '预警信息展示'],
    logic: ['采集校园业务数据并转换为指标', '用图表呈现趋势、占比和排行', '围绕数据变化提炼答辩展示亮点'],
  },
  {
    category: '商城系统',
    type: '商城系统',
    preview: '商品 · 订单 · 支付',
    title: '农产品销售商城系统',
    desc: '包含商品管理、购物流程、订单处理和后台运营模块。',
    image: projectMallAgri,
    imageAlt: '商城后台管理系统界面样例图',
    difficulty: '进阶',
    cycle: '3-4 周',
    techs: ['Vue3', 'Element Plus', 'Spring Boot', 'MySQL'],
    deliverables: ['前后台源码', '数据库脚本', '测试账号', '部署环境'],
    modules: ['商品分类管理', '购物车与订单', '后台运营管理', '销售数据统计'],
    logic: ['用户浏览商品并提交订单', '后台处理商品、订单和库存数据', '通过销售统计说明系统业务价值'],
  },
  {
    category: '管理系统',
    type: '预约管理',
    preview: '预约 · 审核 · 通知',
    title: '医院挂号预约管理系统',
    desc: '围绕科室、医生排班、预约记录和后台审核形成完整流程。',
    image: projectHospitalBooking,
    imageAlt: '预约管理系统界面样例图',
    difficulty: '标准',
    cycle: '2-3 周',
    techs: ['Vue3', 'Spring Boot', 'MyBatis', 'MySQL'],
    deliverables: ['业务模块', '接口清单', '数据库设计', '演示账号'],
    modules: ['科室医生管理', '排班配置', '预约挂号', '后台审核统计'],
    logic: ['管理员维护科室、医生和可预约时段', '用户选择医生并提交预约记录', '系统汇总预约状态和就诊安排'],
  },
  {
    category: '校园项目',
    type: '校园服务',
    preview: '报修 · 派单 · 评价',
    title: '宿舍报修与工单管理系统',
    desc: '支持学生提交报修、管理员派单、维修反馈和满意度统计。',
    image: projectDormRepair,
    imageAlt: '校园工单管理系统界面样例图',
    difficulty: '基础',
    cycle: '1-2 周',
    techs: ['Vue3', 'Node.js', 'Express', 'MongoDB'],
    deliverables: ['前端页面', '接口服务', '数据模型', '项目说明'],
    modules: ['报修提交', '工单派发', '维修反馈', '满意度评价'],
    logic: ['学生提交报修内容和宿舍信息', '管理员分配维修人员并更新状态', '维修完成后形成评价和统计记录'],
  },
  {
    category: '管理系统',
    type: '考试系统',
    preview: '题库 · 考试 · 成绩',
    title: '在线考试与题库管理系统',
    desc: '覆盖题库维护、试卷生成、在线答题、成绩统计和错题分析。',
    image: projectExamBank,
    imageAlt: '在线考试系统界面样例图',
    difficulty: '进阶',
    cycle: '3-4 周',
    techs: ['React', 'Ant Design', 'Spring Boot', 'MySQL'],
    deliverables: ['考试流程', '后台管理', '统计报表', '部署文档'],
    modules: ['题库维护', '试卷生成', '在线答题', '成绩与错题分析'],
    logic: ['教师维护题目并生成考试试卷', '学生在线完成考试并提交答案', '系统自动统计成绩和错题情况'],
  },
  {
    category: '小程序/H5',
    type: '小程序',
    preview: '预约 · 分享 · 管理',
    title: '健身房会员预约小程序',
    desc: '支持课程预约、会员资料、签到记录和后台课程管理。',
    image: projectFitnessMiniapp,
    imageAlt: '移动端预约项目界面样例图',
    difficulty: '标准',
    cycle: '2-3 周',
    techs: ['uni-app', 'Vue3', 'Spring Boot', 'MySQL'],
    deliverables: ['小程序端', '管理后台', '接口服务', '演示说明'],
    modules: ['课程预约', '会员资料', '签到记录', '后台课程管理'],
    logic: ['会员选择课程并提交预约', '系统校验名额和预约时间', '后台统计签到、课程和会员活跃情况'],
  },
  {
    category: '可视化',
    type: '分析看板',
    preview: '排行 · 预警 · 趋势',
    title: '企业销售数据分析看板',
    desc: '通过业绩指标、区域排行、趋势预警展示数据分析能力。',
    image: projectSalesBi,
    imageAlt: '销售数据分析看板界面样例图',
    difficulty: '标准',
    cycle: '2-3 周',
    techs: ['Vue3', 'ECharts', 'Mock.js', 'REST API'],
    deliverables: ['大屏页面', '图表组件', '模拟数据', '展示脚本'],
    modules: ['销售指标', '区域排行', '趋势预警', '数据筛选'],
    logic: ['按销售维度组织模拟或接口数据', '通过图表展示业绩、区域和趋势变化', '围绕异常预警和经营分析讲清项目价值'],
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
