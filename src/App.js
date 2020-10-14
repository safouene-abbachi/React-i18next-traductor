import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="App">
      <nav
        style={{ width: "100%", padding: "2rem 0", backgroundColor: "gray" }}
      >
        <button onClick={() => handleClick("en")}>EN</button>
        <button onClick={() => handleClick("fr")}>FR</button>
        <button onClick={() => handleClick("es")}>ES</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("txt.1")}</p>
        <p>{t("txt1.1")}</p>
      </header>
    </div>
  );
}

export default App;
