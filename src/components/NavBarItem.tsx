import "./NavBarItem.css";
import Link from "next/link"; 

interface NavBarItemProps {
  text: string
  redirect: string
}

export default function NavBarItem(props: NavBarItemProps) {
  return (
    <Link className="navbarbutton" href={props.redirect}>{props.text}</Link>
  );
}