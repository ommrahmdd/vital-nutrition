import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Nav from "./layouts/nav/Nav";
import Footer from "./layouts/footer/Footer";
import "./i18next";
import "./App.css";
import Loader from "./components/UI/loader";
import NewDetails from "./pages/newsDetails/NewDetails";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Partners = lazy(() => import("./pages/partners/Partners"));
const News = lazy(() => import("./pages/news/News"));

function App() {
  let { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div
      className={`${i18n.language === "ar" ? "font-cairo" : "font-poppins"} `}
    >
      <Suspense fallback={<Loader />}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/news">
              <Route index element={<News />} />
              <Route path=":id" element={<NewDetails />} />
            </Route>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
