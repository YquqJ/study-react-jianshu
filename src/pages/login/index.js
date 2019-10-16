import React,{ Component } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { actionCreators } from "./store"
import { LoginWrapper, LoginBox } from "./style"

class Login extends Component{
  render(){
    const { isLogin } = this.props
    if(!isLogin){
      return (
        <LoginWrapper>
          <LoginBox>
            {/* 若是styled-component，用innerRef */}
            <input placeholder="账号" type="text" ref={(account)=>{this.account=account}} />
            <input placeholder="密码" type="password" ref={(password)=>{this.password=password}} />
            <button onClick={ ()=> this.props.login(this.account,this.password) }>登录</button>
          </LoginBox>
        </LoginWrapper>  
      )
    }else{
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  isLogin: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem){
    const account = accountElem.value
    const password = passwordElem.value
    if(account === ""){
      alert("请输入用户名")
      return
    }
    if(password === ""){
      alert("请输入密码")
      return
    }
    dispatch(actionCreators.login(account,password))
  }
})

export default connect(mapState,mapDispatch)(Login)