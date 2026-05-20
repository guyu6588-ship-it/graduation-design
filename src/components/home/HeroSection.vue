<template>
  <section id="hero" class="hero">
    <div class="hero-copy">
      <p class="eyebrow">Graduation Project Delivery</p>
      <h1>毕业设计项目库</h1>
      <p class="hero-subtitle">从选题方案到上线演示</p>
      <p class="hero-text">
        汇总管理系统、商城项目、校园服务、移动端互动和数据可视化等常见方向。
        每个项目都围绕功能闭环、技术实现、部署演示和答辩表达来组织。
      </p>

      <div class="hero-actions">
        <a class="primary-btn" href="#works">浏览项目库</a>
        <a class="secondary-btn" href="#contact">提交项目需求</a>
      </div>

      <dl class="hero-stats" aria-label="服务特点">
        <div v-for="stat in stats" :key="stat.value">
          <dt>{{ stat.value }}</dt>
          <dd>{{ stat.label }}</dd>
        </div>
      </dl>
    </div>

    <div class="hero-visual" aria-label="项目展示工作台">
      <img src="@/assets/hero-workspace.jpg" alt="毕业设计项目展示工作台" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { StatItem } from '@/data/home'

export default defineComponent({
  name: 'HeroSection',
  props: {
    stats: {
      type: Array as () => StatItem[],
      required: true,
    },
  },
})
</script>
