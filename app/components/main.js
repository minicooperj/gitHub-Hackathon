import React from "react";
import Header from "./common/header";
import FilterStudents from "./common/filterStudents";
import Footer from "./common/footer";

const Main = props => (
  <div className="container-fluid">
    <Header />
<<<<<<< HEAD
    <FilterStudents />
    <Footer />
=======
    <filterStudents />
    <Profiles />
>>>>>>> e4a88a549ced0a772729d75b7e18d29f6206ee00
    {props.children}
  </div>
);
export default Main;
