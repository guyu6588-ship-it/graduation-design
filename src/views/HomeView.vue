<template>
  <main class="site">
    <SiteHeader :nav-items="navItems" />
    <HeroSection :stats="heroStats" />
    <WorksSection :categories="projectCategories" :works="works" />
    <ServicesSection :services="services" :steps="processSteps" />
    <ContactSection />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContactSection from '@/components/home/ContactSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import SiteHeader from '@/components/home/SiteHeader.vue'
import WorksSection from '@/components/home/WorksSection.vue'
import { heroStats, navItems, processSteps, projectCategories, services, works } from '@/data/home'

export default defineComponent({
  name: 'HomeView',
  components: {
    ContactSection,
    HeroSection,
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
