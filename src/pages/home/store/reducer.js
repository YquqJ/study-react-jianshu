import { fromJS } from "immutable"

const defaultState = fromJS({
  topicList: [
    {
      id:1,
      title:'社会热点',
      imgUrl:'//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id:2,
      title:'手绘',
      imgUrl:'//upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
  ],
  articleList: [
    {
      id:1,
      title:"情侣之间要注意的事情！！！",
      desc:"相信很多人都是刚刚脱单没多久的，但不知道两个人在一起需要注意什么。那就让我来告诉你吧！ 1、不要吧ta当做出气筒 发泄自己的不满时应该注意方法",
      imgUrl:"//upload-images.jianshu.io/upload_images/16150151-e0a7a4528fc229a3.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      diamond:9.8,
      writer:"偶尔_5c4f",
      comment:12,
      like:56
    },
    {
      id:2,
      title:"这30条极美的文艺小短句，很有韵味",
      desc:"1.世界上所有的相遇都是久别重逢。 2.鲜花怒马少年时，一日看尽长安花。 3.愿岁月可回首，且以深情共白头。 4.草在结它的种子，风在摇它的叶子3.愿岁月可回首，且以深情共白头。 4.草在结它的种子，风在摇它的叶子",
      imgUrl:"//upload-images.jianshu.io/upload_images/14604148-642dbcdb2d55494d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
      diamond:84,
      writer:"凌千一",
      comment:3,
      like:27
    }
  ],
  recommendList: [
    {
      id:1,
      imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id:2,
      imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id:3,
      imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id:4,
      imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    },
  ]
})

export default (state = defaultState, action) => {
  const { type } = action
  switch(type){
    default:
      return state
  }
}