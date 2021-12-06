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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"about","items":[],"primary":{"about-title":[{"type":"heading2","text":"Deploy viral supply-chains","spans":[]}],"text":[{"type":"paragraph","text":"Consectetur consequat et est elit voluptate proident sunt laboris aute voluptate ex. Esse irure exercitation exercitation mollit incididunt qui.","spans":[]}],"Verksamheter":{"link_type":"Web","url":"http://google.com"},"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
