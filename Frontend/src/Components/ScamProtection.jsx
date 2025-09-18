import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/ScamProtection.css";

export default function ScamProtection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/Images//CallSMSFraud.webp" },
      title: "📱 Call & SMS Scam Shield",
      points: [
        "Known scam numbers auto-silenced. Unknown callers analyzed with behavioral heuristics.",
        "Smishing (SMS phishing) patterns detected—short links, payment lures, fake OTP traps.",
        "Real-time nudge: “Pause & Verify” cards when a risky call or text appears.",
      ],
      body: [
        "Scammers rely on urgency. We slow the moment down with clear, on-screen guidance and a one-tap ‘Verify’ option.",
        "Our signals combine crowd intel + carrier lookups + velocity analysis to stop repeat scam waves in your area.",
      ],
    },
    {
      media: { img: "/Images/BrowserLevel.webp" },
      title: "🌐 Browser-Level Phishing Protection",
      points: [
        "Realtime domain risk scoring: lookalike URLs, brand impersonation, fresh-registered domains.",
        "On-page trap detection: fake captcha overlays, pixel-perfect login clones, support-chat imposters.",
        "One-click quarantine: suspicious tab gets sandboxed with copy/paste disabled.",
      ],
      body: [
        "Phishing beats antivirus because it tricks people—not machines. We flag visual and linguistic cues that typical blockers miss.",
        "Every warning card explains the ‘why’ in plain language, so users learn while staying safe.",
      ],
    },
    {
      media: { img: "/Images/SystemHardening.webp" },
      title: "🛠️ System Hardening Against Remote Takeovers",
      points: [
        "Remote tools (AnyDesk/TeamViewer) blocked by default unless explicitly allowed.",
        "Clipboard & keystroke protection on risky screens (refund forms, wallet imports).",
        "Pop-up freeze breaker: closes fake full-screen alerts + blocks rogue scripts.",
      ],
      body: [
        "Social-engineering often ends in a remote session. We cut that path proactively while preserving legit IT support flows with whitelisting.",
      ],
    },
    {
      media: { video: "/Videos/ScamDemo.mp4", poster: "/Images/LIveDemo.webp" },
      title: "🎥 Live Demo: How a Refund Scam Tries to Hook You",
      points: [
        "Fake refund overpayment → pressure to ‘return’ money via gift cards/crypto.",
        "Fake bank portal screensharing to force urgent action.",
        "We intervene at each step with contextual blocks & human hand-off.",
      ],
      body: [
        "Watch how DefendMePro intercepts the flow: URL warns, clipboard locks, and a human expert pops in if you request help.",
      ],
    },
  ];

  const extras = [
    {
      title: "📢 Real-Time Scam Alerts, Localized",
      text: [
        "Scam waves spread city-by-city. Our alerts hub highlights what’s trending near you: fake courier dues, power bill scams, ed-loan waivers.",
        "Pick channels you prefer—email, push, or in-app cards. Zero spam, only actionable warnings.",
      ],
    },
    {
      title: "🧭 Decision Guardrails, Not Just Blocks",
      text: [
        "We don’t just say ‘No’. We show safer alternates: verified support numbers, official payment paths, and a 30-second checklist.",
        "Goal: protect the moment of trust. You stay in control—only better informed.",
      ],
    },
    {
      title: "👥 Human Experts, 7 Days a Week",
      text: [
        "Unsure? Tap ‘Ask an Expert’. A trained specialist guides you—no scripts, no bots.",
        "From verifying emails to walking you out of a remote-access trap, we’ve got your back.",
      ],
    },
  ];

  return (
    <div className="scam-section">
      <h1 className="scam-heading" data-aos="zoom-in">
        ⚠️ Scam Protection
      </h1>

      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`scam-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="scam-media" data-aos="zoom-in-up">
            {s.media.video ? (
              <video
                className="scam-video"
                src={s.media.video}
                poster={s.media.poster}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={s.media.img}
                alt={s.title}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            )}
          </div>

          <div className="scam-text" data-aos="fade-up">
            <h2>{s.title}</h2>
            <ul className="scam-points">
              {s.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
            {s.body.map((b, j) => (
              <p key={j}>{b}</p>
            ))}
          </div>
        </div>
      ))}

      <div className="scam-extra-grid">
        {extras.map((e, i) => (
          <div
            className="scam-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            <h3>{e.title}</h3>
            {e.text.map((t, k) => (
              <p key={k}>{t}</p>
            ))}
          </div>
        ))}
      </div>

      <div className="scam-cta" data-aos="zoom-in">
        <h2>Stay two steps ahead of scammers.</h2>
        <p>
          Enable Scam Protection, turn on Alerts Hub, and add one-tap Expert
          Help. Small guardrails at the right moment prevent big losses.
        </p>
        <button className="scam-btn">Enable Protection</button>
      </div>
    </div>
  );
}
