import "./Project.css"

interface ProjectProps {
  projectName: string;
  text: string;
}

export default function Project(props: ProjectProps) {
  return (
    <div className="project">
      <div className="project-name">{props.projectName}</div>
      <div className="project-description">{props.text}</div>
    </div>
  );
}