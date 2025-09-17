// src/pages/LearnMore.jsx

import React from "react";
import "../styles/LearnMore.css";

export default function LearnMore() {
  return (
    <div className="learn-more-container" style={{ maxWidth: "900px", margin: "auto" }}>
      
      {/* Intro Section */}
      <section className="learn-intro" style={{ marginBottom: "3rem", lineHeight: "1.9" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: "800", color: "#1a73e8", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif", letterSpacing: "1.2px" }}>
          🔍 Learn More About DefendMePro
        </h1>
        <p style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
          DefendMePro, proudly developed and maintained by{" "}
          <a href="https://saffronguru.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1a73e8", fontWeight: "600", textDecoration: "underline" }}>
            SaffronGuru.com
          </a>
          , is your ultimate digital shield against scams, frauds, identity theft, and all forms of online threats. Trusted by thousands globally, our mission is simple: to keep your digital life safe, secure, and worry-free 24/7.
        </p>
        <p style={{ fontSize: "1.3rem", color: "#555" }}>
          Whether you’re tech-savvy or just starting out, DefendMePro is designed with you in mind — simple, intuitive, and powerful.
        </p>
      </section>

      {/* Scam Types */}
      <section className="learn-section" style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
        <h2 style={{ fontSize: "2.4rem", color: "#00796b", fontWeight: "700", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>
          🕵️‍♂️ Types of Online Scams & Threats We Protect You From
        </h2>
        <p style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
          Online scammers constantly evolve their tactics. Here's a look at some of the common threats DefendMePro guards against:
        </p>
        <ul style={{ fontSize: "1.2rem", color: "#444", paddingLeft: "1.4rem", listStyleType: "disc", lineHeight: "1.7" }}>
          <li><strong>Phishing Emails & Websites:</strong> Fake emails or websites that trick you into sharing passwords or credit card info.</li>
          <li><strong>Romance Scams:</strong> Scammers pretending to be romantic interests to exploit your emotions and money.</li>
          <li><strong>Identity Theft:</strong> Unauthorized use of your personal info to commit fraud or open accounts in your name.</li>
          <li><strong>Fake Online Shopping Sites:</strong> Fraudulent stores that take your money but never deliver.</li>
          <li><strong>Tech Support Scams:</strong> Calls or messages claiming to fix your device but aiming to steal data or money.</li>
          <li><strong>Investment & Cryptocurrency Scams:</strong> Fraudulent investment schemes promising unrealistic returns.</li>
          <li><strong>Social Engineering:</strong> Manipulative tactics to gain your trust and confidential info.</li>
        </ul>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
          DefendMePro’s advanced algorithms continuously update to detect and block these threats before they reach you.
        </p>
      </section>

      {/* How It Works */}
      <section className="learn-section" style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
        <h2 style={{ fontSize: "2.4rem", color: "#00796b", fontWeight: "700", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>
          ⚙️ How DefendMePro Works to Keep You Safe
        </h2>
        <p style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
          We use state-of-the-art technology combined with real-time intelligence to safeguard your digital world:
        </p>
        <ul style={{ fontSize: "1.2rem", color: "#444", paddingLeft: "1.4rem", listStyleType: "disc", lineHeight: "1.7" }}>
          <li><strong>Real-Time Website & Link Scanning:</strong> We scan links and websites you visit to ensure they are legitimate and safe.</li>
          <li><strong>AI-Powered Email Filtering:</strong> Suspicious emails are flagged or blocked before they land in your inbox.</li>
          <li><strong>Behavioral Monitoring:</strong> Detects unusual activity on your accounts or devices to alert you instantly.</li>
          <li><strong>Privacy Protection:</strong> Encrypts your data and prevents unauthorized access.</li>
          <li><strong>Automatic Updates:</strong> Our threat database is updated regularly without you lifting a finger.</li>
        </ul>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
          All these run quietly in the background without interrupting your day.
        </p>
      </section>

      {/* User-Friendly Design */}
      <section className="learn-section" style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
        <h2 style={{ fontSize: "2.4rem", color: "#00796b", fontWeight: "700", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>
          🧠 Simple & User-Friendly Interface
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          We believe online safety shouldn’t be complicated. DefendMePro is:
        </p>
        <ul style={{ fontSize: "1.2rem", color: "#444", paddingLeft: "1.4rem", listStyleType: "disc", lineHeight: "1.7" }}>
          <li><strong>Easy to Install:</strong> No tech expertise required. Just a few clicks and you’re protected.</li>
          <li><strong>Minimal Configuration:</strong> Defaults optimized to keep you safe without confusing options.</li>
          <li><strong>Quiet Operation:</strong> Works silently in the background without annoying pop-ups or alerts.</li>
          <li><strong>Accessible Support:</strong> 24/7 help via phone or email whenever you need.</li>
        </ul>
      </section>

      {/* Real-Time Alerts */}
      <section className="learn-section" style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
        <h2 style={{ fontSize: "2.4rem", color: "#00796b", fontWeight: "700", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>
          🔔 Instant Real-Time Alerts
        </h2>
        <p style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
          Speed is crucial in stopping digital threats. DefendMePro sends you immediate notifications if:
        </p>
        <ul style={{ fontSize: "1.2rem", color: "#444", paddingLeft: "1.4rem", listStyleType: "disc", lineHeight: "1.7" }}>
          <li>Suspicious login attempts happen on your accounts</li>
          <li>Phishing or scam websites are detected while browsing</li>
          <li>Unusual transactions or device behavior is found</li>
          <li>Potential identity theft attempts occur</li>
        </ul>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
          These alerts give you a crucial head-start to take action and prevent losses.
        </p>
      </section>

      {/* Privacy & Security */}
      <section className="learn-section" style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
        <h2 style={{ fontSize: "2.4rem", color: "#d32f2f", fontWeight: "700", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>
          🔒 Privacy & Data Security: Our Top Priority
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          We take your privacy seriously. DefendMePro:
        </p>
        <ul style={{ fontSize: "1.2rem", color: "#444", paddingLeft: "1.4rem", listStyleType: "disc", lineHeight: "1.7" }}>
          <li>Uses end-to-end encryption to protect your data</li>
          <li>Does not sell or share your personal information with third parties</li>
          <li>Complies with global privacy laws including GDPR and CCPA</li>
          <li>Regularly audits security measures to ensure top protection</li>
        </ul>
      </section>

      {/* User Testimonials */}
      <section className="learn-section" style={{ marginBottom: "3rem", lineHeight: "1.85", backgroundColor: "#f4f9ff", padding: "1.5rem 2rem", borderRadius: "12px" }}>
        <h2 style={{ fontSize: "2.4rem", color: "#00796b", fontWeight: "700", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>
          ⭐ What Our Users Say
        </h2>
        <blockquote style={{ fontSize: "1.3rem", fontStyle: "italic", color: "#555", marginBottom: "1rem" }}>
          "DefendMePro saved me from a phishing scam last month — I can’t thank the team enough for such peace of mind!"
          <br />
          <span style={{ fontWeight: "600", color: "#1a73e8" }}>– Priya S.</span>
        </blockquote>
        <blockquote style={{ fontSize: "1.3rem", fontStyle: "italic", color: "#555" }}>
          "Easy to use and super reliable. I recommend DefendMePro to all my family and friends."
          <br />
          <span style={{ fontWeight: "600", color: "#1a73e8" }}>– Rahul K.</span>
        </blockquote>
      </section>

      {/* FAQs */}
      <section className="learn-section" style={{ marginBottom: "3rem", lineHeight: "1.85" }}>
        <h2 style={{ fontSize: "2.4rem", color: "#00796b", fontWeight: "700", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>
          ❓ Frequently Asked Questions (FAQs)
        </h2>
        <div style={{ marginBottom: "1rem" }}>
          <strong>Q: Is DefendMePro compatible with all devices?</strong>
          <p style={{ marginLeft: "1rem" }}>
            Yes! It works smoothly on Windows, macOS, Android, and iOS devices.
          </p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <strong>Q: Do I need technical knowledge to use it?</strong>
          <p style={{ marginLeft: "1rem" }}>
            Not at all. Designed for users of all skill levels — just install and relax.
          </p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <strong>Q: How often is the threat database updated?</strong>
          <p style={{ marginLeft: "1rem" }}>
            We update our threat database multiple times daily to stay ahead of new scams.
          </p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <strong>Q: What if I encounter an issue?</strong>
          <p style={{ marginLeft: "1rem" }}>
            Our 24/7 support team is always ready to help you by phone, email, or live chat.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="learn-cta" style={{ textAlign: "center", marginTop: "3rem", paddingTop: "2rem", borderTop: "2px solid #1a73e8" }}>
        <h2 style={{ fontSize: "2.8rem", color: "#1a73e8", marginBottom: "1rem", fontWeight: "800", fontFamily: "'Poppins', sans-serif" }}>
          💪 Ready to Feel Safe Online?
        </h2>
        <p style={{ fontSize: "1.4rem", marginBottom: "2rem", color: "#2c3e50", maxWidth: "700px", margin: "auto" }}>
          Thousands trust DefendMePro to protect their digital lives daily. Join them and gain peace of mind knowing your devices and personal information are guarded by the best. Start your free trial today and browse with confidence.
        </p>
        <a
          href="/contact"
          className="btn-primary"
          style={{
            padding: "0.9rem 3rem",
            fontSize: "1.4rem",
            borderRadius: "14px",
            fontWeight: "700",
            textDecoration: "none",
            boxShadow: "0 6px 20px rgba(26, 115, 232, 0.7)",
            display: "inline-block",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#155bb5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a73e8")}
        >
          Start Free Trial
        </a>
      </section>

    </div>
  );
}
