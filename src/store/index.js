import { createStore, compose } from "redux";
import reducer from "./reducer";

//使用 Redux DevTools Extension， redux调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(compose)); //创建store仓库

export default store;
