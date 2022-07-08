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
            <Route path="/videos/:id" component={MainPage} />
            <Route path={"/upload"} component={UploadPage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
