import MyComponent from '../../../../slices/Project';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Project'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"project","items":[{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Pariatur sunt ut commodo proident aliquip reprehenderit quis anim velit. Elit id veniam nostrud in nostrud incididunt. Laboris Lorem sunt ullamco deserunt commodo.","spans":[]}]},{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Sit elit tempor incididunt enim ut.","spans":[]}]},{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Non laboris cupidatat magna pariatur sunt pariatur eu et ad qui.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Optimize granular platforms","spans":[]}],"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Pariatur labore elit eiusmod eiusmod. Elit dolor adipisicing esse.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'