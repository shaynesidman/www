"use client";

import "./Introduction.css";
import { useRef } from "react";

export default function Introduction() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetElement = document.getElementById('coursework');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="intro">
      <div className="introduction title">Hi, I'm <span className="tufts">Shayne</span>.</div>
      <div className="title">I study Computer Science at <span className="tufts">Tufts University</span>.</div>
      <a className="checkout" onClick={handleClick}>Check out some of the work that I have done!</a>
    </div>
  );
}