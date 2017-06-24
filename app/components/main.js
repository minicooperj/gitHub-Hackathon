import React from "react";
import Header from "./common/header";
import FilterStudents from "./common/filterStudents";
import Footer from "./common/footer";
import Profiles from "./common/Profiles";


const Main = props => (
  <div className="container-fluid">
    <Header />
    <FilterStudents />
    <Footer />
    <Profiles />
    {props.children}
  </div>
);
export default Main;
