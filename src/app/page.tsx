import "./globals.css";
import Introduction from "@/components/Introduction";
import Coursework from "@/components/Coursework";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="mainpage">
      <Introduction />
      <div id="coursework"><Coursework /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"></div>
      <div id="aboutme"></div>
    </div>
  );
}
