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

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
);
const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>ここにフレンズのリストを書きます</p>
  </div>
);

export default App;
