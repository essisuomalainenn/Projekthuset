<template>
  <section
    id="home"
    class="section h-[163vh] sm:h-[100vh]"
    :style="{
      'background-image':
        'url(https://projekthuset.eu/app/uploads/2018/03/alexander-pemberton-95212-unsplash-1800x1200.jpg)',
    }"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="header-text-container mt-44">
        <transition>
          <prismic-rich-text
            :field="slice.primary.title"
            class="text-3xl md:text-5xl md:mb-8 text-white title"
          />
        </transition>
        <prismic-rich-text
          :field="slice.primary.text"
          class="text-sm md:text-base text-white text font-light"
        />
      </div>
    </div>
    <prismic-image :field="slice.primary.image" />
    <div class="container teasers content-center">
      <a
        v-scroll-to="'#' + slice.primary.sliceName"
        :href="'#' + slice.primary.sliceName"
        class="about-link"
      >
        <prismic-rich-text
          :field="slice.primary['about-text']"
          class="text-lg font-bold m-4 xl:m-8"
        />
        <arrow class="arrow text-center hidden sm:block" />
      </a>
      <transition-group
        class="teaser-item-wrapper flex-col sm:flex-row xl:mt-4"
        appear
        tag="div"
        @before-enter="itemsBeforeEnter"
        @enter="itemsEnter"
      >
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          :data-i="i"
          class="ikon m-4 md:m-8"
        >
          <a v-scroll-to="'#' + item.sliceName" :href="'#' + item.sliceName">
            <prismic-image
              class="ikon-svg shadow-xl w-32 sm:w-40 fill-current text-white leading-7"
              :field="item.image"
            />
            <prismic-rich-text :field="item.text" class="text-xl" />
          </a>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import arrow from '~/assets/arrow-down.svg?inline'

export default {
  name: 'Hero',
  components: { arrow },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    const beforeEnter = (el) => {
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done,
      })
    }
    const afterEnter = () => {}
    const itemsBeforeEnter = (el) => {
      el.style.opacity = 0
      el.style.transform = 'translateY(100px)'
    }

    const itemsEnter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.i * 0.2,
      })
    }
    return { beforeEnter, enter, afterEnter, itemsBeforeEnter, itemsEnter }
  },
  methods: {
    init() {},
  },
}
</script>
<style scoped>
.section {
  width: 100%;
  background: black;
  background-repeat: no-repeat;
  box-sizing: inherit;
  background-size: cover;
  overflow: hidden;
  background-position: center;
}

.logo {
  transition: all 0.25s ease;
  width: auto;
  max-width: 200px;
  display: block;
}

.arrow:hover {
  transform: scale(1.2);
}
.about-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu {
  filter: invert(100%);
  transition: all 0.25s ease;
  width: auto;
  height: 3rem;
  max-width: 200px;
  display: block;
}

.test {
  font-size: 2.5rem;
}

.overlay {
  position: absolute;
  overflow: hidden;
  top: 0;
  bottom: 0;
  height: inherit;
  left: 0;
  right: 0;
  background-color: rgba(62, 64, 64, 0.7);
}

.hover-background {
  background-color: #cb333b;
}

.site-header {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  padding: 0.666667rem;
  background: rgba(62, 64, 64, 0.5);
  padding: 0.5rem 0;
}

.header-text-container {
  margin-bottom: 3rem;
}

.teaser-item-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  justify-content: space-evenly;
  align-self: center;
}

.container {
  position: relative;
  clear: both;
  overflow: hidden;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.ikon {
  margin: 2rem;
}

.ikon-svg {
  fill: #cb333b;
  transition: all 0.25s ease-in-out;
  background-color: #e6e4d6;
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  margin-bottom: 1.5rem;

  @apply hover:bg-red-500;
}

.title {
  font-family: Rubik, sans-serif;
  margin: 1em 0 0.5em;
}

.text {
  font-family: Rubik, sans-serif;
  line-height: 1.66;
  text-align: center;
}

.teasers {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

@media screen and (min-width: 64rem) {
  .container {
    padding: 0 2rem;
  }
}
</style>
