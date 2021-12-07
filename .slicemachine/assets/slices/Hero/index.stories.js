import MyComponent from '../../../../slices/Hero';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Hero'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Lorem tempor do magna est laborum deserunt officia ullamco. Ad dolore veniam adipisicing. Eu Lorem deserunt proident Lorem culpa incididunt laboris do quis non adipisicing consequat.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278038-6bebbd4d7b72?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Ea cillum sint dolor nulla sit ad in ex. Nostrud duis consequat officia enim adipisicing occaecat occaecat tempor tempor eu sit.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Consequat minim exercitation cupidatat est aliqua aute proident est. Veniam tempor ipsum do ullamco eiusmod sit officia irure. Elit voluptate esse sunt qui.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Voluptate et magna Lorem aliquip nisi Lorem sit esse dolore pariatur non aliqua occaecat nulla. Mollit laboris sint nulla tempor laborum veniam deserunt nulla irure ipsum do velit.","spans":[]}]}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Utilize dot-com eyeballs","spans":[]}],"text":[{"type":"paragraph","text":"Culpa proident laboris dolor cupidatat dolore cupidatat laboris cupidatat ullamco esse aliqua culpa ullamco.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"about-text":[{"type":"heading4","text":"Harness plug-and-play e-services","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
