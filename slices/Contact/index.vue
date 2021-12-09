<template>
  <section class="section">
    <div class="contact-title-container">
      <prismic-image :field="slice.primary.logo" class="contact-logo" />
      <prismic-rich-text
        :field="slice.primary.title"
        class="text-2xl tracking-wide"
      />
    </div>
    <prismic-rich-text :field="slice.primary.description" class="mb-14" />
    <div class="flex flex-wrap flex-row sm:justify-around">
      <div
        v-for="(item, i) in slice.items"
        :key="`slice-item-${i}`"
        class="flex flex-wrap flex-row items-center mb-16"
      >
        <prismic-image :field="item.image" class="rounded-full w-52" />
        <div class="text-container ml-8">
          <prismic-rich-text :field="item.name" class="font-medium text-xl" />
          <prismic-rich-text :field="item.jobTitle" class="font-medium" />

          <div class="contact-info-wrapper mt-10">
            <prismic-rich-text :field="item.text" class="font-bold" />
            <prismic-rich-text :field="item.phoneNumber" />
            <prismic-link :field="item.email">{{
              item.email.url
            }}</prismic-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
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
  background: hsla(53, 24%, 87%, 0.9);
  color: #111;
  text-align: center;
  padding: 1rem;
  text-align: left;
  padding-bottom: 3rem;
}

.contact-title-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
}

.contact-logo {
  width: 4rem;
  background-color: #3e4040;
  border-radius: 50%;
  padding: 0.5rem;
  margin-right: 1.5rem;
  fill: white;
}

.contact-info-wrapper {
}

.text-container {
}

a {
  color: red;
}
.title {
  margin-bottom: 2em;
}
</style>
