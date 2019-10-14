import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
import { withRouter } from "react-router-dom"

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button
} from "./style";

/**
 * 若只有render部分，没有constructor、state，可以使用无状态组件，性能更高
 * const Header=(props)=>{
 *  return (...jsx)
 * }
 */
class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // 显示热门搜索区域
  getListArea = ()=>{
    const { focused, list, page, totalPage, mouseIn, handleMouseStatus,handleChangePage } = this.props
    const newList = list.toJS()
    const showList = []
    if(newList.length){
      for(let i=(page-1)*10; i< page*10;i++){
        newList[i]!==void 0 && showList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focused || mouseIn){
      return (
        <SearchInfo 
          onMouseEnter={()=>{handleMouseStatus(true)}}
          onMouseLeave={()=>{handleMouseStatus(false)}}
        >
          <div className="arrow" />
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
            <i ref={(spin)=>{this.spinIcon=spin}} className="iconfont iconspin"></i>
            换一批
          </SearchInfoSwitch>
          <SearchInfoList>
            {
              // newList.map((item)=>{
              //   return (
              //     <SearchInfoItem key={item}>{item}</SearchInfoItem>
              //   )
              // })
              showList
            }        
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }
  goToLogin(){
    this.props.history.push('/login');
  }
  render() {
    const { focused,list, handleInputFocus } = this.props;
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">
            <i className="iconfont iconzhinanzhen"></i>
            首页
          </NavItem>
          <NavItem className="left hhh">
            <i className="iconfont iconshoujixiazai"></i>
            下载App
          </NavItem>
          <NavItem className="right" style={{ fontSize: "15px" }} onClick={()=>{this.goToLogin()}}>
            登录
          </NavItem>
          <NavItem className="right">
            <i className="iconfont iconAa" style={{ fontWeight: "bold" }}></i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={300} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => {
                  handleInputFocus(focused,list)
                }}
                onBlur={() => {
                  handleInputFocus(focused)
                }}
              ></NavSearch>
            </CSSTransition>
            <i
              className={`iconfont iconfangdajing ${focused ? "focused" : ""}`}
            ></i>
            { this.getListArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="write">
            <i
              className="iconfont iconiconset0137"
              style={{ marginRight: "5px" }}
            ></i>
            写文章
          </Button>
          <Button className="register">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

//store中的state数据映射给props
const mapStateToProps = state => {
  return {
    // focused: state.get("header").get('focused')
    focused: state.getIn(['header','focused']),
    mouseIn: state.getIn(["header",'mouseIn']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage'])
  };
};
//方法映射给props，进行派发改变state
const mapDispatchToProps = dispatch => {
  return {
    //处理header输入框聚焦
    handleInputFocus(status,list) {
      const action = actionCreators.searchFocus(status)
      dispatch(action)
      list && list.size === 0 && dispatch(actionCreators.getList())
    },
    handleMouseStatus(status){
      dispatch(actionCreators.changeMouse(status))
    },
    handleChangePage(page,totalPage,spin){
      const originAngle = +spin.style.transform.replace(/[^0-9]/ig,'')
      spin.style.transform = `rotate(${originAngle+360}deg)`
      dispatch(actionCreators.changePage(page<totalPage?(page+1):1))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header)); //函数柯里化
