import React, { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
import "aos/dist/aos.css";
import "../Styles/FallsShort.css";

export default function FallsShort() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const points = [
    {
      img: "/Images/FallsShort1.webp",
      title: "Pop-Up Scams Slip Through",
      text: "Fake full-screen pop-ups freeze your device and display urgent warnings with support numbers. Antivirus doesn’t block them, leaving users tricked into paying huge fake service fees.",
      eager: true, // First image loads eager
    },
    {
      img: "/Images/Refund.webp",
      title: "Refund & Impersonation Scams",
      text: "Cybercriminals impersonate Amazon, Microsoft, or your bank. They pressure you to act fast, but security tools don’t detect phone or voice scams.",
      eager: false,
    },
    {
      img: "/Images/TrustBank.webp",
      title: "Pixel-Perfect Fake Websites",
      text: "Phishing sites clone PayPal, banks, and more. Antivirus ignores them since no malware is downloaded, but credentials get stolen instantly.",
      eager: false,
    },
    {
      img: "/Images/Urgent.webp",
      title: "Remote Access Traps",
      text: "Tools like AnyDesk and TeamViewer are useful, but scammers misuse them to hijack your device. Antivirus doesn’t flag these apps as dangerous.",
      eager: false,
    },
    {
      img: "/Images/Antivirus2.webp",
      title: "Always Behind the Curve",
      text: "Traditional antivirus relies on outdated virus signatures. Scammers innovate daily — by the time updates roll out, victims are already trapped.",
      eager: false,
    },
  ];

  return (
    <section
      className="falls-section"
      aria-labelledby="falls-heading"
      role="region"
    >
      <Helmet>
        <title>Why Traditional Security Falls Short | Saffron Shield</title>
        <meta
          name="description"
          content="Understand why traditional antivirus and firewalls fail against modern scams and social engineering attacks. Learn how scammers bypass security software."
        />
        <link
          rel="canonical"
          href="https://saffronguru.com/resources?section=falls-short"
        />
      </Helmet>

      <h1 id="falls-heading" className="falls-heading" data-aos="zoom-in">
        Why Traditional Security Falls Short
      </h1>

      <div className="falls-grid">
        {points.map((item, index) => (
          <article
            key={index}
            className={`falls-card ${index % 2 !== 0 ? "reverse" : ""}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            aria-labelledby={`point-title-${index}`}
          >
            <div className="falls-img" data-aos="zoom-in-up">
              <img
                src={item.img}
                alt={`${item.title} illustration`}
                loading={item.eager ? "eager" : "lazy"} // Eager for first image only
                decoding="async"
                width="600"
                height="400"
                style={{ display: "block", maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="falls-content" data-aos="fade-up">
              <h2 id={`point-title-${index}`}>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <aside className="falls-warning" data-aos="fade-up" aria-label="Core problem explanation">
        <h2>The Core Problem</h2>
        <p>
          Antivirus and firewalls defend against <strong>code-based attacks</strong>,
          but scammers exploit <strong>human behavior</strong>. They manipulate fear,
          urgency, and trust — factors no software update can fix.
        </p>
        <p>
          The result? People lose billions every year despite having the ‘best security’ installed.
          Traditional tools protect files, not decisions.
        </p>
      </aside>
    </section>
  );
}
