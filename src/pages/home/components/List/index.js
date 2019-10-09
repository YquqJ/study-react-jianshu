import React,{ Component } from "react"
import { connect } from "react-redux"
import { actionCreators } from "../../store"
import { ListItem,ListContent,ListContentBottom,BottomBox,LoadMoreBtn } from "../../style"

class List extends Component{
  render(){
    const { list,currentPage,loadMoreList } = this.props
    return (
      <div>
        {
          list.map((item,index)=>{
            return (
              <ListItem key={index}>
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
        <LoadMoreBtn onClick={()=>{loadMoreList(currentPage)}}>阅读更多</LoadMoreBtn>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(["home","articleList"]),
  currentPage: state.getIn(["home","currentPage"])
})

const mapDispatch = (dispatch) => ({
  loadMoreList(page){
    dispatch(actionCreators.loadMoreList(page+1))
  }
})

export default connect(mapState,mapDispatch)(List)