import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Footer from "./components/Footer";
import List from "./components/List";
import Search from "./components/Search";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <List />
    <Search />
    <Footer />
  </React.StrictMode>
);
