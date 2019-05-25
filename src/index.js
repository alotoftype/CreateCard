import React from "react";
import ReactDOM from "react-dom";

import "./card/styles.css";

function App() {
  return (
    <div className="App">
      <h1>Card Challenge</h1>
      <p>
        Code this component with a stylesheet in whatever language you choose.
      </p>
      <p>
        <a
          target="_blank"
          href="https://projects.invisionapp.com/share/FGR3VWU45YH#/screens/353365707_Show_Card"
        >
          Follow this mockup for design, color and states
        </a>
        .Other assets are:{" "}
        <a
          target="_blank"
          href="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fchevron.svg?1555596324053"
        >
          chevron
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Finfo.svg?1555596324183"
        >
          info.svg
        </a>
        , and a{" "}
        <a
          target="_blank"
          href="https://cdn.glitch.com/bf244f65-c514-428a-b4b2-ac2746281e91%2Fposter.jpg?1555596324072"
        >
          show poster
        </a>
        .
      </p>
      <p>
        The More Performances link should toggle the rest of the card with an
        animation of your choosing.
      </p>
      <p>Place the final result in the src/card directory.</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
