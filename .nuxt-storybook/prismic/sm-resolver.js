import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/essisuomalainen/Desktop/Projekt/projekt-huset/slices/${sliceName}.vue`), import(`/Users/essisuomalainen/Desktop/Projekt/projekt-huset/slices/${sliceName}/index.vue`), import(`/Users/essisuomalainen/Desktop/Projekt/projekt-huset/slices/${sliceName}/index.js`), import(`/Users/essisuomalainen/Desktop/Projekt/projekt-huset/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
