const simulatedShot = (name: string) => `project-shots-simulated/${name}.svg`

const simulatedSource: OpenSourceRef = {
  name: 'Generated realistic project mockup',
  url: '#generated-project-showcase',
  license: 'Generated for this portfolio site',
  usage: '生成式项目效果示意图，用于展示可交付项目方向；非真实客户项目截图',
}

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
  gallery: string[]
  sourceRefs: OpenSourceRef[]
  difficulty: string
  cycle: string
  techs: string[]
  deliverables: string[]
  modules: string[]
  logic: string[]
}

export type OpenSourceRef = {
  name: string
  url: string
  license: string
  usage: string
}

export type ProcessStep = {
  no: string
  title: string
  desc: string
}

export const navItems: NavItem[] = [
  { label: '项目库', href: '#works' },
  { label: '服务', href: '#services' },
  { label: '联系我们', href: '#contact' },
]

export const heroStats: StatItem[] = [
  { value: '30+', label: '可参考项目方向' },
  { value: '8 类', label: '主流实践场景' },
  { value: '源码 / 部署', label: '完整演示交付' },
]

export const projectCategories = ['全部', '管理系统', '商城系统', '校园项目', '医疗系统', '可视化']

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
    preview: '审核 · 交易 · 统计',
    title: '校园二手交易管理平台',
    desc: '围绕学生闲置交易场景，展示商品审核、交易记录、用户管理和数据统计。',
    image: simulatedShot('campus-trade-overview'),
    imageAlt: '校园二手交易管理平台生成式效果图',
    gallery: [
      simulatedShot('campus-trade-overview'),
      simulatedShot('campus-trade-manage'),
      simulatedShot('campus-trade-detail'),
    ],
    sourceRefs: [simulatedSource],
    difficulty: '标准',
    cycle: '2-3 周',
    techs: ['Vue3', 'TypeScript', 'Spring Boot', 'MySQL'],
    deliverables: ['源码', '数据库', '部署演示', '答辩说明'],
    modules: ['用户登录与权限', '商品发布管理', '商品审核流转', '交易数据统计'],
    logic: ['学生发布闲置商品并维护信息', '管理员审核商品状态和违规内容', '买卖双方完成沟通与交易记录沉淀'],
  },
  {
    category: '商城系统',
    type: '商城系统',
    preview: '商品 · 订单 · 运营',
    title: '农产品销售商城系统',
    desc: '覆盖商品管理、购物流程、订单处理、库存预警和后台运营分析。',
    image: simulatedShot('agri-mall-overview'),
    imageAlt: '农产品销售商城系统生成式效果图',
    gallery: [
      simulatedShot('agri-mall-overview'),
      simulatedShot('agri-mall-manage'),
      simulatedShot('agri-mall-detail'),
    ],
    sourceRefs: [simulatedSource],
    difficulty: '进阶',
    cycle: '3-4 周',
    techs: ['Vue3', 'Element Plus', 'Spring Boot', 'MySQL'],
    deliverables: ['前后台源码', '数据库脚本', '测试账号', '部署环境'],
    modules: ['商品分类管理', '购物车与订单', '后台运营管理', '销售数据统计'],
    logic: ['用户浏览商品并提交订单', '后台处理商品、订单和库存数据', '通过销售统计说明系统业务价值'],
  },
  {
    category: '医疗系统',
    type: '预约管理',
    preview: '预约 · 排班 · 档案',
    title: '医院挂号预约管理系统',
    desc: '围绕科室、医生排班、预约记录、患者档案和后台统计形成完整流程。',
    image: simulatedShot('hospital-booking-overview'),
    imageAlt: '医院挂号预约管理系统生成式效果图',
    gallery: [
      simulatedShot('hospital-booking-overview'),
      simulatedShot('hospital-booking-manage'),
      simulatedShot('hospital-booking-detail'),
    ],
    sourceRefs: [simulatedSource],
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
    image: simulatedShot('dorm-repair-overview'),
    imageAlt: '宿舍报修与工单管理系统生成式效果图',
    gallery: [
      simulatedShot('dorm-repair-overview'),
      simulatedShot('dorm-repair-manage'),
      simulatedShot('dorm-repair-detail'),
    ],
    sourceRefs: [simulatedSource],
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
    image: simulatedShot('exam-bank-overview'),
    imageAlt: '在线考试与题库管理系统生成式效果图',
    gallery: [
      simulatedShot('exam-bank-overview'),
      simulatedShot('exam-bank-manage'),
      simulatedShot('exam-bank-detail'),
    ],
    sourceRefs: [simulatedSource],
    difficulty: '进阶',
    cycle: '3-4 周',
    techs: ['React', 'Ant Design', 'Spring Boot', 'MySQL'],
    deliverables: ['考试流程', '后台管理', '统计报表', '部署文档'],
    modules: ['题库维护', '试卷生成', '在线答题', '成绩与错题分析'],
    logic: ['教师维护题目并生成考试试卷', '学生在线完成考试并提交答案', '系统自动统计成绩和错题情况'],
  },
  {
    category: '可视化',
    type: '分析看板',
    preview: '排行 · 预警 · 趋势',
    title: '企业销售数据分析看板',
    desc: '通过业绩指标、区域排行、趋势预警展示数据分析能力。',
    image: simulatedShot('sales-bi-overview'),
    imageAlt: '企业销售数据分析看板生成式效果图',
    gallery: [
      simulatedShot('sales-bi-overview'),
      simulatedShot('sales-bi-manage'),
      simulatedShot('sales-bi-detail'),
    ],
    sourceRefs: [simulatedSource],
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
