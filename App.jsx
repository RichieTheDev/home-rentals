import React from "react";
import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

export const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <List />
      <Search />
      <Footer />
    </div>
  );
};

export default App;
