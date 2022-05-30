import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Home } from "../pages/home";

export default function Routers() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </Fragment>
  );
}
