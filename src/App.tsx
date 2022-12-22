import { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Nav from "./layouts/nav/Nav";
import Footer from "./layouts/footer/Footer";
import "./i18next";
import "./App.css";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));

function App() {
  let { i18n } = useTranslation();
  return (
    <div
      dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
      className={`${i18n.language === "ar" && "font-cairo"}`}
    >
      <Suspense fallback={<div>Loading</div>}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
