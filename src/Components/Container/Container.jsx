import React from "react";
import "./Container.css";

export function Container(props) {
  return <div className="Container">{props.children}</div>;
}
