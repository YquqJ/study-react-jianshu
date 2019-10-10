import React,{ Component } from "react"
import { connect } from "react-redux"
import { actionCreators } from "./store"
import { HomeWrapper,HomeLeft,HomeRight } from "./style"
import Topic from "./components/Topic"
import List from "./components/List"
import Recommend from "./components/Recommend"
import Writer from "./components/Writer"
import Download from "./components/Download"
import { BackTop } from "./style"


class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }
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
        {
          this.state.show && <BackTop onClick={()=>{this.backTop()}}>顶部</BackTop>
        }
      </HomeWrapper>
    )
  }

  // render渲染完成之后调用
  componentDidMount(){
    this.props.getHomeData()
    this.bindEvent()
  }

  componentWillUnmount(){
    window.removeEventListener("scroll",()=>{})
    this.setState = () => {
      return
    }
  }

  bindEvent(){
    window.addEventListener("scroll",(e) => {
      this.showBackTopBtn()
    })
  }
  showBackTopBtn(){
    const top = document.documentElement.scrollTop
    this.setState({
      show: top > 500
    })
  }
  backTop(){
    const distance = document.documentElement.scrollTop
    let gone = distance
    const speed = distance / 30
    const timer = setInterval(()=>{
      gone -= speed
      window.scrollTo(0,gone)
      gone <=0 && clearInterval(timer)
    },10)
  }
}

const mapDispatch = (dispatch) => ({
  getHomeData(){
    dispatch(actionCreators.getHomeData())
  }
})

export default connect(null,mapDispatch)(Home)