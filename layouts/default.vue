<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data: () => ({
    footer: {},
  }),
  async fetch() {
    this.footer = await this.$prismic.api
      .getSingle('footer')
      .then((document) => {
        return document
      })
  },
}
</script>

<style></style>
