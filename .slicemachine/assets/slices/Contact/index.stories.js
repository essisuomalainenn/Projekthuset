import MyComponent from '../../../../slices/Contact';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Contact'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Facilitate dot-com infrastructures","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Deserunt occaecat cillum eu nulla.","spans":[]}],"text":[{"type":"paragraph","text":"Laboris veniam mollit veniam est anim in sunt consequat duis velit sit nulla sint esse. Aliquip proident est est exercitation enim.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Est incididunt Lorem pariatur aliquip officia. Tempor ex sit irure commodo enim sit commodo pariatur.","spans":[]}],"email":{"link_type":"Web","url":"https://slicemachine.dev"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Mesh virtual platforms","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Quis Lorem ut ut deserunt.","spans":[]}],"text":[{"type":"paragraph","text":"Sint irure enim duis nulla deserunt id. Pariatur ut laboris deserunt amet deserunt occaecat velit ex veniam anim voluptate tempor velit ea. Eiusmod laboris nostrud id eu sint velit dolore elit cillum nisi anim elit.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Aliqua adipisicing exercitation sint voluptate laborum. Et cillum incididunt dolore. Lorem culpa labore Lorem culpa velit qui adipisicing proident duis ipsum proident do proident.","spans":[]}],"email":{"link_type":"Web","url":"http://google.com"}}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Extend synergistic functionalities","spans":[]}],"description":[{"type":"paragraph","text":"Proident eiusmod officia ea sit. Duis ea laborum magna ea aliquip. Magna nostrud dolor laboris anim in id minim excepteur ut labore deserunt veniam nulla.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
