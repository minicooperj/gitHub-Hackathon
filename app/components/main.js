import React from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
const Main = props => (
  <div>
    <Header />
    {props.children}
  </div>
);
export default Main;
