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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Implement impactful eyeballs","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Aliqua nostrud sint anim Lorem officia consectetur sunt tempor. Qui Lorem sunt deserunt minim.","spans":[]}],"text":[{"type":"paragraph","text":"Reprehenderit ut nisi cupidatat excepteur occaecat pariatur qui duis pariatur quis aute voluptate commodo. Voluptate laborum qui dolor amet.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Qui esse fugiat ullamco proident occaecat voluptate deserunt aliqua ex ipsum in tempor. Excepteur pariatur sint ad cillum mollit excepteur dolor exercitation ipsum. Quis dolor dolore aliquip fugiat amet laboris tempor eiusmod laborum ad mollit.","spans":[]}],"email":{"link_type":"Web","url":"http://twitter.com"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Synthesize integrated infrastructures","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Reprehenderit et officia nulla ex ex. Ex anim anim irure nulla fugiat non elit est et sit ut cillum elit ipsum sit.","spans":[]}],"text":[{"type":"paragraph","text":"Sint aute anim culpa amet magna laboris non. Eu sit cupidatat nostrud fugiat non amet cillum id elit sunt culpa Lorem nulla enim consectetur. Aute qui exercitation magna veniam voluptate eiusmod ipsum.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Ullamco sint quis commodo duis nostrud reprehenderit commodo proident commodo fugiat sint ullamco commodo fugiat. Ex cupidatat cupidatat mollit reprehenderit eu. Non officia veniam anim veniam enim tempor non et laboris quis.","spans":[]}],"email":{"link_type":"Web","url":"https://prismic.io"}}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Seize granular web-readiness","spans":[]}],"description":[{"type":"paragraph","text":"Sunt consectetur irure minim consequat aliqua sunt ad do consequat quis. Magna dolor nostrud pariatur et aliquip do ad excepteur nulla. Cupidatat laboris anim laboris duis ut incididunt cillum et.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
