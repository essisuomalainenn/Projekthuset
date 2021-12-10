import MyComponent from '../../../../slices/Activities';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Activities'
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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"activities","items":[{"activityName":[{"type":"paragraph","text":"Officia et velit reprehenderit reprehenderit.","spans":[]}]},{"activityName":[{"type":"paragraph","text":"Occaecat quis consequat aliquip reprehenderit ad non nulla. Do et sit labore est pariatur duis veniam minim commodo et tempor dolor.","spans":[]}]},{"activityName":[{"type":"paragraph","text":"Amet enim officia reprehenderit aute mollit pariatur minim ea excepteur. Proident excepteur duis officia qui reprehenderit tempor.","spans":[]}]},{"activityName":[{"type":"paragraph","text":"Nostrud mollit aliqua Lorem ex ut enim et laborum ea. Do sit nostrud pariatur laboris magna esse. Incididunt deserunt consectetur duis sunt labore exercitation laboris magna anim est aute exercitation nostrud.","spans":[]}]},{"activityName":[{"type":"paragraph","text":"Fugiat labore voluptate adipisicing fugiat exercitation minim pariatur eu occaecat. Reprehenderit tempor consequat excepteur sit. Ipsum adipisicing nostrud elit anim.","spans":[]}]},{"activityName":[{"type":"paragraph","text":"Laborum tempor nulla ipsum ut nulla pariatur do nulla laborum et esse Lorem.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Productize one-to-one platforms","spans":[]}],"description":[{"type":"paragraph","text":"Commodo consectetur amet tempor minim veniam ad anim aliqua ad do cupidatat. Incididunt irure sunt mollit fugiat ea dolore.","spans":[]}],"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"},"navigationName":"transition intuitive architectures"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
