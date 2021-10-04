import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Blogs from "./components/Blogs/Blogs";
import Courses from "./components/Courses/Courses";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from "./components/Notfound/Notfound";
// import Services from "./components/Services/Services";

function App() {
  return (
    <div className="">

      {/* <Header></Header>
      <Footer></Footer> */}


      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/home">
            <Home>

            </Home>
          </Route>

          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/about">
            <About />

          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>


          <Route exact path="*">
            <Notfound />
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
