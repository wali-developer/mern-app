import React from "react";
import ShowArticles from "./ShowArticles";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom";
import AddArticle from "./AddArticle";
import EditArticle from "./EditArticle";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
      <div style={{ width: "1000px", maxWidth: "100%", margin: "0px auto" }}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <ShowArticles />
            </Route>
            <Route path="/add">
              <AddArticle />
            </Route>
            <Route path="/edit">
              <EditArticle />
            </Route>
            <Route path="/user/register">
              <UserRegistration />
            </Route>
            <Route path="/login">
              <UserLogin />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default App;
