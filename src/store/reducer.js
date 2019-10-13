import { combineReducers } from "redux-immutable"; //用redux-immutable库代替redux，将reducer中的数据统一被immutable管理
import { reducer as headerReducer } from "../common/header/store";
import { reducer as homeReducer } from "../pages/home/store";
import { reducer as detailReducer } from "../pages/detail/store";

//组合多个reducer，模块化管理
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
});

export default reducer;
