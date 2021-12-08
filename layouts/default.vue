<template>
  <div>
    <Nuxt />
    <Header />
    <Footer v-if="!$fetchState.pending" :data="footer" />
  </div>
</template>

<script>

export default {
  components: { },
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
