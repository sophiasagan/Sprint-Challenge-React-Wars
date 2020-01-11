import React from "react";
import "./App.css";
import StarwarsCards from "./components/StarwarsCards";

const App = () => {


  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarwarsCards />
    </div>
  );
};

export default App;