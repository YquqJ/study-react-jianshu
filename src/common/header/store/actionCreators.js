import * as types from "./actionTypes"
import axios from "axios"
import { fromJS } from "immutable"

const changeList = (data) => ({
  type: types.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length/10)
})

export const searchFocus = (status) => ({
  type: types.SEARCH_FOCUS,
  status
})

export const changeMouse = (status) => ({
  type:types.CHANGE_MOUSE,
  status
})

export const changePage = (page) => ({
  type:types.CHANGE_PAGE,
  page
})

// 利用redux-thunk将异步数据请求操作放在action creator中
export const getList = () => {
  return (dispatch) => {
    axios.get("/api/headerList.json").then(res => {
      const data = res.data
      if(data.success){
        dispatch(changeList(data.data))
      }else{
        console.log("请稍后重试")
      }
    }).catch(err => {
      console.log("请求失败")
    })
  }
}