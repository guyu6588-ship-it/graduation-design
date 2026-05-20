<template>
  <header class="topbar-shell">
    <div class="topbar">
      <a class="brand" href="#hero" aria-label="毕业设计项目展示首页">
        <img src="@/assets/gradworks-logo.svg" alt="毕设工坊 项目展示交付" />
      </a>

      <nav class="nav" aria-label="主导航">
        <a v-for="item in navItems" :key="item.href" :href="item.href">
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { NavItem } from '@/data/home'

export default defineComponent({
  name: 'SiteHeader',
  props: {
    navItems: {
      type: Array as () => NavItem[],
      required: true,
    },
  },
})
</script>
