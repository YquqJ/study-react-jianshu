import { fromJS } from "immutable"
import * as constants from "./constants"

const defaultState = fromJS({
  detail: null
})

export default (state = defaultState, action) => {
  const { type } = action
  switch(type){
    case constants.GET_DETAIL:
      return state.set("detail",fromJS(action.data))
    default:
      return state
  }
}