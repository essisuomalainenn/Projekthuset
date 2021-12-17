<template>
  <section
    :id="slice.primary.navigationName"
    class="section p-4 md:pb-0 "
    :style="{
      'background-image':
        'url(https://projekthuset.eu/app/uploads/2018/04/projekhuset-work.jpg)',
    }"
  >
    <div class="red-overlay"></div>
    <div class="container xl:pl-[15rem] xl:pr-[30rem] xl:pb-12">
      <rulerSvg ref="activity" class="ruler hidden md:block xl:ruler-big"/>
      <div class="activities-title-container mt-4">
        <prismic-image :field="slice.primary.logo" class="activity-logo" />
        <prismic-rich-text
          :field="slice.primary.title"
          class="text-2xl tracking-wide"
        />
      </div>
      <div ref="activity" class="sm:grid grid-cols-2 gap-4 w-fit pb-4">
        <ul
          v-for="(item, i) in slice.primary.activitiesContent"
          :key="`slice-item-${i}`"
          :data-i="i"
        >
          <li class="mb-2">{{ item.text }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import rulerSvg from '~/assets/linjalstreck.svg?inline'
export default {
  name: 'Activities',
  components: {
    rulerSvg,
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
     mounted() {
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll() {
      this.$gsap.from(this.$refs.activity, {
       y: 50,
        autoAlpha: 0,
        ease: 'Power1.easeInOut',
        duration: 1.7,
        scrollTrigger: {
          trigger: this.$refs.activity,
          start: 'top 100%',
          end: 'top 50%',
          scrub: 1,
        },
      })
    },
  },
}
</script>

<style scoped>
.section {
  position: relative;
  background-repeat: no-repeat;
  box-sizing: inherit;
  background-size: cover;
  background-position: center;
  text-align: center;
  width: 100%;
  height: fit-content;
  display: flex;
  color: white;
  align-content: center;
  justify-content: flex-start;
}

.ruler {
  width: 35vw;
  position: absolute;
  fill: #e8e7da;
  right: 0;
  bottom: -7rem;
}

.ruler-big {
  bottom: -10rem;
}

.list-container {
  display: grid;
  grid-template-columns: 20rem 20rem;
  gap: 10px 20px;
  width: 70%;
  align-content: space-between;
}

.red-overlay {
  background-color: rgba(203, 51, 59, 0.9);
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}
ul li {
  list-style: disc;
  margin-left: 1.5rem;
  font-size: 1.2rem;
}
.container {
  position: relative;
  clear: both;
  margin-top: 1rem;
  overflow: hidden;
  max-width: 100%;
  margin-left: 0;
  margin-right: auto;
  text-align: left;
}

.activities-title-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
}

.activity-logo {
  width: 4rem;
  background-color: #e6e4d6;
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 1.5rem;
  fill: white;
}
li ul {
  list-style: disc;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
