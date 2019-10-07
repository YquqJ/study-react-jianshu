import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"; //如果这个action creator返回的是一个函数，就执行它，如果不是，就按照原来的next(action)执行

//使用 Redux DevTools Extension， redux调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
)); //创建store仓库

export default store;
