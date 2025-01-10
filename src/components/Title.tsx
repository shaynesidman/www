import "./Title.css"
import React from "react";

interface TitleProps {
  text: string;
}

export default function Title(props: TitleProps) {
  return (
    <div className="section-title">| {props.text}</div>
  );
}