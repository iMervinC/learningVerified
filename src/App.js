import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Lecturers from "./pages/Lecturers/Lecturers";
import Faq from "./pages/Faq/Faq";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/courses" component={Courses} />
        <Route path="/lecturers" component={Lecturers} />
        <Route path="/faq" component={Faq} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
