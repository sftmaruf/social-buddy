import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDetail from './Components/PostsDetail/PostDetail';
import NavBar from './Components/NavBar/NavBar';
import InvalidPath from './Components/invalidpath/InvalidPath';

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/post/postDetails/:id">
            <PostDetail></PostDetail>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <InvalidPath></InvalidPath>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
