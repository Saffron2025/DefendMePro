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
  const darkNavRoutes = ["/about", "/learn-more"];
  const isDarkNavbar = darkNavRoutes.includes(location.pathname);
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

  const handleHomeClick = () => {
    closeAllMenus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper function to check active hash links (Solutions, Pricing)
  const isHashActive = (hash) => {
    return location.pathname === "/" && location.hash.toLowerCase() === hash.toLowerCase();
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${isDarkNavbar ? "dark-nav" : ""}`}>
      <div className="navbar-container">

        {/* Logo fixed left */}
        <div className="logo-wrapper">
          <Link to="/" className="nav-logo" onClick={handleHomeClick}>
            <img src="/Images/Logo.webp" alt="Logo" />
          </Link>
        </div>

        {/* Nav links centered */}
        <div className={`nav-links-wrapper ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end onClick={handleHomeClick} className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#solutions"
                onClick={closeAllMenus}
                className={({ isActive }) => (isActive || isHashActive("#solutions") ? "active" : "")}
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#pricing"
                onClick={closeAllMenus}
                className={({ isActive }) => (isActive || isHashActive("#pricing") ? "active" : "")}
              >
                Pricing
              </NavLink>
            </li>

            <li
              ref={dropdownRef}
              className={`dropdown ${activeDropdown === "resources" ? "active" : ""}`}
            >
              <button
                className="dropdown-toggle"
                onClick={() => toggleDropdown("resources")}
                aria-expanded={activeDropdown === "resources"}
                aria-haspopup="true"
              >
                Resources <FaChevronDown className="chevron" />
              </button>
              <div className={`mega-menu ${activeDropdown === "resources" ? "show" : ""} ${isDarkNavbar ? "white-dropdown" : ""}`}>
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
            <li>
              <NavLink to="/about" onClick={closeAllMenus} className={({ isActive }) => isActive ? "active" : ""}>
                About
              </NavLink>
            </li>
            <li>
  <NavLink
    to="/contact"
    onClick={closeAllMenus}
    className={({ isActive }) => isActive ? "active cta-btn" : "cta-btn"}
  >
    Contact
  </NavLink>
</li>

          </ul>
        </div>

        {/* Hamburger fixed right */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </div>

      </div>

      {menuOpen && <div className="menu-overlay" onClick={closeAllMenus} />}
    </nav>
  );
};

export default Navbar;
