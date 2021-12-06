import MyComponent from '../../../../slices/ImageAndText';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ImageAndText'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"image_and_text","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"text":[{"type":"heading4","text":"Whiteboard 24/7 communities","spans":[]}],"button":{"link_type":"media","url":"https://source.unsplash.com/daily"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
