import axios from "axios"
import { fromJS } from "immutable"
import * as types from "./actionTypes"

const changeHomeData = (data) => ({
  type: types.CHANGE_HOME_DATA,
  ...data
})

const addArticleList = (data,nextPage) => ({
  type: types.ADD_ARTICLE_LIST,
  articleList: fromJS(data.articleList),
  nextPage
})

export const getHomeData = () => {
  return async (dispatch) => {
    const res = await axios.get("api/homeData.json")
    const data = res.data.data
    dispatch(changeHomeData(data))
  }
}

export const loadMoreList = (nextPage) => {
  return async (dispatch) => {
    const res = await axios.get(`api/homeData.json?page=${nextPage}`)
    const data = res.data.data
    dispatch(addArticleList(data,nextPage))
  }
}