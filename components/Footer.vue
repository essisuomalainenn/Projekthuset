<template>
  <footer v-if="data" ref="footer" class="footer">
    <div>
      <companyLogo class="company-logo" />
      <prismic-rich-text :field="data.data.companyName" class="pl-4 font-extrabold" />
      <prismic-rich-text :field="data.data.address" class="pl-4"/>
      <img src="@/assets/EUlogo_v_mono.png" alt="" class="eu-logo" />
      <prismic-rich-text :field="data.data.creditsText" class="pl-4"/>
    </div>
  </footer>
</template>

<script>
import companyLogo from '~/assets/logo_2.svg?inline';
export default {
  components: { companyLogo },
  props: ['data'],
}
</script>

<style>
.footer {
  background-color: #3e4040;
  color: #e6e4d6;
}

.company-logo {
  height: 10rem;
  max-width: 100%;
  fill: #e6e4d6;
}
.eu-logo {
  height: 6rem;
  margin: 1rem;
}
</style>
