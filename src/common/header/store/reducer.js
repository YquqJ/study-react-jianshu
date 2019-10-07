import { fromJS } from "immutable"
import * as types from "./actionTypes"

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  const { type } = action
  switch (type) {
    case types.SEARCH_FOCUS:
      //immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
      return state.set('focused', !action.status)
    case types.CHANGE_LIST:
      const { data,totalPage } = action
      return state.merge({
        list: data,
        totalPage
      })
    case types.CHANGE_MOUSE:
      return state.set("mouseIn", action.status)
    case types.CHANGE_PAGE:
      return state.set("page", action.page)
    default:
      return state
  }
};
