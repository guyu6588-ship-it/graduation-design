const fs = require('fs')
const path = require('path')

const outDir = path.resolve(__dirname, '../public/project-shots-simulated')

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const shell = (title, body, theme = '#0f766e', bg = '#f4f8fb') => `
<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="900" viewBox="0 0 1440 900" role="img" aria-label="${esc(title)}">
  <defs>
    <filter id="shadow" x="-18%" y="-18%" width="136%" height="136%">
      <feDropShadow dx="0" dy="24" stdDeviation="24" flood-color="#102033" flood-opacity=".16"/>
    </filter>
    <linearGradient id="brand" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${theme}"/>
      <stop offset="1" stop-color="#13b8a6"/>
    </linearGradient>
  </defs>
  <rect width="1440" height="900" fill="${bg}"/>
  <rect x="88" y="70" width="1264" height="760" rx="34" fill="#fff" filter="url(#shadow)"/>
  ${body}
</svg>`.trim()

const topbar = (title, subtitle) => `
  <rect x="128" y="108" width="1184" height="68" rx="24" fill="#f8fafc"/>
  <text x="168" y="148" fill="#0f172a" font-family="Arial, sans-serif" font-size="26" font-weight="900">${esc(title)}</text>
  <text x="1008" y="148" fill="#64748b" font-family="Arial, sans-serif" font-size="14" font-weight="700">${esc(subtitle)}</text>`

const card = (x, y, w, h, fill = '#fff') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="${fill}" stroke="#e2e8f0"/>`

const metric = (x, y, label, value, color) => `
  ${card(x, y, 178, 96)}
  <text x="${x + 22}" y="${y + 33}" fill="#64748b" font-family="Arial, sans-serif" font-size="13" font-weight="800">${esc(label)}</text>
  <text x="${x + 22}" y="${y + 72}" fill="${color}" font-family="Arial, sans-serif" font-size="30" font-weight="900">${esc(value)}</text>`

const write = (name, svg) => {
  fs.writeFileSync(path.join(outDir, `${name}.svg`), svg)
}

const campusTrade = (page) => {
  const isDetail = page === 'detail'
  const rows = [
    ['MacBook Air 2020', '数码', '待审核', '¥3,280'],
    ['考研资料套装', '图书', '已上架', '¥89'],
    ['宿舍折叠桌', '生活', '交易中', '¥46'],
    ['山地车九成新', '运动', '待确认', '¥468'],
  ]
  return shell(
    `校园二手交易管理平台-${page}`,
    `
    <rect x="88" y="70" width="226" height="760" rx="34" fill="url(#brand)"/>
    <text x="132" y="142" fill="#fff" font-family="Arial, sans-serif" font-size="24" font-weight="900">Campus Market</text>
    ${['商品审核', '交易记录', '用户管理', '数据统计'].map((item, i) => `<text x="138" y="${226 + i * 58}" fill="#fff" opacity="${i === 0 ? '.98' : '.64'}" font-family="Arial, sans-serif" font-size="16" font-weight="800">${item}</text>`).join('')}
    <text x="354" y="142" fill="#0f172a" font-family="Arial, sans-serif" font-size="34" font-weight="900">校园二手交易管理平台</text>
    ${metric(354, 188, '在售商品', '1,286', '#0f766e')}
    ${metric(554, 188, '待审核', '38', '#f97316')}
    ${metric(754, 188, '交易额', '¥24,830', '#0ea5e9')}
    ${card(354, 326, 594, 326)}
    <text x="386" y="374" fill="#0f172a" font-family="Arial, sans-serif" font-size="22" font-weight="900">${isDetail ? '商品审核详情' : '商品审核列表'}</text>
    ${rows.map((r, i) => `<rect x="386" y="${408 + i * 54}" width="516" height="42" rx="13" fill="${i % 2 ? '#fff' : '#f8fafc'}"/><text x="408" y="${435 + i * 54}" fill="#111827" font-family="Arial, sans-serif" font-size="15" font-weight="800">${r[0]}</text><text x="608" y="${435 + i * 54}" fill="#64748b" font-family="Arial, sans-serif" font-size="14" font-weight="700">${r[1]}</text><text x="724" y="${435 + i * 54}" fill="#0f766e" font-family="Arial, sans-serif" font-size="14" font-weight="900">${r[2]}</text><text x="824" y="${435 + i * 54}" fill="#111827" font-family="Arial, sans-serif" font-size="14" font-weight="900">${r[3]}</text>`).join('')}
    ${card(992, 188, 260, 464, '#f8fafc')}
    <text x="1026" y="238" fill="#0f172a" font-family="Arial, sans-serif" font-size="22" font-weight="900">交易趋势</text>
    <path d="M1032 530 C1080 450 1110 492 1148 390 S1212 418 1230 306" fill="none" stroke="#0f766e" stroke-width="12" stroke-linecap="round"/>
    <circle cx="1084" cy="312" r="42" fill="#dcfce7"/><text x="1058" y="321" fill="#16a34a" font-family="Arial, sans-serif" font-size="22" font-weight="900">89%</text>`,
    '#0f766e'
  )
}

const agriMall = (page) => {
  const products = [
    ['丹东草莓礼盒', '¥128', '#fee2e2'],
    ['五常大米 5kg', '¥69', '#fef3c7'],
    ['有机鸡蛋 30枚', '¥42', '#dcfce7'],
    ['赣南脐橙礼箱', '¥98', '#ffedd5'],
  ]
  return shell(
    `农产品销售商城系统-${page}`,
    `
    ${topbar('农产品销售商城系统', page === 'detail' ? '订单履约详情' : '运营工作台')}
    ${metric(154, 222, '今日订单', '328', '#f97316')}
    ${metric(354, 222, '待发货', '46', '#16a34a')}
    ${metric(554, 222, '销售额', '¥86,420', '#0f766e')}
    ${card(154, 362, 676, 346)}
    <text x="190" y="414" fill="#0f172a" font-family="Arial, sans-serif" font-size="23" font-weight="900">商品货架</text>
    ${products.map((p, i) => `<rect x="${190 + (i % 2) * 300}" y="${448 + Math.floor(i / 2) * 112}" width="254" height="86" rx="20" fill="${p[2]}"/><circle cx="${226 + (i % 2) * 300}" cy="${491 + Math.floor(i / 2) * 112}" r="24" fill="#fff" opacity=".76"/><text x="${266 + (i % 2) * 300}" y="${486 + Math.floor(i / 2) * 112}" fill="#111827" font-family="Arial, sans-serif" font-size="16" font-weight="900">${p[0]}</text><text x="${266 + (i % 2) * 300}" y="${512 + Math.floor(i / 2) * 112}" fill="#f97316" font-family="Arial, sans-serif" font-size="18" font-weight="900">${p[1]}</text>`).join('')}
    ${card(876, 222, 350, 486, '#fff7ed')}
    <text x="914" y="282" fill="#0f172a" font-family="Arial, sans-serif" font-size="24" font-weight="900">订单履约</text>
    ${[82, 54, 128, 96, 146].map((h, i) => `<rect x="${930 + i * 54}" y="${608 - h}" width="28" height="${h}" rx="14" fill="${i % 2 ? '#16a34a' : '#f97316'}" opacity=".72"/>`).join('')}
    <rect x="914" y="634" width="238" height="16" rx="8" fill="#fed7aa"/><rect x="914" y="634" width="174" height="16" rx="8" fill="#f97316"/>`,
    '#f97316',
    '#fff7ed'
  )
}

const hospital = (page) =>
  shell(
    `医院挂号预约管理系统-${page}`,
    `
    <rect x="128" y="110" width="1184" height="96" rx="28" fill="#eff6ff"/>
    <text x="176" y="168" fill="#1d4ed8" font-family="Arial, sans-serif" font-size="34" font-weight="900">医院挂号预约管理系统</text>
    ${metric(176, 250, '今日预约', '216', '#2563eb')}
    ${metric(376, 250, '候诊人数', '42', '#06b6d4')}
    ${metric(576, 250, '可约号源', '683', '#16a34a')}
    ${card(176, 392, 476, 284)}
    <text x="212" y="442" fill="#0f172a" font-family="Arial, sans-serif" font-size="22" font-weight="900">医生排班</text>
    ${['内科 王医生 09:00 已满', '口腔科 李医生 14:00 可预约', '儿科 周医生 10:00 候补', '眼科 陈医生 15:00 可预约'].map((t, i) => `<rect x="212" y="${474 + i * 45}" width="398" height="34" rx="12" fill="${i % 2 ? '#fff' : '#f8fafc'}"/><text x="232" y="${497 + i * 45}" fill="#334155" font-family="Arial, sans-serif" font-size="15" font-weight="800">${t}</text>`).join('')}
    ${card(704, 250, 480, 426, '#f8fbff')}
    <text x="744" y="308" fill="#0f172a" font-family="Arial, sans-serif" font-size="22" font-weight="900">${page === 'detail' ? '患者预约详情' : '预约时间分布'}</text>
    <rect x="756" y="356" width="350" height="54" rx="16" fill="#dbeafe"/><rect x="756" y="436" width="296" height="54" rx="16" fill="#ccfbf1"/><rect x="756" y="516" width="386" height="54" rx="16" fill="#e0f2fe"/>
    <circle cx="1132" cy="386" r="42" fill="#2563eb" opacity=".16"/><text x="1108" y="396" fill="#2563eb" font-family="Arial, sans-serif" font-size="22" font-weight="900">72%</text>`,
    '#2563eb',
    '#f1f7ff'
  )

const dormRepair = (page) =>
  shell(
    `宿舍报修与工单管理系统-${page}`,
    `
    <rect x="128" y="108" width="1184" height="76" rx="24" fill="#0f172a"/>
    <text x="168" y="156" fill="#fff" font-family="Arial, sans-serif" font-size="30" font-weight="900">宿舍报修与工单管理系统</text>
    ${['待派单', '处理中', '已完成'].map((col, i) => `<rect x="${154 + i * 380}" y="238" width="332" height="456" rx="24" fill="${i === 0 ? '#fff7ed' : i === 1 ? '#ecfeff' : '#f0fdf4'}" stroke="#e2e8f0"/><text x="${188 + i * 380}" y="292" fill="#0f172a" font-family="Arial, sans-serif" font-size="23" font-weight="900">${col}</text>`).join('')}
    ${['3号楼502 水龙头漏水', '8号楼 网络异常', '6号楼 空调不制冷', '1号楼 门锁损坏', '12号楼 照明故障', '5号楼 洗衣机报修'].map((t, i) => `<rect x="${188 + Math.floor(i / 2) * 380}" y="${326 + (i % 2) * 132}" width="264" height="94" rx="18" fill="#fff" stroke="#e2e8f0"/><text x="${214 + Math.floor(i / 2) * 380}" y="${364 + (i % 2) * 132}" fill="#111827" font-family="Arial, sans-serif" font-size="16" font-weight="900">${t}</text><rect x="${214 + Math.floor(i / 2) * 380}" y="${386 + (i % 2) * 132}" width="90" height="20" rx="10" fill="#14b8a6" opacity=".18"/><text x="${230 + Math.floor(i / 2) * 380}" y="${401 + (i % 2) * 132}" fill="#0f766e" font-family="Arial, sans-serif" font-size="12" font-weight="900">宿舍维修</text>`).join('')}`,
    '#334155',
    '#eef2f7'
  )

const examBank = (page) =>
  shell(
    `在线考试与题库管理系统-${page}`,
    `
    ${topbar('在线考试与题库管理系统', page === 'detail' ? '成绩与错题分析' : '题库工作台')}
    ${card(150, 226, 350, 486, '#fbf8ff')}
    <text x="190" y="282" fill="#5b21b6" font-family="Arial, sans-serif" font-size="24" font-weight="900">试卷结构</text>
    ${['单选题 30', '多选题 15', '判断题 20', '简答题 4'].map((t, i) => `<rect x="190" y="${326 + i * 72}" width="236" height="46" rx="16" fill="#fff" stroke="#ddd6fe"/><text x="216" y="${356 + i * 72}" fill="#111827" font-family="Arial, sans-serif" font-size="16" font-weight="900">${t}</text>`).join('')}
    ${card(552, 226, 642, 486)}
    <text x="592" y="282" fill="#0f172a" font-family="Arial, sans-serif" font-size="24" font-weight="900">${page === 'detail' ? '成绩分析' : '考试监控'}</text>
    ${['软件工程期末测试', '数据库章节练习', 'Java 基础测验', 'Web 前端综合题'].map((t, i) => `<rect x="592" y="${326 + i * 62}" width="520" height="42" rx="14" fill="${i % 2 ? '#fff' : '#f8fafc'}"/><text x="616" y="${353 + i * 62}" fill="#111827" font-family="Arial, sans-serif" font-size="16" font-weight="900">${t}</text><rect x="950" y="${338 + i * 62}" width="${88 + i * 24}" height="16" rx="8" fill="#7c3aed" opacity=".58"/>`).join('')}
    <circle cx="1070" cy="622" r="44" fill="#fef3c7"/><text x="1048" y="633" fill="#ca8a04" font-family="Arial, sans-serif" font-size="24" font-weight="900">81</text>`,
    '#7c3aed',
    '#faf7ff'
  )

const salesBi = (page) =>
  shell(
    `企业销售数据分析看板-${page}`,
    `
    <rect x="88" y="70" width="1264" height="760" rx="34" fill="#101827"/>
    <text x="146" y="146" fill="#fff" font-family="Arial, sans-serif" font-size="34" font-weight="900">企业销售数据分析看板</text>
    ${metric(146, 198, '月销售额', '¥862w', '#38bdf8')}
    ${metric(346, 198, '新增客户', '1,248', '#34d399')}
    ${metric(546, 198, '转化率', '23.8%', '#facc15')}
    <rect x="146" y="340" width="640" height="332" rx="28" fill="#182336"/>
    <text x="188" y="396" fill="#fff" font-family="Arial, sans-serif" font-size="24" font-weight="900">区域销售趋势</text>
    <path d="M198 584 C276 464 346 538 420 426 S578 482 720 378" fill="none" stroke="#38bdf8" stroke-width="12" stroke-linecap="round"/>
    <rect x="834" y="198" width="330" height="474" rx="28" fill="#182336"/>
    <text x="876" y="258" fill="#fff" font-family="Arial, sans-serif" font-size="24" font-weight="900">区域排行</text>
    ${['华东 ¥286.2w', '华南 ¥164.8w', '西南 ¥142.1w', '华北 ¥128.5w'].map((t, i) => `<rect x="876" y="${306 + i * 76}" width="${210 - i * 22}" height="34" rx="17" fill="${i % 2 ? '#34d399' : '#38bdf8'}" opacity=".78"/><text x="888" y="${330 + i * 76}" fill="#fff" font-family="Arial, sans-serif" font-size="15" font-weight="900">${t}</text>`).join('')}`,
    '#0ea5e9',
    '#eaf6fb'
  )

fs.mkdirSync(outDir, { recursive: true })

const renderers = {
  'campus-trade': campusTrade,
  'agri-mall': agriMall,
  'hospital-booking': hospital,
  'dorm-repair': dormRepair,
  'exam-bank': examBank,
  'sales-bi': salesBi,
}

Object.entries(renderers).forEach(([key, render]) => {
  ;['overview', 'manage', 'detail'].forEach((page) => {
    write(`${key}-${page}`, render(page))
  })
})

console.log('Generated 18 differentiated simulated project screenshots.')
