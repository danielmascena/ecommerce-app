
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import StoreWrapper from "./components/StoreWrapper";

import "./reset.css";
import './index.css';
import reportWebVitals from './reportWebVitals';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <StoreWrapper>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </StoreWrapper>
  </StrictMode>,
  rootElement
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
