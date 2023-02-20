import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="Signature">
        This project was coded by{" "}
        <a href="mailto:yuliia.demir1986@gmail.com" className="SignatureLink">
          Yuliia Demir
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/YuliiaDr/weather_app"
          className="SignatureLink"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://app.netlify.com/sites/weatherapponline/overview"
          className="SignatureLink"
        >
          hosted on Netlify
        </a>
      </p>
    </footer>
  );
}
