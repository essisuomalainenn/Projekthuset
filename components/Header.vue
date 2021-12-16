<template>
  <div>
    <div class="fixed top-0 left-0 h-24 flex justify-between z-30 site-header">
      <a v-scroll-to="'#home'" href="#home"><img src="@/assets/projekthuset_logo.png" alt="" class="h-16" /></a>

      <button @click="open = !open" class="z-40 text-white relative w-12 h-12">
   
          <menuClosed class="absolute menu-closed w-12 h-12 transition-all transform duration-500" :class="open ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'"  />
          <menuOpen class="absolute menu-open w-12 h-12 transition-all transform duration-500" :class="!open ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'"  />
      </button>

      <transition
        enter-class="translate-x-full"
        enter-active-class="transition-all transform duration-1000"
        enter-to-class="translate-x-none"
        leave-class="translate-x-none"
        leave-active-class="transition-all transform duration-200"
        leave-to-class="translate-x-full"
      >
        <Navigation v-if="open" ref="mainNav" />
      </transition>
    </div>
  </div>
</template>

<script>
import menuClosed from '~/assets/menuClosed.svg?inline'
import menuOpen from '~/assets/close.svg?inline'

export default {
  components: { menuClosed, menuOpen },
  props: ['data'],
  data() {
    return {
      open: false,
    }
  },
  methods: {},
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
