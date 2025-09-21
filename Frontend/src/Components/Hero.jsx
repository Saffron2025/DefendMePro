import React, { useEffect, useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ScrollReveal from "./ScrollReveal";
import "../Styles/Hero.css";

export default function Hero() {
  const subtitleText =
    "DefendMePro shield from scams, identity theft, fraud, and digital traps that traditional security misses.";

  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (indexRef.current < subtitleText.length) {
        setDisplayedText((prev) => prev + subtitleText.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(intervalRef.current);
      }
    }, 50);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="hero-section">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>DefendMePro | Real-World Scam & Fraud Protection</title>
        <meta
          name="description"
          content="DefendMePro shields you from scams, identity theft, fraud, and digital traps that traditional security misses."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.defendmepro.com/" />

        {/* ✅ Open Graph / Social Media Tags */}
        <meta property="og:title" content="DefendMePro | Real-World Protection" />
        <meta
          property="og:description"
          content="Protect yourself from scams, fraud, and identity theft with DefendMePro."
        />
        <meta property="og:image" content="https://www.defendmepro.com/og-image.jpg" />
        <meta property="og:url" content="https://www.defendmepro.com/" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "DefendMePro",
            url: "https://www.defendmepro.com",
          })}
        </script>
      </Helmet>

      {/* ✅ Background Video with Poster */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="bg-video"
        aria-hidden="true"
        poster="/Images/hero-poster.jpg" // 👈 Add a relevant image in public folder
      >
        <source src="/Videos/HeroVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="overlay" aria-hidden="true"></div>

      {/* Main Content */}
      <Container className="hero-content text-center">
        {/* Title */}
        <ScrollReveal delay={0.1} direction="up">
          <h1
            className="hero-title"
            data-text="🛡️ PROTECTION BUILT FOR THE REAL WORLD"
          >
            🛡️ PROTECTION BUILT FOR THE REAL WORLD
          </h1>
        </ScrollReveal>

        {/* Subtitle with SEO-friendly content */}
        <ScrollReveal delay={0.3} direction="up">
          <p
            className="hero-subtitle"
            aria-label={subtitleText} // 👈 For screen readers & bots
          >
            {displayedText}
            <span className="cursor" aria-hidden="true">|</span>
          </p>

          {/* 👇 Non-JS fallback for crawlers */}
          <noscript>
            <p className="hero-subtitle">
              {subtitleText}
            </p>
          </noscript>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal delay={0.5} direction="up">
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/contact">
              <Button className="primary">Start Free Trial</Button>
            </Link>
            <Link to="/learn-more">
              <Button className="hero-btn secondary">Learn More</Button>
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
