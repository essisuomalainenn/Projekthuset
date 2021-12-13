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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Id tempor id ex ex proident fugiat cillum laboris cillum. Reprehenderit reprehenderit eu excepteur velit aliquip quis sit ea sint fugiat. Ut officia magna exercitation quis eiusmod.","spans":[]}],"sliceName":"architect open-source channels"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1607582278043-57198ac8da43?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Nisi sunt ad labore. Ad consectetur pariatur nisi cillum magna cillum velit ullamco pariatur non consectetur.","spans":[]}],"sliceName":"incubate viral partnerships"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Exercitation aliquip magna Lorem ex sunt exercitation. Dolor tempor est velit elit.","spans":[]}],"sliceName":"aggregate cutting-edge eyeballs"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Enim dolor aute fugiat sint labore occaecat exercitation dolor dolore ea consequat.","spans":[]}],"sliceName":"optimize world-class action-items"}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Strategize holistic mindshare","spans":[]}],"text":[{"type":"paragraph","text":"Reprehenderit laboris esse est dolor irure esse Lorem.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"about-text":[{"type":"heading4","text":"Enhance global metrics","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
