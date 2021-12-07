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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"project","items":[{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1576662712957-9c79ae1280f8?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Mollit deserunt velit non ex reprehenderit aliqua laboris nulla velit cillum est occaecat. Duis veniam aliquip sunt. Sunt magna labore Lorem aliqua.","spans":[]}]},{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Anim ullamco culpa eu pariatur sunt irure adipisicing deserunt nostrud quis aute amet dolor. Enim et nisi ullamco ad nulla cillum ut proident eiusmod consectetur commodo nostrud laborum ad in. Eu adipisicing tempor laborum eu nostrud.","spans":[]}]},{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Deserunt qui exercitation irure qui reprehenderit mollit non adipisicing ut nisi elit dolore velit est excepteur. Amet consequat duis laboris duis magna non irure Lorem velit non.","spans":[]}]},{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Fugiat cupidatat commodo velit quis. Proident officia proident non officia sunt veniam dolore culpa occaecat occaecat.","spans":[]}]},{"projectImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Ea deserunt exercitation qui adipisicing aliqua minim dolore cillum deserunt ipsum pariatur commodo qui occaecat. Consequat adipisicing est officia nulla proident amet magna labore sunt incididunt enim commodo.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Deploy e-business solutions","spans":[]}],"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"description":[{"type":"paragraph","text":"Dolor excepteur labore laborum ipsum.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
