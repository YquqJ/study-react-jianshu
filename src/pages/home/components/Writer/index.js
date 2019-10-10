import React,{ Component } from "react"
import { WriterWrapper } from "../../style"

class Writer extends Component{
  constructor(props){
    super(props)
    this.state = {
      list: [
        {
          id: 1,
          imgUrl: "//upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
          name: "无限猴子",
          num1: 52.8,
          num2: 3.8
        },
        {
          id: 2,
          imgUrl: "//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
          name: "梅拾璎",
          num1: 52.8,
          num2: 3.8
        },
        {
          id: 3,
          imgUrl: "//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
          name: "名贵的考拉熊",
          num1: 539.4,
          num2: 22.2
        },
        {
          id: 4,
          imgUrl: "//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
          name: "差点故事",
          num1: 52.8,
          num2: 3.8
        },
        {
          id: 5,
          imgUrl: "//upload.jianshu.io/users/upload_avatars/9234143/0819f188-bedf-4878-bbc7-bf08c163314e?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
          name: "十七楼的安素",
          num1: 52.8,
          num2: 3.8
        },
      ]
    }
  }
  render(){
    return (
      <WriterWrapper>
        <div className="title">推荐作者</div>
        {
          this.state.list.map(item => {
            return (
              <div className="list-item" key={item.id}>
                <div className="avatar">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="desc">写了{item.num1}k字，{item.num2}k喜欢</div>
                </div>
                <div className="follow-btn">关注</div>
              </div>  
            )
          })
        }
      </WriterWrapper>
    )
  }
}

export default Writer