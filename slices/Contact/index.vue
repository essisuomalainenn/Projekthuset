<template>
  <section :id="slice.primary.navigationName" class="section">
    <div class="contact-title-container">
      <prismic-image :field="slice.primary.logo" class="contact-logo" />
      <prismic-rich-text
        :field="slice.primary.title"
        class="text-2xl tracking-wide"
      />
    </div>
    <prismic-rich-text :field="slice.primary.description" class="mb-14" />
    <div class="flex flex-wrap flex-row sm:justify-around">
      <div v-for="(item, i) in slice.items"
      ref="contact"
        :key="`slice-item-${i}`"
        class="flex flex-wrap flex-row items-center mb-16"
      >
        <prismic-image :field="item.image" class="rounded-full w-52" />
        <div class="text-container ml-2 mt-4 md:ml-8">
          <prismic-rich-text :field="item.name" class="font-medium text-xl" />
          <prismic-rich-text :field="item.jobTitle" class="font-medium" />

          <div class="contact-info-wrapper mt-10">
            <prismic-rich-text :field="item.text" class="font-bold" />
            <prismic-rich-text :field="item.phoneNumber" />
           <a :href="'mailto:'+ item.email">{{ item.email }}</a>
          </div>
        </div>
      </div>
      <houseSvg class="houseSvg hidden md:block" />
    </div>
  </section>
</template>

<script>
import houseSvg from '~/assets/hus.svg?inline'
export default {
   name: 'Contact',
  components: {
    houseSvg,
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
      this.$gsap.from(this.$refs.contact, {
        y: 50,
        autoAlpha: 0,
        ease: 'Power1.easeInOut',
        duration: 1.7,
        scrollTrigger: {
          trigger: this.$refs.contact,
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
  padding-bottom: 3rem;
  overflow: hidden;
}

.contact-title-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
}

.contact-logo {
  width: 4rem;
  background-color: #c1353c;
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 1.5rem;
  fill: white;
}

.houseSvg {
  width: 40rem;
  float: right;
  position: absolute;
  top: -5rem;
  fill: #c1353c;
  margin-right: -100vw;
  bottom: 3rem;
  z-index: -99;
}

a {
  color: red;
}
.title {
  margin-bottom: 2em;
}
</style>
