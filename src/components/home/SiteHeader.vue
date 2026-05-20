<template>
  <header class="topbar-shell">
    <div class="topbar">
      <a class="brand" href="#hero" aria-label="毕业设计项目展示首页">
        <img src="@/assets/gradworks-logo.svg" alt="毕设工坊 项目展示交付" />
      </a>

      <nav class="nav" aria-label="主导航">
        <a
          v-for="item in navItems"
          :key="item.href"
          :class="{ active: activeHref === item.href }"
          :href="item.href"
          @click="activeHref = item.href"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
import type { NavItem } from '@/data/home'

export default defineComponent({
  name: 'SiteHeader',
  props: {
    navItems: {
      type: Array as () => NavItem[],
      required: true,
    },
  },
  setup(props) {
    const activeHref = ref(props.navItems[0]?.href || '#hero')

    const updateActiveNav = () => {
      const headerOffset = 120
      const bottomThreshold = 8
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - bottomThreshold

      if (isAtBottom) {
        activeHref.value = props.navItems[props.navItems.length - 1]?.href || activeHref.value
        return
      }

      const current = props.navItems.reduce((matched, item) => {
        const section = document.querySelector(item.href)
        if (!section) {
          return matched
        }

        const top = section.getBoundingClientRect().top
        return top <= headerOffset ? item.href : matched
      }, activeHref.value)

      activeHref.value = current
    }

    onMounted(() => {
      updateActiveNav()
      window.addEventListener('scroll', updateActiveNav, { passive: true })
      window.addEventListener('resize', updateActiveNav)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', updateActiveNav)
      window.removeEventListener('resize', updateActiveNav)
    })

    return {
      activeHref,
    }
  },
})
</script>
