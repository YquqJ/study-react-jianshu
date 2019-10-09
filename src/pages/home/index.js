import React,{ Component } from "react"
import { connect } from "react-redux"
import { actionCreators } from "./store"
import { HomeWrapper,HomeLeft,HomeRight } from "./style"
import Topic from "./components/Topic"
import List from "./components/List"
import Recommend from "./components/Recommend"
import Writer from "./components/Writer"
import Download from "./components/Download"


class Home extends Component{
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4732/5d0b947b56c13a3d5e96fe8fe77c66079deed975.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="/" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Download />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }

  // render渲染完成之后调用
  componentDidMount(){
    this.props.getHomeData()
  }
}

const mapDispatch = (dispatch) => ({
  getHomeData(){
    dispatch(actionCreators.getHomeData())
  }
})

export default connect(null,mapDispatch)(Home)