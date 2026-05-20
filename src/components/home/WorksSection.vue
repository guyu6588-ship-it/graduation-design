<template>
  <section id="works" class="section works-section">
    <div class="works-head">
      <SectionHeading
        eyebrow="Project Library"
        title="实践项目库"
        desc="按常见选题方向整理项目方案，先看类型、功能、技术栈和交付内容，再决定要不要做同类定制。"
      />
    </div>

    <div class="category-tabs" aria-label="项目分类筛选">
      <button
        v-for="category in categories"
        :key="category"
        :class="{ active: category === activeCategory }"
        type="button"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div
      ref="swiperViewport"
      class="work-swiper"
      @mouseenter="pauseAutoplay"
      @mouseleave="resumeAutoplay"
    >
      <div class="work-track" :style="{ transform: `translateX(-${activeIndex * slideStep}px)` }">
        <article
          v-for="work in filteredWorks"
          :key="work.title"
          ref="slideCards"
          class="work-card"
          role="button"
          tabindex="0"
          @click="openWork(work)"
          @keydown.enter="openWork(work)"
          @keydown.space.prevent="openWork(work)"
        >
          <div class="work-preview">
            <img :src="work.image" :alt="work.imageAlt" />
            <div class="work-preview-label">
              <span>{{ work.category }}</span>
              <strong>{{ work.preview }}</strong>
            </div>
          </div>
          <div class="work-content">
            <p class="work-tag">{{ work.type }}</p>
            <h3>{{ work.title }}</h3>
            <p>{{ work.desc }}</p>

            <dl class="work-meta">
              <div>
                <dt>难度</dt>
                <dd>{{ work.difficulty }}</dd>
              </div>
              <div>
                <dt>周期</dt>
                <dd>{{ work.cycle }}</dd>
              </div>
            </dl>

            <div class="tech-list">
              <span v-for="tech in work.techs" :key="tech">{{ tech }}</span>
            </div>

            <div class="deliverable-list" aria-label="交付内容">
              <span v-for="item in work.deliverables" :key="item">{{ item }}</span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <div class="swiper-controls" aria-label="项目轮播控制">
      <button type="button" aria-label="上一个项目" @click="goPrev">‹</button>
      <div class="swiper-dots" aria-label="轮播分页">
        <button
          v-for="index in paginationCount"
          :key="index"
          :class="{ active: index - 1 === activeIndex }"
          type="button"
          :aria-label="`切换到第 ${index} 组项目`"
          @click="goTo(index - 1)"
        />
      </div>
      <button type="button" aria-label="下一个项目" @click="goNext">›</button>
    </div>

    <div v-if="selectedWork" class="project-modal" role="dialog" aria-modal="true" @click="closeWork">
      <div class="project-dialog" @click.stop>
        <button class="project-close" type="button" aria-label="关闭项目详情" @click="closeWork">×</button>
        <div class="project-detail-preview">
          <img :src="activeGalleryImage" :alt="selectedWork.imageAlt" />
          <div class="project-gallery-thumbs" aria-label="项目截图切换">
            <button
              v-for="(image, index) in selectedWork.gallery"
              :key="image"
              :class="{ active: index === activeGalleryIndex }"
              type="button"
              :aria-label="`查看第 ${index + 1} 张项目截图`"
              @click="activeGalleryIndex = index"
            >
              <img :src="image" :alt="`${selectedWork.title}截图 ${index + 1}`" />
            </button>
          </div>
        </div>
        <div class="project-detail-content">
          <p class="work-tag">{{ selectedWork.category }} / {{ selectedWork.type }}</p>
          <h3>{{ selectedWork.title }}</h3>
          <p>{{ selectedWork.desc }}</p>

          <dl class="project-detail-meta">
            <div>
              <dt>项目难度</dt>
              <dd>{{ selectedWork.difficulty }}</dd>
            </div>
            <div>
              <dt>参考周期</dt>
              <dd>{{ selectedWork.cycle }}</dd>
            </div>
          </dl>

          <div class="project-detail-block">
            <h4>核心模块</h4>
            <div class="module-list">
              <span v-for="module in selectedWork.modules" :key="module">{{ module }}</span>
            </div>
          </div>

          <div class="project-detail-block">
            <h4>整体逻辑</h4>
            <ol>
              <li v-for="item in selectedWork.logic" :key="item">{{ item }}</li>
            </ol>
          </div>

          <div class="project-detail-block">
            <h4>交付内容</h4>
            <div class="deliverable-list">
              <span v-for="item in selectedWork.deliverables" :key="item">{{ item }}</span>
            </div>
          </div>

          <a class="project-consult" href="#contact" @click="closeWork">咨询类似项目</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import SectionHeading from './SectionHeading.vue'
import type { Work } from '@/data/home'

export default defineComponent({
  name: 'WorksSection',
  components: {
    SectionHeading,
  },
  props: {
    categories: {
      type: Array as () => string[],
      required: true,
    },
    works: {
      type: Array as () => Work[],
      required: true,
    },
  },
  setup(props) {
    const autoplayDelay = 3200
    const swiperViewport = ref<HTMLElement | null>(null)
    const slideCards = ref<HTMLElement[]>([])
    const activeCategory = ref('全部')
    const activeIndex = ref(0)
    const slideStep = ref(0)
    const slidesPerView = ref(3)
    const selectedWork = ref<Work | null>(null)
    const activeGalleryIndex = ref(0)
    let autoplayTimer: number | undefined

    const filteredWorks = computed(() => {
      if (activeCategory.value === '全部') {
        return props.works
      }

      return props.works.filter((work) => work.category === activeCategory.value)
    })
    const maxIndex = computed(() => Math.max(filteredWorks.value.length - slidesPerView.value, 0))
    const paginationCount = computed(() => maxIndex.value + 1)

    const updateSwiperMetrics = () => {
      const firstSlide = slideCards.value[0]
      if (!firstSlide) {
        slideStep.value = 0
        return
      }

      const styles = window.getComputedStyle(firstSlide)
      const marginRight = Number.parseFloat(styles.marginRight) || 0
      slideStep.value = firstSlide.offsetWidth + marginRight

      if (window.innerWidth <= 720) {
        slidesPerView.value = 1
      } else if (window.innerWidth <= 980) {
        slidesPerView.value = 2
      } else {
        slidesPerView.value = 3
      }

      activeIndex.value = Math.min(activeIndex.value, maxIndex.value)
    }

    const goTo = (index: number) => {
      activeIndex.value = Math.min(Math.max(index, 0), maxIndex.value)
    }

    const goNext = () => {
      activeIndex.value = activeIndex.value >= maxIndex.value ? 0 : activeIndex.value + 1
    }

    const goPrev = () => {
      activeIndex.value = activeIndex.value <= 0 ? maxIndex.value : activeIndex.value - 1
    }

    const pauseAutoplay = () => {
      if (autoplayTimer) {
        window.clearInterval(autoplayTimer)
        autoplayTimer = undefined
      }
    }

    const resumeAutoplay = () => {
      pauseAutoplay()
      if (filteredWorks.value.length > slidesPerView.value) {
        autoplayTimer = window.setInterval(goNext, autoplayDelay)
      }
    }

    const openWork = (work: Work) => {
      selectedWork.value = work
      activeGalleryIndex.value = 0
      pauseAutoplay()
    }

    const closeWork = () => {
      selectedWork.value = null
      resumeAutoplay()
    }

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedWork.value) {
        closeWork()
      }
    }

    const activeGalleryImage = computed(() => {
      if (!selectedWork.value) {
        return ''
      }

      return selectedWork.value.gallery[activeGalleryIndex.value] || selectedWork.value.image
    })

    watch(activeCategory, () => {
      activeIndex.value = 0
      nextTick(() => {
        updateSwiperMetrics()
        resumeAutoplay()
      })
    })

    watch(filteredWorks, () => {
      nextTick(updateSwiperMetrics)
    })

    onMounted(() => {
      nextTick(() => {
        updateSwiperMetrics()
        resumeAutoplay()
      })
      window.addEventListener('resize', updateSwiperMetrics)
      window.addEventListener('keydown', handleKeydown)
    })

    onBeforeUnmount(() => {
      pauseAutoplay()
      window.removeEventListener('resize', updateSwiperMetrics)
      window.removeEventListener('keydown', handleKeydown)
    })

    return {
      activeCategory,
      activeGalleryImage,
      activeGalleryIndex,
      activeIndex,
      filteredWorks,
      goNext,
      goPrev,
      goTo,
      closeWork,
      openWork,
      paginationCount,
      pauseAutoplay,
      resumeAutoplay,
      selectedWork,
      slideCards,
      slideStep,
      swiperViewport,
    }
  },
})
</script>
