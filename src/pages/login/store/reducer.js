import { fromJS } from "immutable"
import * as types from "./constants"

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  const { type } = action
  switch(type){
    case types.CHANGE_LOGIN:
      return state.set('login', action.status)
    case types.LOGOUT:
      return state.set("login", action.status)
    default:
      return state
  }
}