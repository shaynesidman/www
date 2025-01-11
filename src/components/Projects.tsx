import "./Projects.css"
import Title from "./Title"
import Project from "./Project"

export default function Projects() {
  return (
    <div className="projects">
      <Title text="Projects" />
      <div className="project-gallery">
        <Project projectName="Emerald Necklace Conservancy" text="I participated in a year-long group project as a member of JumboCode, a student organization at Tufts University. My team collaborated with the Boston-based non-profit organization, the Emerald Necklace Conservancy, to develop an iPad application for use in one of their parks. Our tech stack included React, Next.js, TypeScript, MongoDB, Node.js, and Git/GitHub for version control." />
        <Project projectName="Somerville Museum" text="I am currently part of an ongoing project with JumboCode for the Somerville Museum, a non-profit organization located in Somerville, MA. We are developing a web application database to help museum staff manage their inventory, including merchandise and historical items. Our tech stack consists of React and Next.js for the frontend, Neon, Node.js, and PostgreSQL for the backend, Git and GitHub for version control, and Vercel for deployment."/>
      </div>
    </div>
  );  
}