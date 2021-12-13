<template>
  <div
    v-swiper="swiperOption"
    class="ml-auto h-auto relative mt-16"
    :loadtheme="false"
  >
    <div class="swiper-wrapper">
      <div
        v-for="(item, i) in items"
        :key="`slice-item-${i}`"
        class="swiper-slide h-72"
      >
        <prismic-image :field="item.projectImage" class="project-image" />
        <prismic-rich-text :field="item.Title" class="text-lg bolder p-2 bg-gray-500 text-center text-white w-auto" />
      </div>
    </div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  directives: {
    swiper: directive,
  },
  props: ['items'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: -10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
}
</script>

<style scoped>
.swiper-button-prev {
  cursor: url('~/assets/left-arrow.png') 37 37, auto;
  color: white;
}
.swiper-button-next {
  cursor: url('~/assets/next.png') 37 37, auto;
  color: white;
}
.project-image {
  height: 18rem;
  width: auto;
}
</style>
