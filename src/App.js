import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyle } from "./style";
import Header from "./common/header";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <GlobalStyle />
      </Provider>
    </div>
  );
}

export default App;
