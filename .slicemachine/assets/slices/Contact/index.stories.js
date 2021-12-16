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
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"contact","items":[{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Expedite cross-platform platforms","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Dolor mollit do veniam laboris eiusmod consequat consectetur commodo pariatur qui fugiat fugiat. Deserunt ut amet esse consequat dolor esse sunt proident incididunt.","spans":[]}],"text":[{"type":"paragraph","text":"Ullamco reprehenderit tempor eiusmod reprehenderit fugiat exercitation do adipisicing occaecat aliqua pariatur amet sint officia ad.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Anim et mollit aute deserunt nostrud non ullamco pariatur do aliquip laboris in.","spans":[]}],"email":"brand 24/365 partnerships"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Repurpose front-end infrastructures","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Quis mollit et exercitation ex dolore fugiat dolor culpa irure. Tempor sint laboris sunt commodo aliquip voluptate adipisicing labore mollit consectetur elit aute cillum.","spans":[]}],"text":[{"type":"paragraph","text":"Veniam ex dolore reprehenderit dolor ut reprehenderit non cupidatat nulla labore ullamco laboris aliqua anim.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Labore pariatur sunt consectetur culpa anim. Ex et occaecat sunt sunt ad mollit commodo nulla cupidatat veniam minim. Consequat exercitation nostrud occaecat nisi dolore aliqua ullamco eu nulla.","spans":[]}],"email":"synergize end-to-end portals"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Aggregate bleeding-edge e-tailers","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Occaecat cillum ipsum anim. Enim eu non excepteur esse cupidatat mollit anim excepteur labore veniam esse ullamco.","spans":[]}],"text":[{"type":"paragraph","text":"Dolore tempor ex ex dolore commodo deserunt adipisicing ut occaecat magna sit exercitation incididunt magna.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Ipsum ullamco dolore non proident culpa officia. Consequat ipsum tempor eu amet officia anim enim officia dolor nostrud reprehenderit aute.","spans":[]}],"email":"reinvent out-of-the-box functionalities"},{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&h=500&fit=crop"},"name":[{"type":"heading6","text":"Facilitate end-to-end models","spans":[]}],"jobTitle":[{"type":"paragraph","text":"Sint commodo pariatur tempor dolore consequat esse voluptate. Quis enim cupidatat fugiat.","spans":[]}],"text":[{"type":"paragraph","text":"Dolore ad ut ut sunt. Exercitation proident elit velit eu in ullamco.","spans":[]}],"phoneNumber":[{"type":"paragraph","text":"Id aliqua eu elit ut aliquip culpa fugiat nisi culpa occaecat dolore fugiat quis irure.","spans":[]}],"email":"repurpose back-end paradigms"}],"primary":{"logo":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587840171670-8b850147754e?w=900&h=500&fit=crop"},"title":[{"type":"heading1","text":"Grow rich ROI","spans":[]}],"description":[{"type":"paragraph","text":"Elit labore amet pariatur dolor voluptate dolor excepteur. Consequat cupidatat cupidatat sint id ea reprehenderit aliquip veniam magna. Dolore anim do veniam ad aliquip.","spans":[]}],"navigationName":"deliver real-time networks"},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
