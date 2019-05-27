import React from "react";
import ReactDOM from "react-dom";

import Card from './components/card/card';
import "./components/card/styles.scss";

function App() {
  return (
    <div className="App">
    <Card />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
