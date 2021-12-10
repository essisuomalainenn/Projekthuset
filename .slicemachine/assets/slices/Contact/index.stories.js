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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1591012911207-0dbac31f37da?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Disintermediate revolutionary content","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Minim esse voluptate laboris id reprehenderit irure cupidatat officia enim et cillum occaecat. Incididunt commodo sint esse nulla ex aliqua nulla amet labore ut irure quis esse sint dolor.","spans":[]}],"text":[{"type":"paragraph","text":"Esse incididunt commodo id duis. Do duis ea ipsum reprehenderit nulla deserunt magna.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Laboris ipsum ut deserunt do sunt exercitation mollit ut quis est occaecat excepteur do tempor cillum. Occaecat esse excepteur ipsum proident nisi enim cupidatat consectetur in non ipsum dolore culpa qui veniam.","spans":[]}],"email":{"link_type":"Web","url":"https://prismic.io"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Harness back-end systems","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Amet eu elit ad cillum. Reprehenderit non sint ullamco deserunt duis reprehenderit voluptate sunt elit mollit consequat consectetur.","spans":[]}],"text":[{"type":"paragraph","text":"Nisi aliqua ut cillum.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Dolore anim ad sit nisi aliqua et. Adipisicing ipsum aliqua veniam. Laborum nostrud mollit non laboris enim in.","spans":[]}],"email":{"link_type":"Web","url":"http://google.com"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Unleash viral synergies","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Lorem enim exercitation amet in incididunt enim fugiat proident velit ad do labore sunt mollit. Cupidatat occaecat ex ad cillum id et consequat.","spans":[]}],"text":[{"type":"paragraph","text":"Officia nostrud enim aliquip cillum velit minim ullamco sunt veniam qui non ut. Sint aute ipsum reprehenderit ipsum sit minim irure eiusmod nisi duis laboris exercitation ea tempor. Voluptate excepteur ipsum eiusmod commodo exercitation in deserunt amet dolor eu sunt.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Culpa deserunt ea anim. Aliqua cupidatat veniam pariatur incididunt pariatur. Mollit reprehenderit non mollit ipsum ea exercitation incididunt dolor aute.","spans":[]}],"email":{"link_type":"Web","url":"http://twitter.com"}},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Maximize dot-com action-items","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Occaecat quis dolore non ipsum elit Lorem.","spans":[]}],"text":[{"type":"paragraph","text":"Ut enim mollit proident ea pariatur qui et commodo anim fugiat proident ut voluptate occaecat sit.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Minim consectetur est quis amet irure exercitation tempor voluptate sint proident ullamco voluptate eu.","spans":[]}],"email":{"link_type":"Web","url":"https://slicemachine.dev"}}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Disintermediate 24/7 relationships","spans":[]}],"description":[{"type":"paragraph","text":"Mollit in labore irure voluptate.","spans":[]}],"navigationName":"integrate virtual applications"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
