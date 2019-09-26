import { combineReducers } from "redux";
import { reducer as headerReducer } from "../common/header/store";

//组合多个reducer，模块化管理
const reducer = combineReducers({
  header: headerReducer
});

export default reducer;
