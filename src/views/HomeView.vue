<template>
  <main class="site">
    <SiteHeader :nav-items="navItems" />
    <HeroSection :stats="heroStats" />
    <ServicesSection :services="services" />
    <WorksSection :categories="projectCategories" :works="works" />
    <ProcessSection :steps="processSteps" />
    <ContactSection />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactSection from '@/components/home/ContactSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import ProcessSection from '@/components/home/ProcessSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import SiteHeader from '@/components/home/SiteHeader.vue'
import WorksSection from '@/components/home/WorksSection.vue'
import { heroStats, navItems, processSteps, projectCategories, services, works } from '@/data/home'

export default defineComponent({
  name: 'HomeView',
  components: {
    ContactSection,
    HeroSection,
    ProcessSection,
    ServicesSection,
    SiteHeader,
    WorksSection,
  },
  setup() {
    return {
      heroStats,
      navItems,
      processSteps,
      projectCategories,
      services,
      works,
    }
  },
})
</script>
