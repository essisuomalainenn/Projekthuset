<template>
  <section :id="slice.primary.navigationName" class="section">
    <div class="project-title-container">
      <prismic-image :field="slice.primary.logo" class="project-logo" />
      <prismic-rich-text
        :field="slice.primary.title"
        class="title text-2xl tracking-wide"
      />
    </div>
    <prismic-rich-text :field="slice.primary.description" />
    <div ref="projects" class="h-96 block w-full">
      <ProjectSlider :items="slice.items" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'Project',
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
      this.$gsap.from(this.$refs.projects, {
        y: 50,
        autoAlpha: 0,
        ease: 'Power1.easeInOut',
        duration: 1.7,
        scrollTrigger: {
          trigger: this.$refs.projects,
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
  background: hsla(53, 24%, 87%, 0.9);
  color: #111;
  text-align: center;
  padding: 1rem;
  text-align: left;
}

.project-title-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
}
.project-logo {
  width: 4rem;
  background-color: #cb333b;
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 1.5rem;
  fill: white;
}

a {
  color: #111;
}
</style>
