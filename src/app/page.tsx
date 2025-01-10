"use client";

import "./globals.css";
import Coursework from "../components/Coursework";
import { useRef } from "react";

export default function Home() {
  const checkOutRef = useRef<HTMLDivElement>(null);

  const checkOut = () => {
    checkOutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="mainpage">
      <div className="intro">
        <div className="introduction title">Hi, I'm <span className="tufts">Shayne</span>.</div>
        <div className="title">I study Computer Science at <span className="tufts">Tufts University</span>.</div>
        <div className="checkout" onClick={checkOut}>Check out some of the work that I have done!</div>
      </div>
      <div id="coursework" ref={checkOutRef}><Coursework /></div>
      <div id="projects"></div>
      <div id="experience"></div>
      <div id="aboutme"></div>
    </div>
  );
}
