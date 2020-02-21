import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Top } from "./components/top/Top";
import { Detail } from "./components/detail/Detail";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Top} />
      <Route path="/detail" component={Detail} />
    </div>
  </BrowserRouter>
);

export default App;
