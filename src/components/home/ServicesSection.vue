<template>
  <section id="services" class="section">
    <SectionHeading
      eyebrow="Service"
      title="围绕答辩场景的项目交付"
      desc="不堆概念，先把题目需要的业务闭环、页面体验、数据结构和演示链路梳理清楚，再进入开发。"
    />

    <div class="service-grid">
      <article
        v-for="service in services"
        :key="service.title"
        class="service-card animate__animated animate__fadeInUp"
      >
        <div class="service-icon">{{ service.no }}</div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.desc }}</p>
        <ul>
          <li v-for="item in service.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>

    <div class="service-process">
      <div class="process-copy">
        <p class="eyebrow">Process</p>
        <h3>从选题到演示，一条线推进</h3>
        <p>
          服务内容和推进流程放在一起看，更容易判断项目是否适合，也能提前明确答辩时要讲清楚的业务逻辑。
        </p>
      </div>

      <ol class="process-list">
        <li v-for="step in steps" :key="step.title">
          <span>{{ step.no }}</span>
          <div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionHeading from './SectionHeading.vue'
import type { ProcessStep, Service } from '@/data/home'

export default defineComponent({
  name: 'ServicesSection',
  components: {
    SectionHeading,
  },
  props: {
    services: {
      type: Array as () => Service[],
      required: true,
    },
    steps: {
      type: Array as () => ProcessStep[],
      required: true,
    },
  },
})
</script>
