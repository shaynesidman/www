import "./NavBar.css";
import NavBarItem from "./NavBarItem";
import Link from "next/link";

export default function NavBar() {


  return (
    <div className="navbar">
      <span className="logo hide-logo">
        <Link href="/">
          <video className="navbarvideo" autoPlay loop muted preload="auto">
            <source src="bannervid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>
      </span>
      <span className="tabs hide-tabs">
        <NavBarItem text="Coursework" targetId="coursework" />
        <NavBarItem text="Projects" targetId="projects" />
        <NavBarItem text="Experience" targetId="experience" />
        <NavBarItem text="About Me" targetId="aboutme" />
      </span>
    </div>
  );
}