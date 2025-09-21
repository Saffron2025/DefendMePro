import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
import "aos/dist/aos.css";
import "../Styles/Resources.css";

export default function Resources() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  const sections = {
    reality: {
      title: "📊 The Reality in Numbers",
      description: "Explore eye-opening statistics on scams, cybercrime, and digital threats in 2024.",
      content: [
        { img: "/Images/CyberCrime.webp", text: "Cybercrime caused over $16.6B in losses in 2024 — a 33% increase from 2023." },
        { img: "/Images/reality2.png", text: "Over 859,000 complaints were reported to the FBI's IC3 in 2024." },
        { img: "/Images/reality3.png", text: "Elderly victims (60+) lost $4.9B in 2024, up 43% year-over-year." },
        { img: "/Images/reality4.png", text: "98% of scams now bypass traditional antivirus solutions." }
      ]
    },
    // other sections...
    support: {
      title: "💬 Live Support (7 Days a Week)",
      description: "Get real help from real humans every day — no chatbots, no waiting.",
      content: [
        { img: "/Images/support1.png", text: "Live support from human experts — not chatbots." },
        { img: "/Images/support2.png", text: "Phone, chat, or remote assistance available 7 days a week." },
        { img: "/Images/support3.png", text: "Whether it's a pop-up, suspicious email, or scam — we're here." }
      ]
    }
    // add remaining sections here if needed
  };

  const data = sections[section];

  if (!data) {
    return (
      <main className="resources-page" aria-label="Resources">
        <Helmet>
          <title>Resources | Saffron Shield</title>
          <meta name="description" content="Explore educational content, scam alerts, and digital protection resources with Saffron Shield." />
        </Helmet>
        <h2 className="not-found">⚠️ Please select a valid resource from the menu.</h2>
      </main>
    );
  }

  return (
    <main className="resources-page" aria-labelledby="resource-title">
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>{data.title} | Saffron Shield</title>
        <meta name="description" content={data.description} />
        <link rel="canonical" href={`https://saffronguru.com/resources?section=${section}`} />
      </Helmet>

      {/* ✅ Section Title */}
      <h1 id="resource-title" className="resources-title" data-aos="zoom-in">
        {data.title}
      </h1>

      {/* ✅ Content Blocks */}
      {data.content.map((block, index) => (
        <article
          key={index}
          className={`resource-block ${index % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="resource-img" data-aos="zoom-in-up">
            <img
              src={block.img}
              alt={`${data.title} visual ${index + 1}`}
              loading="lazy"
              width="100%"
              height="auto"
            />
          </div>
          <div className="resource-text" data-aos="fade-up">
            <p>{block.text}</p>
          </div>
        </article>
      ))}
    </main>
  );
}
