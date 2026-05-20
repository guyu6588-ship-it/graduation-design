<template>
  <section id="works" class="section works-section">
    <SectionHeading
      eyebrow="Works"
      title="案例展示"
      desc="用接近成品的界面图，直接说明项目形态、核心功能和演示价值。"
    />

    <div class="work-grid">
      <article v-for="work in works" :key="work.title" class="work-card">
        <div class="work-preview">
          <img :src="work.image" :alt="work.imageAlt" />
          <div class="work-preview-label">
            <span>{{ work.type }}</span>
            <strong>{{ work.preview }}</strong>
          </div>
        </div>
        <div class="work-content">
          <p class="work-tag">{{ work.type }}</p>
          <h3>{{ work.title }}</h3>
          <p>{{ work.desc }}</p>
          <div class="tech-list">
            <span v-for="tech in work.techs" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionHeading from './SectionHeading.vue'
import type { Work } from '@/data/home'

export default defineComponent({
  name: 'WorksSection',
  components: {
    SectionHeading,
  },
  props: {
    works: {
      type: Array as () => Work[],
      required: true,
    },
  },
})
</script>
