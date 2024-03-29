import { fromJS } from "immutable"
import * as types from "./actionTypes"

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [
    {
      id:1,
      imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
    },
    {
      id:2,
      imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },
    {
      id:3,
      imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },
    {
      id:4,
      imgUrl:"http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    },
  ],
  currentPage:1
})

export default (state = defaultState, action) => {
  const { type } = action
  switch(type){
    case types.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
      })
    case types.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.articleList),
        currentPage: action.nextPage
      })
    default:
      return state
  }
}