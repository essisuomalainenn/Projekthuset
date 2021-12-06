<template>
  <section
    class="section"
    :style="{
      'background-image':
        'url(https://projekthuset.eu/app/uploads/2018/04/projekthuset-meeting.jpg)',
    }"
  >
   <div class="overlay"></div>
    <prismic-rich-text :field="slice.primary.text" class="text-sm text-white text font-lighter description" />
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
  height: 20rem;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(62, 64, 64, 0.7);
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
