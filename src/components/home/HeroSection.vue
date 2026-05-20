<template>
  <section id="hero" class="hero">
    <div class="hero-copy">
      <p class="eyebrow">Graduation Project Delivery</p>
      <h1>毕业设计开发展示</h1>
      <p class="hero-subtitle">展示说明与上线演示支持</p>
      <p class="hero-text">
        为毕业设计提供项目规划、界面实现、接口开发、数据可视化与部署支持。
        交付重点放在清晰的业务逻辑、稳定的演示环境，以及答辩现场能讲明白的作品结构。
      </p>

      <div class="hero-actions">
        <a class="primary-btn" href="#works">查看案例方向</a>
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
