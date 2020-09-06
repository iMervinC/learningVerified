import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Lecturers from "./pages/Lecturers/Lecturers";
import Faq from "./pages/Faq/Faq";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "react-router-scroll-top";
import { Provider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Provider>
          <Navbar />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/courses" component={Courses} />
            <Route path="/lecturers" component={Lecturers} />
            <Route path="/faq" component={Faq} />
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </Provider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
