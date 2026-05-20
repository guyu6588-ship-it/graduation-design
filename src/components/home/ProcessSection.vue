<template>
  <section id="process" class="section process-section">
    <SectionHeading eyebrow="Process" title="清晰可控的项目推进流程" />

    <ol class="process-list">
      <li v-for="step in steps" :key="step.title">
        <span>{{ step.no }}</span>
        <div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionHeading from './SectionHeading.vue'
import type { ProcessStep } from '@/data/home'

export default defineComponent({
  name: 'ProcessSection',
  components: {
    SectionHeading,
  },
  props: {
    steps: {
      type: Array as () => ProcessStep[],
      required: true,
    },
  },
})
</script>
