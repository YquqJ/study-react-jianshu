import React,{ Component } from "react"
import { connect } from "react-redux"
import { ListItem,ListContent,ListContentBottom,BottomBox } from "../../style"

class List extends Component{
  render(){
    const { list } = this.props
    return (
      <div>
        {
          list.map((item)=>{
            return (
              <ListItem key={item.get("id")}>
                <ListContent>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc text-line2">{item.get("desc")}</p>
                  <ListContentBottom>
                    <BottomBox style={{color:'#ea6f5a'}}>
                      <i className="iconfont iconweibiaoti--fuben-" />
                      {item.get("diamond")}
                    </BottomBox>
                    <BottomBox className="writer">
                    {item.get("writer")}
                    </BottomBox>
                    <BottomBox>
                      <i className="iconfont icontubiaozhizuo-" />
                      {item.get("comment")}
                    </BottomBox>
                    <BottomBox>
                      <i className="iconfont iconxihuan1" />
                      {item.get("like")}
                    </BottomBox>
                  </ListContentBottom>
                </ListContent>
                <img className="list-img" src={item.get("imgUrl")} alt="" />
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home","articleList"])
})

export default connect(mapState)(List)