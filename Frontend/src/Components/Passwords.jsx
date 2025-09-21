import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Passwords.css";

export default function Passwords() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/Password/LockdownBeyond.webp" },
      title: "Generate Strong, Unique Passwords",
      body: [
        "Password reuse is the leading cause of account takeovers. Our password generator creates long, random, and unique passwords that resist brute force and dictionary attacks.",
        "Customize your password profiles with length, symbols, passphrases with separators, or compliance presets for banking and work applications.",
      ],
      points: [
        "Presets ranging from 16 to 24 characters with symbol and ambiguous character toggles",
        "Memorable diceware-style passphrases for easier recall",
        "Per-site rules enforcing no spaces, mandatory symbols, and more",
      ],
    },
    {
      media: { img: "/Password/Encrypted.webp" },
      title: "Encrypted Vault with Zero-Knowledge Security",
      body: [
        "Your vault is secured with end-to-end encryption. Only you hold the keys—derived locally from your master passphrase—ensuring zero-knowledge privacy.",
        "Unlock quickly with biometrics on trusted devices, and enjoy automatic clipboard clearing to prevent shoulder surfing and malware exposure.",
      ],
      points: [
        "Local encryption and decryption; only ciphertext syncs with our servers",
        "Biometric unlock combined with configurable auto-lock timers",
        "Clipboard auto-clear and masked password reveal for enhanced security",
      ],
    },
    {
      media: { img: "/Password/AutoFill.webp" },
      title: "One-Tap Autofill Across Browsers and Apps",
      body: [
        "Autofill works seamlessly across browsers and applications. URLs are verified to block phishing lookalikes before credentials are suggested.",
        "Supports app logins, two-factor authentication prompts, and rotating passwords with minimal user interaction.",
      ],
      points: [
        "Domain matching with phishing detection warnings",
        "Per-account notes support, including security questions and recovery codes",
        "App-level autofill for mobile and desktop via browser extensions",
      ],
    },
    {
      media: { img: "/Password/BreachWatch.webp" },
      title: "Continuous Breach Monitoring & Vault Health Score",
      body: [
        "We monitor your saved logins against known data breaches. If an account is compromised, you receive alerts with actionable steps to rotate affected credentials.",
        "A vault health score highlights weak, reused, or outdated passwords for prioritized remediation.",
      ],
      points: [
        "Real-time breach alerts with detailed risk levels and first-seen dates",
        "Detection of weak, reused, or aged passwords",
        "Batch password rotation flows where supported for quick fixes",
      ],
    },
    {
      media: { img: "/Password/2FA.webp" },
      title: "2FA and Passkeys Support for Stronger Authentication",
      body: [
        "Encourages stronger authentication methods by securely storing time-based one-time passcodes (TOTPs), saving recovery codes safely, and supporting passwordless passkeys.",
        "Account-specific guidance prompts you to enable 2FA, save backup codes, or adopt passkeys where supported.",
      ],
      points: [
        "Built-in TOTP generator for secure second-factor authentication",
        "Secure storage and labeling of recovery codes",
        "WebAuthn passkey support with user-friendly hints",
      ],
    },
    {
      media: { img: "/Password/SecureSharing.webp" },
      title: "Secure Credential Sharing & Emergency Access",
      body: [
        "Share passwords safely with family or team members without exposing raw credentials. Access can be read-only, masked, or limited by time.",
        "Set trusted emergency contacts with configurable wait periods—you’ll receive notifications and retain control to cancel access if needed.",
      ],
      points: [
        "Masked or full-access sharing, with instant revocation",
        "Comprehensive audit trails showing who accessed what and when",
        "Emergency access workflows with configurable approval delays",
      ],
    },
    {
      media: { img: "/Password/Migration.webp" },
      title: "Simple Migration from Other Password Managers",
      body: [
        "Import passwords from Chrome, Edge, Firefox, iCloud Keychain, 1Password, LastPass, Bitwarden, or CSV files. We automatically sanitize unusual fields and map notes and URLs.",
        "During import, duplicates and variants of the same domain (e.g., m.example.com vs www.example.com) are merged for a cleaner vault.",
      ],
      points: [
        "Validated CSV and JSON import with error checking",
        "Duplicate detection and domain normalization",
        "Optional automatic tagging by categories like banking, social, or work",
      ],
    },
    {
      media: { img: "/Password/AdminOrder.webp" },
      title: "Enterprise Admin Controls (Optional)",
      body: [
        "Business plans include admin policy templates covering minimum password length, rotation schedules, mandatory 2FA, and breach enforcement.",
        "Off-boarding processes allow secure transfer or revocation of shared credentials without exposing plaintext passwords.",
      ],
      points: [
        "Organization-wide password policies and compliance reports",
        "Role-based vaults for Personal, Team, and Admin users",
        "Secure off-boarding without exposing raw secrets",
      ],
    },
  ];

  const checklist = [
    "Use a unique, strong master passphrase and enable biometric unlocking.",
    "Activate two-factor authentication (2FA) for email, banking, payment, and social accounts.",
    "Migrate reused passwords starting with your highest-value accounts.",
    "Save recovery codes securely in your vault and label them clearly.",
    "Prefer passkeys for supported services while keeping passwords as fallback.",
    "Regularly review breach alerts and promptly rotate compromised credentials.",
  ];

  const faqs = [
    {
      q: "What happens if I forget my master password?",
      a: "We cannot reset it due to zero-knowledge architecture. Set up recovery options like emergency contacts with wait periods, printable recovery kits, or secure key splits across devices.",
    },
    {
      q: "Is it safe to store passwords in a manager?",
      a: "Absolutely. Your data is encrypted locally, and only ciphertext syncs with servers. Even if our servers are compromised, your secrets remain protected.",
    },
    {
      q: "Are built-in browser password managers sufficient?",
      a: "While better than reusing passwords, dedicated managers offer breach monitoring, phishing protection, secure sharing, vault health scoring, and cross-platform support for TOTP and passkeys.",
    },
  ];

  return (
    <main className="pw-section" role="main" aria-labelledby="pw-heading">
      <h1 id="pw-heading" className="pw-heading" data-aos="zoom-in">
        Password Manager
      </h1>

      {sections.map((section, idx) => (
        <article
          key={idx}
          className={`pw-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          aria-labelledby={`section-title-${idx}`}
        >
          <div className="pw-media" data-aos="zoom-in-up">
            <img
              src={section.media.img}
              alt={`${section.title} illustration`}
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
          </div>

          <div className="pw-text" data-aos="fade-up">
            <h2 id={`section-title-${idx}`}>{section.title}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <ul className="pw-points">
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      <section className="pw-extra" data-aos="fade-up" aria-label="Quick setup checklist">
        <h2>Quick Setup Checklist</h2>
        <ul className="pw-checklist">
          {checklist.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="pw-faqs" data-aos="fade-up" aria-label="Frequently asked questions">
        <h2>FAQs</h2>
        {faqs.map((faq, i) => (
          <div className="pw-faq" key={i}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </section>

      <section className="pw-cta" data-aos="zoom-in" aria-label="Call to action for password manager">
        <h2>Upgrade Your Logins from Chaos to Control</h2>
        <p>
          Generate, store, autofill, and rotate credentials securely—with breach monitoring, two-factor
          authentication, and passkey support built-in.
        </p>
        <button className="pw-btn" aria-label="Enable Password Manager">
          Enable Password Manager
        </button>
      </section>
    </main>
  );
}
