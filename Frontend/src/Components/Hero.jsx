import React, { useEffect, useState, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import "../Styles/Hero.css";

export default function Hero() {
  const subtitle =
    "DefendMePro shields you from scams, identity theft, fraud, and digital traps that traditional security misses.";

  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0); // ✅ safe index tracker
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (indexRef.current < subtitle.length) {
        setDisplayedText((prev) => prev + subtitle.charAt(indexRef.current));
        indexRef.current += 1;
      } else {
        clearInterval(intervalRef.current);
      }
    }, 50);

    return () => {
      clearInterval(intervalRef.current); // ✅ cleanup properly
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/Videos/HeroVideo.mp4" type="video/mp4" />
      </video>
      <div className="overlay"></div>

      {/* Content */}
      <Container className="hero-content text-center">
        {/* Title */}
        <ScrollReveal delay={0.1} direction="up">
          <h1 className="hero-title" data-text="🛡️ PROTECTION BUILT FOR THE REAL WORLD">
  🛡️ PROTECTION BUILT FOR THE REAL WORLD
</h1>

        </ScrollReveal>

        {/* Subtitle typing effect */}
        <ScrollReveal delay={0.3} direction="up">
          <p className="hero-subtitle">
            {displayedText}
            <span className="cursor">|</span>
          </p>
        </ScrollReveal>

        {/* Buttons */}
        <ScrollReveal delay={0.5} direction="up">
          <div className="d-flex gap-3 justify-content-center">
           <Link to="/Contact">
  <Button className="hero-btn primary">Start Free Trial</Button>
</Link>

<Link to="/learn-More">
  <Button className="hero-btn secondary">Learn More</Button>
</Link>

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
