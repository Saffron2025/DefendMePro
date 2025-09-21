import React, { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
import "aos/dist/aos.css";
import "../Styles/Reality.css";

export default function Reality() {
  useEffect(() => {
    AOS.init({ duration: 1100, once: true, easing: "ease-out-cubic" });

    // Manual image preloading for super fast load
    const imagesToPreload = [
      "/Images/CyberCrime.webp",
      "/Images/oldAmerican.webp",
      "/Images/Antivirus.webp",
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "The Reality in Numbers: Cybercrime and Scam Statistics 2024",
    description:
      "Explore the latest statistics on cybercrime losses, FBI complaints, senior fraud, and the limitations of traditional antivirus software in 2024.",
    image: [
      "https://saffronguru.com/Images/CyberCrime.webp",
      "https://saffronguru.com/Images/oldAmerican.webp",
      "https://saffronguru.com/Images/Antivirus.webp",
    ],
    author: {
      "@type": "Organization",
      name: "Saffron Shield",
    },
    publisher: {
      "@type": "Organization",
      name: "Saffron Shield",
      logo: {
        "@type": "ImageObject",
        url: "https://saffronguru.com/Images/logo.png",
      },
    },
    datePublished: "2024-01-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://saffronguru.com/resources?section=reality",
    },
  };

  return (
    <section className="reality-section" aria-labelledby="reality-heading">
      <Helmet>
        <title>The Reality in Numbers | Saffron Shield</title>
        <meta
          name="description"
          content="Discover critical 2024 cybercrime statistics including global losses, FBI complaints, senior fraud, and how modern scams bypass antivirus software."
        />
        <link rel="canonical" href="https://saffronguru.com/resources?section=reality" />
        <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>

        {/* Preload important images for fast loading */}
        <link rel="preload" as="image" href="/Images/CyberCrime.webp" />
        <link rel="preload" as="image" href="/Images/oldAmerican.webp" />
        <link rel="preload" as="image" href="/Images/Antivirus.webp" />
      </Helmet>

      {/* Background FX */}
      <span className="fx fx-grid" aria-hidden="true" />
      <span className="fx fx-aurora aurora-1" aria-hidden="true" />
      <span className="fx fx-aurora aurora-2" aria-hidden="true" />
      <span className="fx fx-aurora aurora-3" aria-hidden="true" />
      <span className="fx fx-scanlines" aria-hidden="true" />

      <h1 id="reality-heading" className="reality-heading" data-aos="fade-up">
        The Reality in Numbers
      </h1>

      {/* Block 1 - Cybercrime Losses */}
      <article className="reality-block glass" data-aos="fade-right" aria-labelledby="cybercrime-title">
        <div className="reality-media">
          <img
            src="/Images/CyberCrime.webp"
            alt="Illustration representing global cybercrime losses"
            loading="eager"
            decoding="async"
            width="900"
            height="600"
          />
          <span className="neon-ring" aria-hidden="true" />
        </div>
        <div className="reality-text">
          <div className="chip">Global Impact</div>
          <h2 id="cybercrime-title">$16.6 Billion+ Global Cybercrime Losses</h2>
          <p>
            In 2024, cybercrime caused over <strong>$16.6 billion</strong> in reported losses — a
            staggering <strong>33% increase</strong> compared to the previous year. Experts
            estimate the actual figure may be 3 to 4 times higher due to underreporting.
          </p>
          <p>
            These attacks affected not only individuals but also businesses, hospitals, and schools,
            causing significant operational disruptions worldwide.
          </p>
        </div>
      </article>

      {/* Block 2 - FBI IC3 Complaints */}
      <article
        className="reality-block glass reverse highlight"
        data-aos="fade-left"
        aria-labelledby="fbi-ic3-title"
      >
        <div className="reality-media">
          <video
            src="/Videos/Complaints.mp4"
            controls
            muted
            loop
            playsInline
            preload="metadata"
            className="reality-video"
            aria-label="Video displaying FBI IC3 complaint statistics"
          />
          <span className="neon-ring ring-blue" aria-hidden="true" />
        </div>
        <div className="reality-text">
          <div className="chip chip-blue">FBI IC3</div>
          <h2 id="fbi-ic3-title">859,532 FBI IC3 Complaints in 2024</h2>
          <p>
            The FBI's Internet Crime Complaint Center (IC3) received over <strong>859,000 complaints</strong>{" "}
            in 2024 — averaging more than <strong>2,300 cases daily</strong>.
          </p>
          <p>
            Scams ranging from fake refunds to tech-support pop-ups are evolving faster than authorities
            can respond.
          </p>
          <p className="quote">
            “Cybercrime is no longer rare — it’s part of everyday life.” — <em>Cybercrime Report 2024</em>
          </p>
        </div>
      </article>

      {/* Block 3 - Senior Fraud Losses */}
      <article className="reality-block glass" data-aos="fade-right" aria-labelledby="senior-loss-title">
        <div className="reality-media">
          <img
            src="/Images/oldAmerican.webp"
            alt="Older adult using a digital device"
            loading="eager"
            decoding="async"
            width="900"
            height="600"
          />
          <span className="neon-ring ring-purple" aria-hidden="true" />
        </div>
        <div className="reality-text">
          <div className="chip chip-purple">Seniors 60+</div>
          <h2 id="senior-loss-title">$4.9 Billion Lost by Seniors (60+)</h2>
          <p>
            Older adults lost a record <strong>$4.9 billion</strong> in 2024 — a <strong>43% increase</strong>{" "}
            over 2023.
          </p>
          <p>
            Common scams targeting seniors include romance fraud, grandparent scams, and lottery cons,
            exploiting trust and isolation.
          </p>
        </div>
      </article>

      {/* Block 4 - Antivirus Bypass */}
      <article className="reality-block glass reverse" data-aos="fade-left" aria-labelledby="antivirus-bypass-title">
        <div className="reality-media">
          <img
            src="/Images/Antivirus.webp"
            alt="Traditional antivirus software interface"
            loading="eager"
            decoding="async"
            width="900"
            height="600"
          />
          <span className="neon-ring ring-cyan" aria-hidden="true" />
        </div>
        <div className="reality-text">
          <div className="chip chip-cyan">Modern Scams</div>
          <h2 id="antivirus-bypass-title">98% of Scams Bypass Traditional Antivirus</h2>
          <p>
            Traditional antivirus software was designed to stop malware, not scams.
            An estimated <strong>98% of modern scams</strong> such as phishing and fake login pages
            completely evade antivirus detection.
          </p>
          <p>
            Attackers now rely on social engineering to exploit <strong>user trust</strong> rather than technical vulnerabilities.
          </p>
        </div>
      </article>
    </section>
  );
}
