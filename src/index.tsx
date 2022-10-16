import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalState } from "./Context/ModalContext";
import { BrowserRouter, HashRouter } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
        <React.StrictMode>
  <HashRouter> 
  {/* <BrowserRouter> */}
    <ModalState>
      <App />
    </ModalState>
  {/* </BrowserRouter> */}
 </HashRouter>
 </React.StrictMode>

);


