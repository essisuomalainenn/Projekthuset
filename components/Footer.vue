<template>
  <footer v-if="data" ref="footer" class="w-full py-40 px-[6vw] antialiased footer">
    <div class="w-full flex mb-40">
      <div class="w-3/12"></div>
    </div>
    <div class="flex -mx-5">
      <prismic-rich-text :field="data.companyName" />
      <prismic-rich-text :field="data.address" />
      <prismic-rich-text :field="data.creditsText" />
    </div>
  </footer>
</template>

<script>
export default {
  props: ['data'],
 
}
</script>

<style>
    .footer {
        background-color: #3e4040;
    }
</style>