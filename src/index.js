import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import App from "./App";
import "./index.css";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();