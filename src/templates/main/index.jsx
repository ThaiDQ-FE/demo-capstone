import React from "react";
import { Route } from "react-router";
import NavBar from "./navBar";

function MainTemplate(props) {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
    </>
  );
}

const RouterMainTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <MainTemplate>
        <Component />
      </MainTemplate>
    </Route>
  );
};
export default RouterMainTemplate;
