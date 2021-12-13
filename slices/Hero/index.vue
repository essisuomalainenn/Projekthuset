<template>
  <section
    class="section"
    :style="{
      'background-image':
        'url(https://projekthuset.eu/app/uploads/2018/03/alexander-pemberton-95212-unsplash-1800x1200.jpg)',
    }"
  >
    <div class="overlay"></div>
    <div class="container">
      <div class="header-text-container mt-44 md:mt-60">
        <prismic-rich-text
          :field="slice.primary.title"
          class="text-3xl md:text-5xl text-white title"
        />
        <prismic-rich-text
          :field="slice.primary.text"
          class="text-sm md:text-base text-white text font-light"
        />
      </div>
    </div>
    <prismic-image :field="slice.primary.image" />
    <div class="container teasers content-center">
      <a :href="'#' + slice.primary.sliceName" class="about-link">
        <prismic-rich-text
          :field="slice.primary['about-text']"
          class="text-lg font-bold sm:m-8"
        />
        <arrow class="arrow text-center hidden sm:block" />
      </a>
      <div class="teaser-item-wrapper m-4 sm:mt-24">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="ikon m-4 sm:m-8"
        >
          <a :href="'#' + item.sliceName">
            <prismic-image
              class="ikon-svg shadow-xl fill-current text-white leading-7"
              :field="item.image"
            />
            <prismic-rich-text :field="item.text" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import arrow from '~/assets/arrow-down.svg?inline'
export default {
  components: { arrow },
  name: 'Hero',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
<style scoped>
.section {
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  box-sizing: inherit;
  background-size: cover;
  background-position: center;
}

.logo {
  transition: all 0.25s ease;
  width: auto;
  max-width: 200px;
  display: block;
}

.about-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu {
  filter: invert(100%);
  transition: all 0.25s ease;
  width: auto;
  height: 3rem;
  max-width: 200px;
  display: block;
}

.test {
  font-size: 2.5rem;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(62, 64, 64, 0.7);
}

.hover-background {
  background-color: #cb333b;
}

.site-header {
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  left: 0;
  padding: 0.666667rem;
  background: rgba(62, 64, 64, 0.5);
  padding: 0.5rem 0;
}

.header-text-container {
  margin-bottom: 3rem;
}

.teaser-item-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: center;
}

.container {
  position: relative;
  clear: both;
  overflow: hidden;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
}

.ikon {
  margin: 2rem;
}

.ikon-svg {
  fill: #cb333b;
  transition: all 0.25s ease-in-out;
  background-color: #e6e4d6;
  display: inline-block;
  border-radius: 50%;
  height: 8em;
  width: 8em;
  text-align: center;
  margin-bottom: 1.5rem;

  @apply hover:bg-red-500;
}


.title {
  font-family: Rubik, sans-serif;
  margin: 1em 0 0.5em;
}

.text {
  font-family: Rubik, sans-serif;
  line-height: 1.66;
  text-align: center;
}

.teasers {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
}

@media screen and (min-width: 64rem) {
  .container {
    padding: 0 2rem;
  }
}
</style>
