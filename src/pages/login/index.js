import React,{ Component } from "react"
import { LoginWrapper, LoginBox } from "./style"

class Login extends Component{
  render(){
    return (
      <LoginWrapper>
        <LoginBox>
          <input placeholder="账号" type="text"/>
          <input placeholder="密码" type="password"/>
          <button>登录</button>
        </LoginBox>
      </LoginWrapper>  
    )
  }
}

export default Login