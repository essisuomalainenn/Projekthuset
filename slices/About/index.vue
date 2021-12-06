<template>
  <section class="section">
    <div class="about-title-container">
      <prismic-image :field="slice.primary.logo" class="about-logo" />
      <prismic-rich-text
        :field="slice.primary['about-title']"
        class="text-2xl tracking-wide"
      />
    </div>

    <prismic-rich-text :field="slice.primary.text" class="mb-8" />
    <prismic-link :field="slice.primary.Verksamheter" class=" bg-red-500 hover:bg-red-700 link"
      >Verksamheter</prismic-link
    >
  </section>
</template>

<script>
export default {
  name: 'About',
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
  background: hsla(53, 24%, 87%, 0.9);
  color: #111;
  text-align: center;
  padding: 1rem;
  text-align: left;
  padding-bottom: 4rem;
}

a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}

.about-title-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
}

.about-logo {
  width: 4rem;
  background-color: #3e4040;
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 1.5rem;
  fill: white;
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
</style>
