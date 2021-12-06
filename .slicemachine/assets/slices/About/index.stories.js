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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"about","items":[],"primary":{"about-title":[{"type":"heading2","text":"Orchestrate distributed e-business","spans":[]}],"text":[{"type":"paragraph","text":"Reprehenderit aliquip enim ad. Non eiusmod ipsum minim commodo velit ad dolor ex dolor.","spans":[]}],"Verksamheter":{"link_type":"Web","url":"https://prismic.io"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
