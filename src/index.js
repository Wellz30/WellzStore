import React from "react";
import reactDom from "react-dom";
import { Home } from "./views/Home"
import "./index.css";

reactDom.render(
    <Home/>,
    document.querySelector("#root")
)