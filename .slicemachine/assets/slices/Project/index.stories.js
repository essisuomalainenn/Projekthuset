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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"project","items":[{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Non consequat amet mollit non amet pariatur reprehenderit. Veniam fugiat non ad qui officia sunt esse mollit reprehenderit fugiat duis ex.","spans":[]}]},{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Nulla aute irure commodo non pariatur enim quis velit aliqua quis ad. Consequat voluptate consectetur sunt nulla ut eu proident id duis quis laboris proident ullamco incididunt voluptate.","spans":[]}]},{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Sit pariatur aute nisi laborum ut tempor Lorem occaecat sint cupidatat dolore est ut.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Strategize impactful web-readiness","spans":[]}],"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Magna reprehenderit eu exercitation reprehenderit qui culpa do anim. Consectetur aliqua officia culpa occaecat culpa dolor id incididunt nulla pariatur labore aliquip consectetur nulla.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
