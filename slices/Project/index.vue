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
    <div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
      <prismic-image :field="item.projectImage" />
      <prismic-rich-text :field="item.Title" />
      <prismic-rich-text :field="item.description" />
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
