<template>
  <div class="overflow-auto">
    <Nuxt />
    <Header />
    <Footer v-if="!$fetchState.pending" :data="footer" />
  </div>
</template>

<script>
export default {
  async middleware({ store, $prismic }) {
    await store.dispatch('navigation/fetchMenu', $prismic)
  },
  data: () => ({
    footer: {},
    menu: {},
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

<style>
.rich-text ul li{
 @apply list-decimal;
}
section, .overlay {
    overflow-y: hidden;
}
</style>
