import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/FallsShort.css";

export default function FallsShort() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const points = [
    {
      img: "/Images/FallsShort1.webp",
      title: "🚫 Pop-Up Scams Slip Through",
      text: "Fake full-screen pop-ups freeze your device and display urgent warnings with support numbers. Antivirus doesn’t block them, leaving users tricked into paying huge fake service fees.",
    },
    {
      img: "/Images/Refund.webp",
      title: "📞 Refund & Impersonation Scams",
      text: "Cybercriminals now impersonate Amazon, Microsoft, or your bank. They convince you to act fast, but security tools don’t detect phone or voice scams.",
    },
    {
      img: "/Images/TrustBank.webp",
      title: "🌐 Pixel-Perfect Fake Websites",
      text: "Phishing sites clone PayPal, banks, and more. Antivirus ignores them since no ‘malware’ is downloaded, but credentials get stolen instantly.",
    },
    {
      img: "/Images/Urgent.webp",
      title: "🖥️ Remote Access Traps",
      text: "AnyDesk and TeamViewer are useful tools, but scammers misuse them to hijack your device. Antivirus doesn’t flag them as dangerous apps.",
    },
    {
      img: "/Images/Antivirus2.webp",
      title: "⏳ Always Behind the Curve",
      text: "Traditional antivirus relies on outdated virus signatures. Scammers innovate daily — by the time updates roll out, victims are already trapped.",
    },
  ];

  return (
    <section className="falls-section">
      <h1 className="falls-heading" data-aos="zoom-in">
        ❌ Why Traditional Security Falls Short
      </h1>

      <div className="falls-grid">
        {points.map((item, index) => (
          <div
            key={index}
            className={`falls-card ${index % 2 !== 0 ? "reverse" : ""}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="falls-img" data-aos="zoom-in-up">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </div>
            <div className="falls-content" data-aos="fade-up">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="falls-warning" data-aos="fade-up">
        <h2>⚠️ The Core Problem</h2>
        <p>
          Antivirus and firewalls defend against <strong>code-based attacks</strong>, 
          but scammers exploit <strong>human behavior</strong>. They play with fear, 
          urgency, and trust — things no software update can stop.
        </p>
        <p>
          Result? People lose billions every year despite having the ‘best security’
          installed. Traditional tools protect files, not decisions.
        </p>
      </div>
    </section>
  );
}
