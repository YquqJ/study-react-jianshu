import React, { Component } from "react";
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  render() {
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
            <CSSTransition
              in={this.state.focused}
              timeout={300}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? "focused" : ""}
                onFocus={() => {
                  this.handleInputFocus();
                }}
                onBlur={() => {
                  this.handleInputFocus();
                }}
              ></NavSearch>
            </CSSTransition>
            <i
              className={`iconfont iconfangdajing ${
                this.state.focused ? "focused" : ""
              }`}
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

  //处理输入框聚焦，展示动画
  handleInputFocus() {
    this.setState({
      focused: !this.state.focused
    });
  }
}

export default Header;
