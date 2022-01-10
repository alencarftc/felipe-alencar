import React from "react";
import LogoImage from "@images/logo.svg";
import "./Logo.scss";

/**
 * The website logo component.
 *
 * @param {boolean} small
 */
const Logo = ({ small = false }) => (
  <div className={`logo ${small ? "logo-small" : ""}`}>
    <img src={LogoImage} alt="Felipe Alencar's Logo" />
    <div className="logo-text">
      <h1>Felipe Alencar</h1>
      <span>Software Engineering</span>
    </div>
  </div>
);

export default Logo;
