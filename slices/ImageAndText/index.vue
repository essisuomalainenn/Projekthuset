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
      <prismic-rich-text
        :field="slice.primary.text"
        class="text-1xl md:text-2xl text-white text font-bolder tracking-wide mb-16 md:mb-40 description"
      />
      <prismic-link
        :field="slice.primary.button"
        class="bg-red-500 hover:bg-red-700 mt-8 md:mt-16 link"
        >Kontakta oss</prismic-link
      >
    </div>
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
  padding-bottom: 3rem;
  text-align: center;
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: flex-start;
}

.container {
  position: relative;
  clear: both;
  margin-top: 2rem;
  overflow: hidden;
  max-width: 80rem;
  padding: 1rem;
  text-align: left;
}

.link {
  color: #e6e4d6;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5em;
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
