import React from "react";
import Header from "./common/header";
const Main = props => (
  <div>
    <Header />
    <filterStudents />
    <Profiles />
    {props.children}
  </div>
);
export default Main;
