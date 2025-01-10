import "./Course.css"

interface CourseProps {
  title: string
  text: string
}

export default function Course(props: CourseProps) {
  return (
    <div className="course">
      <div className="course-title">{props.title}</div>
      <div className="course-description">{props.text}</div> 
    </div>
  );
}