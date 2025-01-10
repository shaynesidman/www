"use client";

import "./NavBarItem.css";

interface NavBarItemProps {
  text: string;
  targetId: string;
}

export default function NavBarItem(props: NavBarItemProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const targetElement = document.getElementById(props.targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a className="navbarbutton" href={`#${props.targetId}`} onClick={handleClick}>
      {props.text}
    </a>
  );
}
