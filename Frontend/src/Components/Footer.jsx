import React from "react";
import "../styles/Footer.css";
import ScrollReveal from "./ScrollReveal";
import { ShieldCheck, Lock, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="cyber-footer">
      <div className="footer-overlay"></div>

      <div className="footer-container">
        <ScrollReveal direction="up">
          <div className="footer-col">
            <h3 className="footer-title">
              <ShieldCheck size={22} /> DefendMePro
            </h3>
            <p>
              Shielding you from scams, fraud, and identity theft with
              AI-driven protection and 24/7 support.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="footer-col">
            <h4>Contact</h4>
            <p><Phone size={16} /> +1 (800) 555-1234</p>
            <p><Mail size={16} /> support@defendmepro.com</p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" delay={0.6}>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} DefendMePro. All Rights Reserved.</p>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
