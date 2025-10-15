import React, { useState } from "react";
import "./Navigation.scss";
import { ChevronDown, ChevronUp } from 'lucide-react';
import {menuItems} from "../../utils/data";

const Navigation = () => {
  //State for Menu Open/Close
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiSubmenuOpen, setAiSubmenuOpen] = useState(false);


  return (
    <nav className="navigation" role="navigation" aria-label="Main Navigation">
      <div className="logo">U<i>z</i>OPay</div>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      
       <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        {menuItems.map((item, idx) =>
          item.submenu ? (
            <li
              key={item.label}
              className="nav-item has-submenu"
              onClick={() => setAiSubmenuOpen(!aiSubmenuOpen)}
              aria-label={item.label}
            >
              {item.label}
              <span className="arrow">
                {aiSubmenuOpen ? <ChevronUp /> : <ChevronDown />}
              </span>
              <ul className={`submenu ${aiSubmenuOpen ? "open" : ""}`}>
                {item.submenu.map(sub => (
                  <li key={sub} aria-label={sub}>{sub}</li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.label} className="nav-item" aria-label={item.label}>{item.label}</li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navigation