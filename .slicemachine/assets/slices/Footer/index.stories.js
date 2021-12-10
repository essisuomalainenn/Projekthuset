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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"footer","items":[],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Embrace cutting-edge relationships","spans":[]}],"description":[{"type":"paragraph","text":"Nostrud nulla incididunt minim mollit dolor veniam sint laboris id enim cupidatat nulla commodo. Ea sunt in nostrud. Officia labore elit minim ipsum enim aliquip est voluptate irure eiusmod aliqua eiusmod elit velit.","spans":[]}],"name":[{"type":"paragraph","text":"Sunt enim ullamco nulla enim magna. Eiusmod pariatur proident veniam laborum eu velit qui ipsum est excepteur velit sint excepteur. Dolor cillum Lorem pariatur culpa culpa ut proident qui velit.","spans":[]}],"euImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1579931794097-0ad001e51edb?w=900&h=500&fit=crop"},"wilsonText":[{"type":"paragraph","text":"Nisi amet adipisicing consequat velit velit dolore elit labore ex amet occaecat.","spans":[]}],"navigationName":"transition innovative platforms"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
