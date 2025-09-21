import React, { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async"; // Added for SEO metadata
import "aos/dist/aos.css";
import "../Styles/BuiltDMP.css";

export default function BuiltDMP() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      img: "/Images/dmp1.webp",
      title: "Real Protection for Modern Scams",
      text: [
        "Traditional security focuses only on malware detection. DefendMePro is designed to stop real-world scams that antivirus software often misses.",
        "We block fake websites, refund scams, phishing login pages, and deceptive full-screen pop-ups that trick users into calling fake support numbers.",
        "Our protection updates weekly to keep up with evolving scam tactics faster than signature-based antivirus updates.",
      ],
    },
    {
      img: "/Images/Backend.webp",
      title: "Backed by Human Cybersecurity Experts",
      text: [
        "When you’re uncertain, you don’t need a bot—you need real human experts. Our dedicated team is available seven days a week.",
        "From suspicious phone calls and unusual pop-ups to risky emails, we provide real-time guidance so you never face scammers alone.",
        "Smart security protects people—not just files.",
      ],
    },
    {
      img: "/Images/WeeklyScam.webp",
      title: "Weekly Scam Playbooks for Awareness",
      text: [
        "DefendMePro delivers a fresh Scam Playbook every week inside the app and via email.",
        "We monitor the latest fraud trends nationwide and explain them in plain language, so you know what to watch out for before scammers reach your inbox or phone.",
        "No jargon—just actionable advice to keep you safe from evolving scams.",
      ],
    },
    {
      img: "/Images/Malware.webp",
      title: "Beyond Traditional Malware Protection",
      text: [
        "98% of modern scams bypass antivirus software because they don’t rely on malware. Instead, they exploit human trust, urgency, and fear.",
        "DefendMePro addresses the psychological tactics used in cybercrime—like fake Microsoft calls, fraudulent bank emails, and urgent pop-up warnings.",
        "By combining technology with education and human support, we protect where traditional models fail.",
      ],
    },
  ];

  return (
    <main className="built-section" aria-labelledby="built-heading" role="main">
      <Helmet>
        <title>Why We Built DefendMePro | Saffron Shield</title>
        <meta
          name="description"
          content="Discover why DefendMePro was created to protect against modern scams that traditional antivirus misses. Learn about our human expert support, scam playbooks, and adaptive protection."
        />
        <link
          rel="canonical"
          href="https://saffronguru.com/resources?section=built-dmp"
        />
      </Helmet>

      <h1 id="built-heading" className="built-heading" data-aos="zoom-in">
        Why We Built DefendMePro
      </h1>

      {sections.map((item, index) => (
        <article
          key={index}
          className={`built-block ${index % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          aria-labelledby={`section-title-${index}`}
        >
          <div className="built-img" data-aos="zoom-in-up">
            <img
              src={item.img}
              alt={`${item.title} illustration`}
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
          </div>
          <div className="built-text" data-aos="fade-up">
            <h2 id={`section-title-${index}`}>{item.title}</h2>
            {item.text.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </article>
      ))}

      <section className="built-extra" data-aos="fade-up" aria-label="Our Mission">
        <h2>Our Mission</h2>
        <p>
          DefendMePro was created because scams don’t just steal data—they exploit trust.
          Seniors, families, and businesses lose billions each year because traditional antivirus tools are not designed for this type of threat.
        </p>
        <p>
          Our mission is to close this gap by combining cutting-edge technology with human expertise, ensuring everyone stays one step ahead of cybercriminals.
          Protection should extend beyond code—it should safeguard people.
        </p>
      </section>
    </main>
  );
}
