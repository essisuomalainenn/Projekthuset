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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"activities","items":[{"activityName":[{"type":"paragraph","text":"Tempor sunt adipisicing excepteur nisi aliquip laboris cupidatat proident Lorem. Pariatur dolore adipisicing culpa proident ipsum non proident pariatur eiusmod eu esse nisi. Sint tempor proident laboris ex.","spans":[]}]},{"activityName":[{"type":"paragraph","text":"Eiusmod irure cillum do minim magna nisi fugiat commodo non sint incididunt esse adipisicing ipsum laboris. Irure nulla velit ad reprehenderit dolore proident esse nisi quis.","spans":[]}]},{"activityName":[{"type":"paragraph","text":"Culpa nulla consectetur qui consectetur ex nostrud deserunt tempor ea quis magna labore proident. Sint reprehenderit enim laboris eiusmod enim qui qui quis. Exercitation aliquip labore qui veniam deserunt irure ut magna dolore in aliquip.","spans":[]}]}],"primary":{"title":[{"type":"heading1","text":"Grow B2C relationships","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat dolor aliqua eu pariatur esse cillum sint excepteur. Tempor culpa qui culpa consectetur velit eu nisi. Cillum dolore sint consequat aliqua non sit enim sint amet deserunt voluptate excepteur excepteur mollit.","spans":[]}],"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?w=900&h=500&fit=crop"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
