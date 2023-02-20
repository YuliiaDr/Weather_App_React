import React from "react";
import "./Blockquote.css";
import { useId } from "react";

export default function Blockquote() {
  let blockquote = useId();
  return (
    <blockquote>
      <p className="Blockquote" id={blockquote}>
        “Above the cloud with its shadow is the star with its light.”
      </p>
    </blockquote>
  );
}
