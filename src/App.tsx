import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/home/Home";
import "./i18next";
import "./App.css";
import Nav from "./layouts/nav/Nav";
import Footer from "./layouts/footer/Footer";

function App() {
  let { i18n } = useTranslation();
  return (
    <div
      dir={`${i18n.language === "en" ? "ltr" : "rtl"}`}
      className={`${i18n.language === "ar" && "font-cairo"}`}
    >
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
