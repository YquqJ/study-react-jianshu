import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
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
  render() {
    const { focused, handleInputFocus } = this.props;
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
          <NavItem className="right" style={{ fontSize: "15px" }}>
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
                  handleInputFocus(focused);
                }}
                onBlur={() => {
                  handleInputFocus(focused);
                }}
              ></NavSearch>
            </CSSTransition>
            <i
              className={`iconfont iconfangdajing ${focused ? "focused" : ""}`}
            ></i>
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
    focused: state.header.focused
  };
};
//方法映射给props，进行派发改变state
const mapDispatchToProps = dispatch => {
  return {
    //处理header输入框聚焦
    handleInputFocus(status) {
      const action = {
        type: "changeInputFocus",
        status
      };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header); //函数柯里化
