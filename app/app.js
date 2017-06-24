// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import routes from "./config/routes";
import filterStudents from "./components/common/filterStudents";
import Footer from "./components/common/footer";
import Profiles from "./components/Profiles";

ReactDOM.render(<Main />, document.getElementById("app"));
