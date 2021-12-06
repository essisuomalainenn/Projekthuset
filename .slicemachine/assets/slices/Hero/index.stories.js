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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"hero","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Exercitation in ea pariatur quis officia commodo dolore. Ipsum cupidatat ea dolor ea culpa commodo minim ad do. Nulla esse ex duis culpa aliqua ad qui irure aliquip.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Minim nisi minim enim adipisicing amet nulla velit pariatur consequat esse consectetur in laboris consectetur ullamco. Ad qui aliqua non excepteur velit nostrud magna pariatur reprehenderit nulla qui labore.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Commodo amet anim non ex incididunt sit velit qui nostrud quis velit. Nisi dolore incididunt labore consequat nisi mollit quis sit ut tempor exercitation.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Dolore nostrud aliquip occaecat elit sunt et nisi culpa cupidatat est reprehenderit labore. Lorem nostrud do aute ad. Mollit eiusmod Lorem irure consectetur ad elit nisi cupidatat consectetur ut.","spans":[]}]},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"text":[{"type":"paragraph","text":"Esse cupidatat eiusmod dolor eu dolor ex Lorem enim commodo in. Reprehenderit aliquip consequat cillum sit in reprehenderit nisi ut. Officia laboris ea cillum proident.","spans":[]}]}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321578146-4c1ba445cc88?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Generate user-centric action-items","spans":[]}],"text":[{"type":"paragraph","text":"Enim duis nisi qui. Labore est nisi commodo laboris consectetur est deserunt qui. Deserunt sunt labore cillum fugiat laboris esse excepteur dolor.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"menu-closed":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=900&h=500&fit=crop"},"menu-open":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"},"about-text":[{"type":"heading4","text":"Facilitate holistic synergies","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
