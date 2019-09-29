import { fromJS } from "immutable"
import * as types from "./actionTypes"

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  let newState = {}
  const { type } = action
  switch (type) {
    case types.SEARCH_FOCUS:
      const { status } = action
      //immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      newState = state.set('focused', !status)
      break
    default:
      newState = state
      break
  }
  return newState
};
