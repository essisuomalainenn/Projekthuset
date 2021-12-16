import MyComponent from '../../../../slices/Activities';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Activities'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"activities","items":[{"activityName":[{"type":"paragraph","text":"Elit aute ex reprehenderit nulla deserunt occaecat veniam culpa ut consectetur. Proident ex id aliquip ea ut ex culpa in deserunt elit aliqua. Quis ex id dolore culpa proident pariatur culpa Lorem aliqua culpa.","spans":[]}]},{"activityName":[{"type":"paragraph","text":"Ea nisi in sint aute adipisicing reprehenderit nisi cillum consectetur. Laboris Lorem consequat in non labore irure tempor sunt. Duis aliquip adipisicing amet velit culpa commodo amet ex anim reprehenderit nostrud aute voluptate mollit do.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Harness scalable methodologies","spans":[]}],"description":[{"type":"paragraph","text":"Cillum sint labore occaecat minim officia laborum deserunt laboris deserunt sunt consequat reprehenderit consequat sit quis. Eiusmod ut laboris dolore ex incididunt.","spans":[]}],"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"navigationName":"drive B2C mindshare","activitiesContent":[{"type":"paragraph","text":"Quis occaecat Lorem enim consectetur. Elit et anim nostrud commodo est nisi.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
