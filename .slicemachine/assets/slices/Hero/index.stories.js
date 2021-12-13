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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Aliquip sint aute quis incididunt velit adipisicing. Nisi consectetur Lorem anim elit ullamco irure culpa consectetur consectetur proident laboris deserunt. Et dolor velit voluptate.","spans":[]}],"sliceName":"leverage customized vortals"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642633279-1796119d5482?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Reprehenderit incididunt ipsum irure quis adipisicing exercitation magna quis officia aliquip magna eiusmod Lorem. Anim nisi ad qui aliquip nulla ut tempor do. Commodo quis est sunt qui labore dolore proident mollit enim.","spans":[]}],"sliceName":"incentivize viral portals"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Veniam esse exercitation anim laborum voluptate aliqua irure cillum ullamco.","spans":[]}],"sliceName":"generate turn-key platforms"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Commodo mollit ut ad adipisicing elit eiusmod ea culpa incididunt.","spans":[]}],"sliceName":"streamline end-to-end experiences"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Sunt commodo elit magna pariatur consequat consequat elit occaecat laboris aute reprehenderit aute.","spans":[]}],"sliceName":"extend cutting-edge channels"}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Disintermediate customized mindshare","spans":[]}],"text":[{"type":"paragraph","text":"Aliquip culpa in commodo. Adipisicing consequat et consequat cupidatat. Proident consectetur nostrud voluptate ipsum ex ad dolore.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1504198070170-4ca53bb1c1fa?w=900&h=500&fit=crop"},"about-text":[{"type":"heading4","text":"Syndicate visionary portals","spans":[]}],"sliceName":"drive cross-platform convergence"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
