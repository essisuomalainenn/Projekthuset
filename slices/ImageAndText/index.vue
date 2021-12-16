<template>
  <section
    class="section h-60 md:h-80"
    :style="{
      'background-image':
        'url(https://projekthuset.eu/app/uploads/2018/04/projekthuset-meeting.jpg)',
    }"
  >
    <div class="overlay"></div>
    <div class="container">
      <div ref="text">
        <prismic-rich-text
          :field="slice.primary.text"
          class="text-1xl md:text-2xl text-white text font-bolder tracking-wide mb-16 md:mb-40 description"
        />
      </div>
    </div>
    <a
      :href="'#' + slice.primary.sliceName"
      class="bg-red-500 hover:bg-red-700 link"
    >
      Kontakta oss</a
    >
  </section>
</template>

<script>
export default {
  name: 'ImageAndText',
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
      this.$gsap.from(this.$refs.text, {
        y: 50,
        autoAlpha: 0,
        ease: 'Power1.easeInOut',
        duration: 1.7,
        scrollTrigger: {
          trigger: this.$refs.text,
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
  max-height: 20rem;
  background-size: cover;
  background-position: center;
  padding-bottom: 3rem;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  align-content: center;
  justify-content: flex-start;
}

.container {
  position: relative;
  clear: both;
  margin-top: 2rem;
  overflow: hidden;
  max-width: 80rem;
  text-align: left;
}

.link {
  color: #e6e4d6;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5em;
  width: fit-content;
  z-index: 10;
  padding: 0.7em 1.3em;
  overflow: hidden;
  font-weight: 700;
  border: 0;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(62, 64, 64, 0.9);
}

.description {
  z-index: 10;
}

a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
