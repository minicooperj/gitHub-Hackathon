import React from "react";
import Header from "./common/header";
const Main = props => (
  <div>
    <Header />
    {props.children}
  </div>
);
export default Main;
