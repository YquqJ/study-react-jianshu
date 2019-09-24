import styled from "styled-components";
import logoPic from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
  href: "/"
})`
  display: block;
  position: absolute;
  top: 0;
  left: 30px;
  height: 56px;
  width: 100px;
  background-image: url(${logoPic});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-right: 30px;
`;
export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  color: #333;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  margin-left: 20px;
  margin-top: 9px;
  padding: 0 20px;
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  line-height: 38px;
  border-radius: 19px;
  outline: none;
  border: none;
  background: #eee;
  &::placeholder {
    color: #999;
  }
`;
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
  height: 56px;
`;
export const Button = styled.div`
  margin: 9px 15px 0;
  float: right;
  font-size: 15px;
  line-height: 24px;
  border: 1px solid #ec6149;
  border-radius: 20px;
  padding: 6px 12px;
  box-sizing: border-box;
  text-align: center;
  &.register {
    margin-right: 0;
    width: 80px;
    color: #ec6149;
  }
  &.write {
    width: 100px;
    background: #ea6f5a;
    color: #fff;
  }
`;
