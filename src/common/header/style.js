import styled from "styled-components";
import logoPic from "../../static/logo.png";

export const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 56px;
  border: 1px solid #f0f0f0;
  background: #fff;
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
  cursor: pointer;
  .iconfont {
    vertical-align: top;
    font-size: 20px;
    margin-right: 5px;
  }
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
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  height: 38px;
  margin-top: 9px;
  .iconfangdajing {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    &.focused {
      background: #969696;
      color: #fff;
    }
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  margin-left: 20px;
  padding: 0 40px 0 20px;
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
  &.focused {
    width: 240px;
  }
  &.slide-enter {
    transition: all 0.3s ease-in-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.3s ease-in-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 260px;
  margin-top: 10px;
  margin-left: 20px;
  padding: 20px 20px 10px 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  box-sizing: border-box;
  background: #fff;
  .arrow{
    position: absolute;
    top: -20px;
    left: 20px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
`;
export const SearchInfoTitle = styled.div`
  float: left;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  &:hover{
    color: #333;
  }
  .iconfont{
    display: inline-block;
    margin-right: 3px;
    font-size: 12px;
    transition: all .3s;
    transform: center center;
  }
`;
export const SearchInfoList = styled.div`
  margin-top: 30px;
`;
export const SearchInfoItem = styled.a`
  display: inline-block;
  margin: 0 10px 8px 0;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
  &:hover{
    color: #333;
    border-color: #b4b4b4;
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
  cursor: pointer;
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
