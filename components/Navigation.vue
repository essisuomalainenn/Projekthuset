<template>
    <div
      class="overflow-hidden fixed inset-y-0 right-0 w-full h-full sm:w-1/2 z-30 menu"
    >
      <div
        class="w-full h-full p-14 absolute inset-y-0 right-0 z-50 flex items-center px-[6vw] menu"
      >
        <nav class="text-white">
          <ul>
            <li
              v-for="(item, index) in $store.state.navigation.menu.menulinks"
              :key="'nav-item-' + index"
              class="text-[6vw] nav-link"
            >
              <a v-scroll-to="'#' + item.sliceName" :href="'#' + item.sliceName">{{
                $prismic.asText(item.linkLabel)
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>


export default {

  data() {
    return {
      colors: ['bg-[#1F1F1F]', 'bg-[#1A1A1A]', 'bg-[#161616]'],
      z: ['z-10', 'z-20', 'z-30'],
    }
  },
}
</script>

<style scoped>
.menu {
  color: white;
  background-color: #101010;
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
