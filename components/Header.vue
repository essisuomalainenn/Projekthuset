<template>
  <div>
    <div
      class="fixed top-0 left-0 h-24 flex justify-between z-30 site-header"
    >
      <img src="@/assets/projekthuset_logo.png" alt="" class="h-16" />
      <menuClosed class="h-auto menu-closed" @click="toggleNav" />
    </div>
    <Navigation ref="mainNav" />
  </div>
</template>

<script>
import menuClosed from '~/assets/menuClosed.svg?inline'

export default {
  components: { menuClosed },
  props: ['data'],
  data() {
      return {
        isHidden: true,
      }
    },
    methods: {
    toggleNav() {
      this.$refs.mainNav.toggleNav()
    },
    }
}
</script>

<style>
.site-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0.666667rem;
  background: rgba(62, 64, 64, 0.5);
  padding: 1rem;
}

.menu-closed {
  width: 3.5rem;
  fill: white;
}
</style>
