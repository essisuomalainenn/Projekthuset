<template>
  <div
    class="overflow-hidden fixed inset-y-0 right-0 w-full h-full sm:w-1/2 z-30 menu"
    :class="[
      open ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none',
    ]"
  >
    <div
      class="w-full h-full p-14 absolute inset-y-0 right-0 z-50 flex items-center px-[6vw] menu"
    >
      <menuOpen
        class="absolute inset-y-1 right-0 mt-3 menu-open"
        @click="toggleNav"
      />
      <nav class="text-white">
        <ul>
          <li
            v-for="(item, index) in $store.state.navigation.menu.menulinks"
            :key="'nav-item-' + index"
            class="text-[6vw] nav-link"
          >
           <a :href="'#'+ item.sliceName">{{$prismic.asText(item.linkLabel)}}</a>
          </li>
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
  background-color: #101010;
}

.menu:hover {

}

li {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.nav-link:hover {
    color: #cb333b;
}
.menu-open {
  margin-right: 1rem;
  fill: white;
}
</style>
