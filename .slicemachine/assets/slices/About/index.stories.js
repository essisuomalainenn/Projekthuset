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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"about","items":[],"primary":{"about-title":[{"type":"heading2","text":"Syndicate innovative models","spans":[]}],"text":[{"type":"paragraph","text":"Laborum labore excepteur Lorem Lorem nostrud anim laboris dolore ipsum nostrud cillum Lorem esse laborum sunt. Sunt in proident adipisicing sint nostrud. Adipisicing cupidatat sunt in reprehenderit amet incididunt ullamco.","spans":[]}],"Verksamheter":{"link_type":"Web","url":"https://prismic.io"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
