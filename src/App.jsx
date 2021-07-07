import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Redirect to="" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
