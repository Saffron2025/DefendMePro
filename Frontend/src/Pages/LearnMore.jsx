// src/pages/LearnMore.jsx

import React from "react";
import "../Styles/LearnMore.css";

export default function LearnMore() {
  return (
    <main className="learn-more-container" style={{ maxWidth: "900px", margin: "auto", padding: "1rem" }}>
      
      {/* Intro Section */}
      <section
        className="learn-intro"
        style={{ marginBottom: "3rem", lineHeight: "1.9" }}
        aria-labelledby="intro-title"
      >
        <h1
          id="intro-title"
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            color: "#1a73e8",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
            letterSpacing: "1.2px",
          }}
        >
          🔍 Learn More About DefendMePro
        </h1>
        <p style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
          DefendMePro, proudly developed and maintained by{" "}
          <a
            href="https://saffronguru.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#1a73e8", fontWeight: "600", textDecoration: "underline" }}
            aria-label="Visit SaffronGuru.com website"
          >
            SaffronGuru.com
          </a>
          , is your ultimate digital shield against scams, fraud, identity theft, and all forms of online threats. Trusted by thousands worldwide, our mission is clear: to keep your digital life safe, secure, and worry-free around the clock.
        </p>
        <p style={{ fontSize: "1.3rem", color: "#555" }}>
          Whether you’re a tech expert or just starting out, DefendMePro is designed with simplicity, intuitiveness, and powerful protection.
        </p>
      </section>

      {/* Scam Types */}
      <section
        className="learn-section"
        style={{ marginBottom: "3rem", lineHeight: "1.85" }}
        aria-labelledby="scam-types-title"
      >
        <h2
          id="scam-types-title"
          style={{
            fontSize: "2.4rem",
            color: "#00796b",
            fontWeight: "700",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          🕵️‍♂️ Types of Online Scams & Threats We Protect You From
        </h2>
        <p style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
          Online scammers constantly evolve their tactics. Here are some common threats DefendMePro guards you against:
        </p>
        <ul
          style={{
            fontSize: "1.2rem",
            color: "#444",
            paddingLeft: "1.4rem",
            listStyleType: "disc",
            lineHeight: "1.7",
          }}
        >
          <li>
            <strong>Phishing Emails & Websites:</strong> Fake messages and sites designed to steal your passwords or credit card details.
          </li>
          <li>
            <strong>Romance Scams:</strong> Fraudsters exploiting emotions by pretending to be romantic partners.
          </li>
          <li>
            <strong>Identity Theft:</strong> Unauthorized use of your personal info to commit fraud or open fake accounts.
          </li>
          <li>
            <strong>Fake Online Shopping Sites:</strong> Fraudulent stores that take your money without delivering goods.
          </li>
          <li>
            <strong>Tech Support Scams:</strong> Fake support calls or messages aiming to steal data or money.
          </li>
          <li>
            <strong>Investment & Cryptocurrency Scams:</strong> Schemes promising unrealistic financial returns.
          </li>
          <li>
            <strong>Social Engineering:</strong> Manipulative tactics to trick you into revealing confidential info.
          </li>
        </ul>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
          DefendMePro’s advanced technology continuously updates to detect and block these threats before they reach you.
        </p>
      </section>

      {/* How It Works */}
      <section
        className="learn-section"
        style={{ marginBottom: "3rem", lineHeight: "1.85" }}
        aria-labelledby="how-it-works-title"
      >
        <h2
          id="how-it-works-title"
          style={{
            fontSize: "2.4rem",
            color: "#00796b",
            fontWeight: "700",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          ⚙️ How DefendMePro Works to Keep You Safe
        </h2>
        <p style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
          Using state-of-the-art technology combined with real-time intelligence, DefendMePro safeguards your digital world through:
        </p>
        <ul
          style={{
            fontSize: "1.2rem",
            color: "#444",
            paddingLeft: "1.4rem",
            listStyleType: "disc",
            lineHeight: "1.7",
          }}
        >
          <li>
            <strong>Real-Time Website & Link Scanning:</strong> Checking the safety of websites and links you visit.
          </li>
          <li>
            <strong>AI-Powered Email Filtering:</strong> Flagging or blocking suspicious emails before they reach your inbox.
          </li>
          <li>
            <strong>Behavioral Monitoring:</strong> Detecting unusual activity on your accounts or devices and alerting you instantly.
          </li>
          <li>
            <strong>Privacy Protection:</strong> Encrypting your data and preventing unauthorized access.
          </li>
          <li>
            <strong>Automatic Updates:</strong> Regular threat database updates happening quietly in the background.
          </li>
        </ul>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
          All these features work silently without disrupting your daily activities.
        </p>
      </section>

      {/* User-Friendly Design */}
      <section
        className="learn-section"
        style={{ marginBottom: "3rem", lineHeight: "1.85" }}
        aria-labelledby="user-friendly-title"
      >
        <h2
          id="user-friendly-title"
          style={{
            fontSize: "2.4rem",
            color: "#00796b",
            fontWeight: "700",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          🧠 Simple & User-Friendly Interface
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          Online safety should never be complicated. DefendMePro is designed to be:
        </p>
        <ul
          style={{
            fontSize: "1.2rem",
            color: "#444",
            paddingLeft: "1.4rem",
            listStyleType: "disc",
            lineHeight: "1.7",
          }}
        >
          <li><strong>Easy to Install:</strong> No technical skills required — just a few clicks and you’re protected.</li>
          <li><strong>Minimal Configuration:</strong> Optimized default settings that keep you safe without confusing options.</li>
          <li><strong>Quiet Operation:</strong> Runs silently without annoying pop-ups or alerts.</li>
          <li><strong>Accessible Support:</strong> 24/7 customer service by phone or email whenever you need help.</li>
        </ul>
      </section>

      {/* Real-Time Alerts */}
      <section
        className="learn-section"
        style={{ marginBottom: "3rem", lineHeight: "1.85" }}
        aria-labelledby="real-time-alerts-title"
      >
        <h2
          id="real-time-alerts-title"
          style={{
            fontSize: "2.4rem",
            color: "#00796b",
            fontWeight: "700",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          🔔 Instant Real-Time Alerts
        </h2>
        <p style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
          Speed is crucial in stopping digital threats. DefendMePro sends immediate notifications when:
        </p>
        <ul
          style={{
            fontSize: "1.2rem",
            color: "#444",
            paddingLeft: "1.4rem",
            listStyleType: "disc",
            lineHeight: "1.7",
          }}
        >
          <li>Suspicious login attempts occur on your accounts.</li>
          <li>Phishing or scam websites are detected during browsing.</li>
          <li>Unusual transactions or device activity is identified.</li>
          <li>Potential identity theft attempts happen.</li>
        </ul>
        <p style={{ fontSize: "1.3rem", marginTop: "1rem" }}>
          These alerts give you a crucial head start to take action and prevent losses.
        </p>
      </section>

      {/* Privacy & Security */}
      <section
        className="learn-section"
        style={{ marginBottom: "3rem", lineHeight: "1.85" }}
        aria-labelledby="privacy-security-title"
      >
        <h2
          id="privacy-security-title"
          style={{
            fontSize: "2.4rem",
            color: "#d32f2f",
            fontWeight: "700",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          🔒 Privacy & Data Security: Our Top Priority
        </h2>
        <p style={{ fontSize: "1.3rem" }}>
          Your privacy matters. DefendMePro ensures:
        </p>
        <ul
          style={{
            fontSize: "1.2rem",
            color: "#444",
            paddingLeft: "1.4rem",
            listStyleType: "disc",
            lineHeight: "1.7",
          }}
        >
          <li>End-to-end encryption of your data to prevent unauthorized access.</li>
          <li>No selling or sharing of your personal information with third parties.</li>
          <li>Compliance with global privacy laws, including GDPR and CCPA.</li>
          <li>Regular security audits to maintain the highest protection standards.</li>
        </ul>
      </section>

      {/* User Testimonials */}
      <section
        className="learn-section"
        style={{
          marginBottom: "3rem",
          lineHeight: "1.85",
          backgroundColor: "#f4f9ff",
          padding: "1.5rem 2rem",
          borderRadius: "12px",
        }}
        aria-labelledby="testimonials-title"
      >
        <h2
          id="testimonials-title"
          style={{
            fontSize: "2.4rem",
            color: "#00796b",
            fontWeight: "700",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          ⭐ What Our Users Say
        </h2>
        <blockquote
          style={{
            fontSize: "1.3rem",
            fontStyle: "italic",
            color: "#555",
            marginBottom: "1rem",
          }}
          aria-label="Testimonial from Priya S."
        >
          "DefendMePro saved me from a phishing scam last month — I can’t thank the team enough for such peace of mind!"
          <br />
          <span style={{ fontWeight: "600", color: "#1a73e8" }}>– Priya S.</span>
        </blockquote>
        <blockquote
          style={{ fontSize: "1.3rem", fontStyle: "italic", color: "#555" }}
          aria-label="Testimonial from Rahul K."
        >
          "Easy to use and super reliable. I recommend DefendMePro to all my family and friends."
          <br />
          <span style={{ fontWeight: "600", color: "#1a73e8" }}>– Rahul K.</span>
        </blockquote>
      </section>

      {/* FAQs */}
      <section
        className="learn-section"
        style={{ marginBottom: "3rem", lineHeight: "1.85" }}
        aria-labelledby="faqs-title"
      >
        <h2
          id="faqs-title"
          style={{
            fontSize: "2.4rem",
            color: "#00796b",
            fontWeight: "700",
            marginBottom: "1rem",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
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
            Our 24/7 support team is always ready to help by phone, email, or live chat.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="learn-cta"
        style={{
          textAlign: "center",
          marginTop: "3rem",
          paddingTop: "2rem",
          borderTop: "2px solid #1a73e8",
        }}
        aria-label="Call to action"
      >
        <h2
          style={{
            fontSize: "2.8rem",
            color: "#1a73e8",
            marginBottom: "1rem",
            fontWeight: "800",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          💪 Ready to Feel Safe Online?
        </h2>
        <p
          style={{
            fontSize: "1.4rem",
            marginBottom: "2rem",
            color: "#2c3e50",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Thousands trust DefendMePro to protect their digital lives every day. Join them and gain peace of mind knowing your devices and personal information are guarded by the best. Start your free trial today and browse with confidence.
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
            backgroundColor: "#1a73e8",
            color: "white",
            boxShadow: "0 6px 20px rgba(26, 115, 232, 0.7)",
            display: "inline-block",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#155bb5")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1a73e8")}
          aria-label="Start free trial and protect your digital life"
        >
          Start Free Trial
        </a>
      </section>
    </main>
  );
}
