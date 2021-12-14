<template>
  <section
    :id="slice.primary.navigationName"
    class="section p-4 md:pb-0 md:pt-4 md:pl-4 md:pr-4"
    :style="{
      'background-image':
        'url(https://projekthuset.eu/app/uploads/2018/04/projekhuset-work.jpg)',
    }"
  >
    <div class="red-overlay"></div>
    <div class="container">
      <div class="activities-title-container">
        <prismic-image :field="slice.primary.logo" class="activity-logo" />
        <prismic-rich-text
          :field="slice.primary.title"
          class="text-2xl tracking-wide"
        />
      </div>
      <div class="">
        <div
          v-for="(item, i) in slice.items"
          :key="`slice-item-${i}`"
          class="flex flex-wrap"
        >
          <prismic-rich-text :field="item.activityName" class="list-decimal" />
        </div>
      </div>
      <rulerSvg class="ruler hidden md:block" />
    </div>
  </section>
</template>

<script>
import rulerSvg from '~/assets/linjalstreck.svg?inline'
export default {
  components: {
    rulerSvg,
  },
  name: 'Activities',
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
  position: relative;
  background-repeat: no-repeat;
  box-sizing: inherit;
  background-size: cover;
  background-position: center;
  text-align: center;
  width: 100%;
  height: fit-content;
  display: flex;
  color: white;
  align-content: center;
  justify-content: flex-start;
}

.ruler {
  width: 35vw;
  right: 5rem;
  
  fill: white;
  float: right;
  margin-right: 5rem;
  margin-bottom: -4.5rem;
}

.red-overlay {
  background-color: rgba(203, 51, 59, 0.9);
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}

.container {
  position: relative;
  clear: both;
  margin-top: 1rem;
  overflow: hidden;
  max-width: 80rem;
  margin-left: 0;
  margin-right: auto;
  text-align: left;
}

.activities-title-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
}

.activity-logo {
  width: 4rem;
  background-color: #e6e4d6;
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 1.5rem;
  fill: white;
}
li ul {
  list-style: disc;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>
