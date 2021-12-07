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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Dolore amet occaecat occaecat veniam nulla veniam est. Reprehenderit fugiat irure mollit tempor do veniam Lorem officia irure aliqua consequat nostrud fugiat ullamco. Cillum sint ipsum dolore sit duis ipsum nisi qui fugiat esse labore ex eu qui amet.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Quis enim consectetur aliquip cillum mollit ullamco est adipisicing eu ea.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Enim qui nostrud labore. Tempor dolor dolore magna nulla enim cillum ad exercitation eu sit eu.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Cillum magna excepteur tempor elit mollit et. Deserunt esse aute pariatur eu id consectetur elit aute aute cillum Lorem consectetur.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Minim et fugiat tempor do consequat quis voluptate aliquip fugiat do consectetur est elit proident. Aute fugiat culpa non ad consequat elit officia velit nostrud.","spans":[]}]}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Expedite visionary niches","spans":[]}],"text":[{"type":"paragraph","text":"Laborum cupidatat quis ipsum irure sint nulla id laborum cillum sunt ex. Exercitation elit eu veniam deserunt qui ut occaecat enim quis consequat. Lorem minim nisi qui laborum consequat commodo nostrud nisi ipsum veniam sint adipisicing tempor officia.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1531771686035-25f47595c87a?w=900&h=500&fit=crop"},"about-text":[{"type":"heading4","text":"Implement seamless infomediaries","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
