import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Reality.css";

export default function Reality() {
  useEffect(() => {
    AOS.init({ duration: 1100, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="reality-section" aria-labelledby="reality-heading">
      {/* Background FX */}
      <span className="fx fx-grid" aria-hidden="true" />
      <span className="fx fx-aurora aurora-1" aria-hidden="true" />
      <span className="fx fx-aurora aurora-2" aria-hidden="true" />
      <span className="fx fx-aurora aurora-3" aria-hidden="true" />
      <span className="fx fx-scanlines" aria-hidden="true" />

      <h1 id="reality-heading" className="reality-heading" data-aos="fade-up">
        💻 The Reality in Numbers
      </h1>

      {/* Block 1 - Cybercrime Losses */}
      <article className="reality-block glass" data-aos="fade-right">
        <div className="reality-media">
          <img
            src="/Images/CyberCrime.webp"
            alt="Global cybercrime losses illustration"
            loading="eager" // 👈 Load this image immediately
            decoding="async" // 👈 Allow browser to decode asynchronously
            width="900"
            height="600"
          />
          <span className="neon-ring" aria-hidden="true" />
        </div>
        <div className="reality-text">
          <div className="chip">Global Impact</div>
          <h2>$16.6B+ Global Cybercrime Losses</h2>
          <p>
            In 2024, cybercrime caused over <strong>$16.6 billion</strong> in
            reported losses — a shocking <strong>33% increase</strong> from the
            previous year. Analysts warn the real figure may be 3–4x higher due
            to unreported cases.
          </p>
          <p>
            These scams don’t just impact individuals — entire businesses,
            hospitals, and even schools were forced offline because of attacks.
          </p>
        </div>
      </article>

      {/* Block 2 - FBI IC3 */}
      <article className="reality-block glass reverse highlight" data-aos="fade-left">
        <div className="reality-media">
          <video
            src="/Videos/Complaints.mp4"
            controls
            muted
            loop
            playsInline
            preload="metadata"
            className="reality-video"
            aria-label="FBI IC3 complaints video"
          />
          <span className="neon-ring ring-blue" aria-hidden="true" />
        </div>
        <div className="reality-text">
          <div className="chip chip-blue">FBI IC3</div>
          <h2>859,532 FBI IC3 Complaints</h2>
          <p>
            The FBI’s Internet Crime Complaint Center (IC3) received{" "}
            <strong>over 859,000 complaints</strong> in 2024 — that’s{" "}
            <strong>2,300+ cases daily</strong>.
          </p>
          <p>
            From fake refund scams to tech-support pop-ups, scammers are moving
            faster than regulators and law enforcement can respond.
          </p>
          <p className="quote">
            “These numbers show cybercrime is no longer rare — it’s part of
            everyday life.” — <em>Cybercrime Report 2024</em>
          </p>
        </div>
      </article>

      {/* Block 3 - Seniors Loss */}
      <article className="reality-block glass" data-aos="fade-right">
        <div className="reality-media">
          <img
            src="/Images/oldAmerican.webp"
            alt="Older American looking at a device"
            loading="lazy" // 👈 Lazy load
            decoding="async"
            width="900"
            height="600"
          />
          <span className="neon-ring ring-purple" aria-hidden="true" />
        </div>
        <div className="reality-text">
          <div className="chip chip-purple">Seniors 60+</div>
          <h2>$4.9B Lost by Seniors (60+)</h2>
          <p>
            Older Americans are losing more than ever. In 2024 alone, seniors
            lost <strong>$4.9 billion</strong> — a <strong>43% jump</strong>{" "}
            from 2023.
          </p>
          <p>
            Scammers prey on trust and isolation. Romance fraud, “grandparent
            scams,” and lottery traps remain the top methods targeting older
            victims.
          </p>
        </div>
      </article>

      {/* Block 4 - Antivirus Bypass */}
      <article className="reality-block glass reverse" data-aos="fade-left">
        <div className="reality-media">
          <img
            src="/Images/Antivirus.webp"
            alt="Traditional antivirus interface"
            loading="lazy"
            decoding="async"
            width="900"
            height="600"
          />
          <span className="neon-ring ring-cyan" aria-hidden="true" />
        </div>
        <div className="reality-text">
          <div className="chip chip-cyan">Modern Scams</div>
          <h2>98% of Scams Bypass Antivirus</h2>
          <p>
            Traditional antivirus was built to stop viruses — not scams.{" "}
            <strong>98% of modern scams</strong> (phishing, fake logins, refund
            traps) bypass antivirus completely.
          </p>
          <p>
            Scammers don’t need malware anymore. They just need{" "}
            <strong>your trust</strong>.
          </p>
        </div>
      </article>
    </section>
  );
}
