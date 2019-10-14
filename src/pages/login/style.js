import styled from "styled-components"

export const LoginWrapper = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f1f1f1;
`;
export const LoginBox = styled.div`
  width: 400px;
  margin: 60px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  box-sizing: border-box;
  input{
    width: 300px;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    box-sizing: border-box;
    &:first-child{
      margin-bottom: 20px;
    }
  }
  button{
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
    background: #187cb7;
  }
`;