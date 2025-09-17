import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo Wrapper fixed on left */}
        <div className="logo-wrapper">
          <Link to="/" className="nav-logo" onClick={closeAllMenus}>
            <img src="/Images/Logo.webp" alt="Logo" />
          </Link>
        </div>

        {/* Nav Links centered */}
        <div className={`nav-links-wrapper ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><NavLink to="/" end onClick={closeAllMenus}>Home</NavLink></li>
            <li><NavLink to="/#solutions" onClick={closeAllMenus}>Solutions</NavLink></li>
            <li
              ref={dropdownRef}
              className={`dropdown ${activeDropdown === "resources" ? "active" : ""}`}
            >
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("resources")}
              >
                Resources <FaChevronDown className="chevron" />
              </button>
              <div className={`mega-menu ${activeDropdown === "resources" ? "show" : ""}`}>
                <div className="mega-links">
                  {[
                    { to: "/reality", label: "📊 Reality in Numbers" },
                    { to: "/fallsshort", label: "❌ Why Security Falls Short" },
                    { to: "/builtdmp", label: "🛡️ Why We Built DMP" },
                    { to: "/fraud", label: "🚫 Fraud Detection" },
                    { to: "/scam", label: "⚠️ Scam Protection" },
                    { to: "/alerthub", label: "📢 Scam Alerts Hub" },
                    { to: "/identify", label: "🔐 Identity Theft" },
                    { to: "/zero", label: "🔒 Zero-Day Defense" },
                    { to: "/password", label: "🔑 Password Manager" },
                    { to: "/antivirus", label: "🖥️ Antivirus" },
                    { to: "/vpn", label: "🌐 VPN & Privacy" },
                    { to: "/spam", label: "📞 Spam Call Protection" },
                    { to: "/support", label: "💬 Live Support" },
                    { to: "/business", label: "💼 Business" },
                  ].map(({ to, label }) => (
                    <NavLink key={to} to={to} onClick={closeAllMenus}>
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </li>
            <li><NavLink to="/about" onClick={closeAllMenus}>About</NavLink></li>
            <li><NavLink to="/contact" className="cta-btn" onClick={closeAllMenus}>Contact</NavLink></li>
          </ul>
        </div>

        {/* Hamburger menu fixed on right */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </div>

      </div>

      {menuOpen && <div className="menu-overlay" onClick={closeAllMenus} />}
    </nav>
  );
};

export default Navbar;
