import React from "react";
import NavLink from "./navlink";

type Props = {
  title: string;
  path: string;
};

const MenuOverlay: React.FC<{ links: Props[] }> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.path}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
