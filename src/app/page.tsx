import "./globals.css";
import Introduction from "@/components/Introduction";
import Coursework from "@/components/Coursework";
import Projects from "@/components/Projects";
import Experience from "@/components/Experiences";

export default function Home() {
  {* Home page *}
  return (
    <div className="mainpage">
      <Introduction />
      <div id="coursework"><Coursework /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="aboutme"></div>
    </div>
  );
}
