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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"about","items":[],"primary":{"about-title":[{"type":"heading2","text":"Whiteboard vertical e-services","spans":[]}],"text":[{"type":"paragraph","text":"Reprehenderit officia dolore laboris eiusmod veniam do cillum magna sunt exercitation adipisicing nisi occaecat.","spans":[]}],"Verksamheter":{"link_type":"Web","url":"https://slicemachine.dev"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"navigationName":"brand magnetic mindshare","sliceName":"incentivize frictionless partnerships"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
