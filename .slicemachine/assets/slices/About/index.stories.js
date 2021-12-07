import MyComponent from '../../../../slices/About';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/About'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"about","items":[],"primary":{"about-title":[{"type":"heading2","text":"Expedite efficient applications","spans":[]}],"text":[{"type":"paragraph","text":"Qui velit culpa dolore in aute ipsum pariatur reprehenderit velit eu exercitation anim ex sunt labore. Sunt nisi ea dolor non. Laboris aute magna pariatur est proident.","spans":[]}],"Verksamheter":{"link_type":"Web","url":"http://twitter.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1606248897732-2c5ffe759c04?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
