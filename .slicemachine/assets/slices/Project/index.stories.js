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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"project","items":[{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Monetize scalable synergies","spans":[]}],"description":[{"type":"paragraph","text":"Pariatur aliquip minim anim et voluptate nostrud proident ad ex proident id qui eiusmod. Ut Lorem laboris est nisi eiusmod. Cupidatat eu consectetur proident non tempor consequat eiusmod.","spans":[]}]},{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"Title":[{"type":"heading2","text":"Implement open-source web services","spans":[]}],"description":[{"type":"paragraph","text":"Est tempor est et laboris est cupidatat.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Strategize sexy paradigms","spans":[]}],"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Velit exercitation deserunt minim sit magna et nostrud culpa ex laborum adipisicing occaecat. Laborum proident cillum aliqua officia minim do consectetur nulla id elit commodo ipsum sint culpa minim.","spans":[]}],"navigationName":"grow killer synergies"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
