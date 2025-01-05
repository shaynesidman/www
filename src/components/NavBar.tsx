import "./NavBar.css";
import NavBarItem from "./NavBarItem";

export default function NavBar() {


  return (
    <div className="navbar">
      <span className="logo hide-logo">
        <video className="navbarvideo" autoPlay loop muted preload="auto">
          <source src="bannervid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </span>
      <span className="tabs hide-tabs">
        <NavBarItem text="Coursework" redirect="/coursework" />
        <NavBarItem text="Projects" redirect="/projects" />
        <NavBarItem text="Experience" redirect="/experience" />
        <NavBarItem text="About Me" redirect="/aboutme" />
      </span>
    </div>
  );
}