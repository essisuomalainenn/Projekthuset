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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"footer","items":[],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Scale wireless infomediaries","spans":[]}],"description":[{"type":"paragraph","text":"Elit nulla veniam incididunt cillum irure ad cupidatat commodo sint quis. Commodo ex minim aliquip non cillum sit ad elit culpa ut. Labore non incididunt in excepteur ipsum cillum sint deserunt ea consectetur pariatur.","spans":[]}],"name":[{"type":"paragraph","text":"Incididunt ea reprehenderit nisi velit cupidatat. Voluptate veniam duis do ea.","spans":[]}],"euImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"wilsonText":[{"type":"paragraph","text":"Voluptate elit dolor aliquip voluptate do do reprehenderit. Commodo pariatur dolor in Lorem magna mollit proident magna.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
