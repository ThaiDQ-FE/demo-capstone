import logo from "./logo.svg";
import "./App.css";
import LoginGoogle from "./components/login";
import Home from "./pages/main/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DemoLoginGoogle from "./pages/main/demoLogin";
import DemoStoreImageFirebase from "./pages/main/demoStoreImage";
import { mainRouter } from "./configs/router";
import RouterMainTemplate from "./templates/main";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };
  return (
    <>
      <BrowserRouter>
        <Switch>{renderMainRouter()}</Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
