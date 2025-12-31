import React from "react";
import { Link } from "react-router-dom";
import SiteLogo from "@/assets/images/main-logo.svg";
import MobileMenu from "../components/MobileMenu";

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="header-inner">

          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={SiteLogo} alt="" />
            </Link>
          </div>

          {/* Mobile + Desktop Navigation */}
          <MobileMenu />

        </div>
      </div>
    </header>
  );
}

export default Header;
