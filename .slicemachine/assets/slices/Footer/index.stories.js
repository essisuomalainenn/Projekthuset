import MyComponent from '../../../../slices/Footer';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Footer'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"footer","items":[],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Incubate front-end partnerships","spans":[]}],"description":[{"type":"paragraph","text":"Est velit Lorem sunt duis deserunt veniam voluptate eiusmod. Labore cupidatat occaecat deserunt proident adipisicing qui nostrud aliqua culpa et sunt enim amet minim culpa. Occaecat laborum dolor velit amet.","spans":[]}],"name":[{"type":"paragraph","text":"Consequat sunt pariatur anim deserunt sint incididunt reprehenderit reprehenderit incididunt laboris proident in ipsum.","spans":[]}],"euImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"wilsonText":[{"type":"paragraph","text":"Pariatur fugiat consectetur exercitation.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
