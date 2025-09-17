import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/BuiltDMP.css";

export default function BuiltDMP() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      img: "/Images/dmp1.webp",
      title: "🛡️ Real Protection for Real Scams",
      text: [
        "Traditional security only looks for malware. DefendMePro was built to stop real-world scams that antivirus completely misses.",
        "We block fake websites, refund scams, phishing login pages, and full-screen pop-ups designed to trick you into calling fake support numbers.",
        "Our protection adapts weekly to new scam trends, because scammers evolve faster than signature updates."
      ],
    },
    {
      img: "/Images/Backend.webp",
      title: "👨‍💻 Backed by Real Human Experts",
      text: [
        "When you’re unsure, you don’t need a bot — you need a real expert. Our team of specialists is available 7 days a week.",
        "From suspicious phone calls and strange pop-ups to risky emails, we guide you in real-time so you never face scammers alone.",
        "Smart security means protecting people, not just files."
      ],
    },
    {
      img: "/Images/WeeklyScam.webp",
      title: "📘 Weekly Scam Playbooks",
      text: [
        "Every week, DefendMePro delivers a fresh Scam Playbook directly inside the app and by email.",
        "We track the latest fraud trends across the country and explain them in simple language, so you know what to watch for before it hits your inbox or phone.",
        "No jargon. Just practical advice to stay safe against evolving scams."
      ],
    },
    {
      img: "/Images/Malware.webp",
      title: "⚡ Beyond Malware Protection",
      text: [
        "98% of modern scams bypass antivirus because they don’t rely on malware. They exploit human trust, urgency, and fear.",
        "DefendMePro is designed for the psychological side of cybercrime — the fake Microsoft call, the fraudulent bank email, the urgent pop-up warning.",
        "By combining technology with education and human guidance, we deliver protection where old models fail."
      ],
    },
  ];

  return (
    <div className="built-section">
      <h1 className="built-heading" data-aos="zoom-in">
        🛡️ Why We Built DefendMePro
      </h1>

      {sections.map((item, index) => (
        <div
          key={index}
          className={`built-block ${index % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="built-img" data-aos="zoom-in-up">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="built-text" data-aos="fade-up">
            <h2>{item.title}</h2>
            {item.text.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      ))}

      {/* Extra mission section for page length */}
      <div className="built-extra" data-aos="fade-up">
        <h2>🚀 Our Mission</h2>
        <p>
          DefendMePro exists because scams don’t just steal data — they exploit trust.
          Seniors, families, and even businesses are losing billions every year because
          traditional antivirus tools were never designed for this type of crime.
        </p>
        <p>
          Our mission is to close that gap: to combine cutting-edge technology with
          human expertise, ensuring that every person can stay one step ahead of modern
          cybercriminals. Protection shouldn’t stop at code — it should protect people.
        </p>
      </div>
    </div>
  );
}
