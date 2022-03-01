import React from "react";
import ReactDOM from "react-dom";
import { ImagesContext } from "./context";
import { App } from "./app";

ReactDOM.render(
  <React.StrictMode>
    <ImagesContext>
      <App />
    </ImagesContext>
  </React.StrictMode>,
  document.getElementById("root")
);
