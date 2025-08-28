import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.css";
import roosterLogo from "../../../assets/images/kukdukoo-logo.png";
import aboutIcon from "../../../assets/images/about-icon.png";
import aboutActiveIcon from "../../../assets/images/about-active-icon.png";
import homeIcon from "../../../assets/images/home-icon.png";
import homeActiveIcon from "../../../assets/images/home-active-icon.png";
import sponsorIcon from "../../../assets/images/sponsor-icon.png";
import sponsorActiveIcon from "../../../assets/images/sponsor-active-icon.png";
import contactIcon from "../../../assets/images/contact-icon.png";
import contactActiveIcon from "../../../assets/images/contact-active-icon.png";

// Import buttons
import HeaderButton from "../../../assets/buttons/headerButton/headerButton.jsx";
import BookTicketsButton from "../../../assets/buttons/BookTicketsButton/BookTicketsButton.jsx";


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial checks
    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div
      className={`nav-container ${isScrolled ? "nav-shrunk" : ""} ${
        isMobile ? "mobile" : ""
      }`}
    >
      <HeaderButton
        icon={homeIcon}
        activeIcon={homeActiveIcon}
        label="Home"
        isActive={location.pathname === "/"}
        onClick={() => handleNavigation("/")}
      />
      <HeaderButton
        icon={aboutIcon}
        activeIcon={aboutActiveIcon}
        label="About"
        isActive={location.pathname === "/about"}
        onClick={() => handleNavigation("/about")}
      />
      <div className="logo-and-tickets-container">
        {!isScrolled && ( // ✅ hide logo when scrolled
          <img
            src={roosterLogo}
            alt="Kuk Du Koo Fest Logo"
            className="rooster-logo"
            style={{ cursor: "pointer" }}
            onClick={() => handleNavigation("/")}
          />
        )}
        <BookTicketsButton
          isScrolled={isScrolled}
          isMobile={isMobile}
          onClick={() => handleNavigation("/tickets")}
          isActive={location.pathname === "/tickets"}
        />
      </div>
      <HeaderButton
        icon={sponsorIcon}
        activeIcon={sponsorActiveIcon}
        label="Sponsors"
        isActive={location.pathname === "/sponsor"}
        onClick={() => handleNavigation("/sponsor")}
      />
      <HeaderButton
        icon={contactIcon}
        activeIcon={contactActiveIcon}
        label="Contact"
        isActive={location.pathname === "/contact"}
        onClick={() => handleNavigation("/contact")}
      />
    </div>
  );
};

const Header = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header${isShrunk ? " shrunk" : ""}`}>
      <Navigation />
    </header>
  );
};

export default Header;
