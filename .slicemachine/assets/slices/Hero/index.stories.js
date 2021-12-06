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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Enim voluptate consectetur culpa enim. Velit culpa id commodo sunt sint veniam exercitation eiusmod. Proident anim adipisicing dolor cillum id commodo ea voluptate sunt sit magna Lorem minim eu.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Adipisicing consequat magna dolore ipsum sunt minim aliquip commodo veniam pariatur nisi. Amet dolore sunt consectetur voluptate do tempor. Do do nostrud sit in velit.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587614295999-6c1c13675117?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Mollit occaecat Lorem ut eu eiusmod. Excepteur veniam ipsum pariatur amet. Lorem magna ad nulla laborum voluptate laboris qui aliquip.","spans":[]}]}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Mesh end-to-end infrastructures","spans":[]}],"text":[{"type":"paragraph","text":"Ipsum adipisicing officia eu pariatur anim anim eu eiusmod anim est eiusmod.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"menu-closed":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"menu-open":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=900&h=500&fit=crop"},"about-text":[{"type":"heading4","text":"Utilize cross-platform interfaces","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
