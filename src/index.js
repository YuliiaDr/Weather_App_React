import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';

import App from "./App";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css'; // import CSS file

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();