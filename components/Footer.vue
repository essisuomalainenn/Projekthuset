<template>
  <footer v-if="data" ref="footer" class="footer">
    <div class="flex flex-row flex-wrap sm:p-16">
      <companyLogo class="company-logo" />
      <div class="">
        <prismic-rich-text
          :field="data.data.companyName"
          class="pl-4 font-extrabold"
        />
        <prismic-rich-text :field="data.data.address" class="pl-4" />
      </div>

      <img
        src="@/assets/EUlogo_v_mono.png"
        alt="European Union Logo"
        class="ml-4 h-24"
      />
      <div class="credits-container flex">
        <prismic-rich-text :field="data.data.creditsText" class="pl-4" />
        <a href="https://wilsoncreative.se/">&nbsp; Wilson Creative</a>
      </div>
    </div>
  </footer>
</template>

<script>
import companyLogo from '~/assets/logo_2.svg?inline'
export default {
  components: { companyLogo },
  props: ['data'],
}
</script>

<style scoped>
.footer {
  background-color: #3e4040;
  color: #e6e4d6;
  padding-bottom: 3rem;
  padding-top: 1rem;
}
a {
  color: red;
}
.company-logo {
  height: 10rem;
  max-width: 100%;
  fill: #e6e4d6;
}

</style>
