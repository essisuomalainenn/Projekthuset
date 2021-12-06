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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Mollit laborum nisi ea exercitation. Esse commodo velit enim eu ut commodo in exercitation consectetur deserunt commodo nisi quis adipisicing.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600804931749-2da4ce26c869?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Voluptate eu voluptate consequat anim voluptate consectetur aliquip aute occaecat cupidatat non dolore ut. Tempor officia occaecat quis dolor. Cupidatat pariatur incididunt commodo tempor sit sint excepteur excepteur ad anim.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Consequat deserunt proident nostrud pariatur deserunt reprehenderit sint cupidatat culpa culpa ea laborum velit. Ea aute et qui nisi deserunt officia magna magna aliqua elit. Sit voluptate fugiat Lorem do sunt ipsum qui esse aliqua magna dolor adipisicing ullamco eiusmod.","spans":[]}]}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Leverage cutting-edge channels","spans":[]}],"text":[{"type":"paragraph","text":"Cillum minim aliquip pariatur. Dolor irure non magna eiusmod.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"menu-closed":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"menu-open":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"about-text":[{"type":"heading4","text":"Productize clicks-and-mortar web-readiness","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
