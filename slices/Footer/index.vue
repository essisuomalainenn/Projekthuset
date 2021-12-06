<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-image :field="slice.primary.logo" />
    <prismic-rich-text :field="slice.primary.description" />
    <prismic-rich-text :field="slice.primary.name" />
    <prismic-image :field="slice.primary.euImage" />
    <prismic-rich-text :field="slice.primary.wilsonText" />

  </section>
</template>

<script>
export default {
  name: "Footer",
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
  background: #f7f7f7;
  color: #111;
  padding: 4em;
  text-align: center;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>