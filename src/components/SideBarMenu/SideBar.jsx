import React from "react";
import { SidebarData } from "../slidebarData";
import Logo from "../Logo";
// STYLES
import "./SideBar.css";

export default function Navbar() {

  return (
    <>
      <div className="nav-menu">
        <Logo />
        {SidebarData.map((item, index) => {
          return (

            <li key={item.id}  >
              <div className='main-title'>{item.mainTitle}</div>
              {item.subList.map((subItem, i) => {
                return (
                  <li key={i} className={subItem.cName}>
                    <a href={subItem.path}>
                      {subItem.icon}
                      <span>{subItem.title}</span>
                    </a>
                  </li>
                )
              })}
            </li>
          )
        })}

      </div>
    </>
  );
}
