/* eslint-disable implicit-arrow-linebreak */
import Logo from "@components/Logo";
import { LINKS } from "@constants/header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Header.scss";

const Header = ({ small = false, onItemClick, onPathChange = () => {} }) => {
  const links = LINKS;
  const navigate = useNavigate();
  const [selectedPath, setSelectedPath] = useState("");

  const handleOnPathChange = (path, animation = true) => {
    onItemClick(animation);
    setSelectedPath(path);

    setTimeout(() => {
      onPathChange(path, animation);
      navigate(path);
    }, 250);
  };

  useEffect(() => {
    const actualPath = window.location.pathname;
    const foundLink = links.filter((link) => link.path === actualPath)[0];
    if (foundLink) {
      const { path } = foundLink;
      handleOnPathChange(path, false);
    }
  }, []);

  return (
    <header className="container header">
      <button
        type="button"
        className="navbar-link"
        onClick={() => handleOnPathChange("/")}
      >
        <Logo small={small} />
      </button>

      <div className="navbar-container">
        <hr />

        <nav className="navbar">
          <ul className="row navbar-list">
            {links.map((link) => (
              <li className={`col-3 navbar-item \
                  ${selectedPath === link.path ? "navbar-item--selected" : ""}
                `}
              >
                <button
                  className="navbar-link"
                  type="button"
                  onClick={() => handleOnPathChange(link.path)}
                >
                  {link.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
