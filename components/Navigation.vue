<template>
  <div
    class="overflow-hidden fixed inset-y-0 right-0 w-full h-full sm:w-1/2 z-[200]"
    :class="[
      open ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none',
    ]"
  >
    <div
      class="w-full h-full p-14 absolute bg-black inset-y-0 right-0 z-50 flex items-center px-[6vw]"
    >
      <menuOpen
        class="absolute inset-y-1 right-0 mt-3 menu-open"
        @click="toggleNav"
      />
      <nav class="menu">
        <ul class="sm:text-6xl">
          <li><nuxt-link to="activities">Verksamheter </nuxt-link></li>
          <li><nuxt-link to="projects">Projekt</nuxt-link></li>
          <li><nuxt-link to="contact">Kontakt</nuxt-link></li>
          <li><nuxt-link to="about">Om projekthuset</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import menuOpen from '~/assets/close.svg?inline'

export default {
  components: { menuOpen },

  data() {
    return {
      colors: ['bg-[#1F1F1F]', 'bg-[#1A1A1A]', 'bg-[#161616]'],
      z: ['z-10', 'z-20', 'z-30'],
      open: false,
    }
  },
  methods: {
    toggleNav() {
      if (this.open) {
        this.open = false
      } else {
        this.open = true
      }
    },
  },
}
</script>

<style scoped>
.menu {
  color: white;
}

li {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.menu-open {
  margin-right: 1rem;
  fill: white;
}
</style>
