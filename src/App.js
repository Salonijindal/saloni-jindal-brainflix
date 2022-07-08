import React from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/video/:videoid" component={MainPage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
