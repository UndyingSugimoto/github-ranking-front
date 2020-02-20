import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getUser, getUserDetail, getUserData } from "./external/GetUser";

ReactDOM.render(<App />, document.getElementById("root"));

console.log("start");
getUserData("WataruShimomura");
console.log("end");
