<template>

  <div>
    <div
      class="
        fixed
        top-0
        left-0
        w-full
        px-12
        py-10
        flex
        justify-between
        items-center
        z-[1000]
        mix-blend-difference
      "
    >
      <nuxt-link to="/"><menuClosed class="w-16 h-auto" /></nuxt-link>
      <div
        class="
          w-[30px]
          h-[50px]
          flex flex-col
          justify-center
          items-center
          cursor-pointer
          space-y-[10px]
        "
        @click="toggleNav"
      >
      </div>
    </div>
  </div>
</template>

<script>
import menuClosed from '~/assets/menuClosed.svg';

export default {
  components: { menuClosed },
  methods: {
    toggleNav() {
      this.$refs.mainNav.toggleNav()
    },
  },
}
</script>

<style></style>