<template>
  <div
    class="overflow-hidden fixed inset-0 w-full h-full z-[200]"
    :class="[
      open ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none',
    ]"
  >
    <div
      v-for="(color, index) in colors"
      :key="'nav-bg-left-' + index"
      ref="left"
      class="w-1/2 h-full absolute bottom-0 left-0"
      :class="[colors[index], z[index]]"
    />
    <div
      v-for="(color, index) in colors"
      :key="'nav-bg-right-' + index"
      ref="right"
      class="w-1/2 h-full absolute bottom-0 right-0"
      :class="[colors[index], z[index]]"
    />

    <div class="w-full h-full absolute inset-0 z-50 flex items-center px-[6vw]">
      <div>
        <nav>
          <ul class="leading-snug">
            <li
              v-for="(item, index) in $store.state.navigation.navData.items"
              :key="'nav-item-' + index"
              class="text-[6vw]"
            >
              <prismic-link
                :field="item.link"
                class="
                  block
                  hover:text-brand-light
                  transition-colors
                  duration-200
                "
                >{{ item.title }}</prismic-link
              >
            </li>
          </ul>
        </nav>

        <nav>
          <ul class="leading-snug space-x-10 mt-10">
            <li
              v-for="(item, index) in $store.state.navigation.navData
                .secondaryItems"
              :key="'nav-item-' + index"
              class="inline-block text-[1.8vw]"
            >
              <prismic-link
                :field="item.link"
                class="
                  block
                  text-gray-400
                  hover:text-brand-light
                  transition-colors
                  duration-200
                "
                >{{ item.title }}</prismic-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
        this.closeAnimation()
      } else {
        this.openAnimation()
      }
    },
    hideNav() {
      this.open = false
    },
    showNav() {
      this.open = true
    },
  /*   openAnimation() {
      const gsap = this.$gsap
      gsap.fromTo(
        this.$refs.right,
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.07,
          onStart: this.showNav,
        }
      )
      gsap.fromTo(
        this.$refs.left,
        {
          yPercent: 110,
        },
        {
          yPercent: 0,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.07,
          delay: 0.07,
        }
      )
    },
    closeAnimation() {
      const gsap = this.$gsap
      gsap.to(this.$refs.left, {
        yPercent: 100,
        duration: 0.6,
        ease: 'power4.out',
        stagger: -0.07,
      })
      gsap.to(this.$refs.right, {
        yPercent: 100,
        duration: 0.6,
        ease: 'power4.out',
        stagger: -0.07,
        delay: 0.07,
        onComplete: this.hideNav,
      })
    }, */
  },
}
</script>

<style></style>