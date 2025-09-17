import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle scroll and click outside
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-redesign ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="nav-logo">
          <Link to="/" onClick={closeAllMenus}>
            <img src="/Images/Logo.webp" alt="DefendMePro Logo" />
          </Link>
        </div>

        <div className={`nav-links-wrapper ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end onClick={closeAllMenus}>
                Home
              </NavLink>
            </li>
            <li>
            <NavLink to="/#solutions" onClick={closeAllMenus}>
  Solutions
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
              <div className={`mega-menu ${activeDropdown === "resources" ? "show" : ""}`}>
                <div className="mega-links">
                  {[
                    { to: "/reality", label: "📊 Reality in Numbers" },
                    { to: "/fallsshort", label: "❌ Why Security Falls Short" },
                    { to: "/builtdmp", label: "🛡️ Why We Built DefendMePro" },
                    { to: "/fraud", label: "🚫 Fraud Detection" },
                    { to: "/scam", label: "⚠️ Scam Protection" },
                    { to: "/alerthub", label: "📢 Scam Alerts Hub" },
                    { to: "/identify", label: "🔐 Identity Theft Protection" },
                    { to: "/zero", label: "🔒 Zero-Day Threat Defense" },
                    { to: "/password", label: "🔑 Password Manager" },
                    { to: "/antivirus", label: "🖥️ Antivirus & Device Security" },
                    { to: "/vpn", label: "🌐 VPN & Online Privacy" },
                    { to: "/spam", label: "📞 Spam Call Protection" },
                    { to: "/support", label: "💬 Live Support" },
                    { to: "/business", label: "💼 DefendMePro for Business" },
                  ].map(({ to, label }) => (
                    <NavLink key={to} to={to} onClick={closeAllMenus}>
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <NavLink to="/about" onClick={closeAllMenus}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="cta-btn" onClick={closeAllMenus}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </div>
      </div>

      {/* Overlay when menu open on mobile */}
      {menuOpen && <div className="menu-overlay" onClick={closeAllMenus} />}
    </nav>
  );
};

export default Navbar;
