import { Route, Routes } from "react-router-dom";
import style from "./app.module.css";

// import component for this pages
import Navigation from "../widgets/navigate";
import Layout from "../widgets/layout";

// pages for browser route mb some uncorrect u can change
import Home from "../pages/home";

function App() {
  return (
    <div className={style.main_container}>
      <div className={style.app_container}>
        <Navigation />
        <div className={style.inner}>
          <Layout />
          <Routes>
            <Route path={"/"} element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
