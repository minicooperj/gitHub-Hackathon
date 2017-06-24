import React from "react";
import Header from "./common/header";
import FilterStudents from "./common/filterStudents";
import Footer from "./common/footer";

const Main = props => (
  <div className="container-fluid">
    <Header />
    <FilterStudents />
    <Footer />
    {props.children}
  </div>
);
export default Main;
