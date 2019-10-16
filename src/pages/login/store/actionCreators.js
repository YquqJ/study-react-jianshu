import * as types from "./constants"
import axios from "axios"

const changeLogin = () => ({
  type: types.CHANGE_LOGIN,
  status: true
})

export const login = (account,password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?account=${account}&password=${password}`).then(res => {
      dispatch(changeLogin())
    })
  }
}

export const logout = () => ({
  type: types.LOGOUT,
  status: false
})