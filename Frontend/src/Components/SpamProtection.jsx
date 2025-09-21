import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/spamprotection.css";

// Images ko sahi path ke saath import karein
import CallSMS from "../../public/Spam/CallSMS.webp";
import BrowserLevel from "../../public/Spam/BrowserLevel.webp";
import PopUpTrap from "../../public/Spam/PopUpTrap.webp";
import AbuseBroker from "../../public/Spam/AbuseBroker.webp";
import RefundTrap from "../../public/Spam/RefundTrap.webp";
import LiveScamAlert from "../../public/Spam/LiveScamAlert.webp";
import AccountTakeover from "../../public/Spam/AccountTakeover.webp";
import FamilyMode from "../../public/Spam/FamilyMode.webp";

export default function SpamProtection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: CallSMS },
      title: "📵 Call & SMS Shield",
      body: [
         "Robocalls, spoofed caller IDs, and fake ‘bank/amazon’ agents—our first targets. We score numbers for risk using known bad ranges and live threat feeds.",
        "High-risk calls get silenced; medium-risk show context banners; unknown calls get one-tap lookup. Scam SMS links are auto-scanned and quarantined."
      ],
      points: [
        "Real-time number reputation & spoof-patterns",
        "Auto-silence + voicemail transcription review",
        "SMS link sandbox & quarantine"
      ]
    },
    {
      media: { img: BrowserLevel },
      title: "🌐 Browser-Level Phishing Defense",
      body: [
         "Fake login pages, invoice scams, and urgent pop-ups—our browser guard catches them before they load.",
        "URL lookalike detection, brand impersonation signals, and form-guard locks credential fields until domain verification."
      ],
      points: [
        "Homograph/lookalike domain warnings",
        "Brand logo & layout similarity signals",
        "Form-guard: creds only on verified domains"
      ]
    },
    {
      media: { img: PopUpTrap },  // Changed from video to img
      title: "🪤 Pop-Up Trap & Screen-Locker Breaker",
      body: [
         "'Your PC is infected—call now!' full-screen popups? We neutralize their event traps, unlock cursor/keyboard, and provide safe exit.",
        "Afterward, a forensic snapshot and auto-report submission helps protect you and others in the future."
      ],
      points: [
        "Window hijack/exit-trap neutralization",
        "Audio alarm & fake support banners block",
        "One-tap close + evidence snapshot"
      ]
    },
    {
      media: { img: AbuseBroker },
      title: "🧰 Remote-Access Abuse Blocker",
      body: [
         "Legit remote tools like AnyDesk/TeamViewer/Chrome Remote can be misused in scams. Unknown tools are blocked; known tools require consent sheets and session recording.",
        "Remote control auto-pauses on payment pages; clipboard/keyboard injection is detected and stopped."
      ],
      points: [
        "Unknown RA executables = block/quarantine",
        "Consent + purpose sheet for approved tools",
        "Payment-time remote lock & injection guard"
      ]
    },
    {
      media: { img: RefundTrap },
      title: "💸 Safe-Pay & Refund-Trap Defense",
      body: [
                "Refund traps trick you into claiming ‘extra refunds’ and withdrawing wire/crypto funds. Safe-Pay card overlays confirm receiver identity, exact amount, and memo.",
        "Red-flag banners on crypto/FT transfer screens show wallet age, risk score, mixer links, and blacklisted tags."
      ],
      points: [
        "Receiver/domain verification overlays",
        "Wire/UPI/ACH memo sanity checks",
        "Crypto wallet risk score & warnings"
      ]
    },
    {
      media: { img: LiveScamAlert },
      title: "📢 Live Scam Alerts & Micro-Lessons",
      body: [
        "We push new scam patterns into Alerts Hub: 30-second reads, screenshot examples, and ‘what to say / what not to say’ scripts.",
        "Scenario-based micro-lessons help you quickly train on bank calls, courier OTP scams, romance/investment pitches, and more."
      ],
      points: [
        "30-sec playbooks with scripts",
        "Regional language variants",
        "One-tap report & share with family"
      ]
    },
    {
      media: { img: AccountTakeover },
      title: "🔎 Identity & Account Takeover Signals",
      body: [
         "Suspicious password reset emails, recovery calls, SIM-swap patterns—we correlate these and provide proactive alerts.",
        "High-risk signals trigger auto-flows: password rotation, session revocation, 2FA upgrade, and recovery code safe-storage."
      ],
      points: [
        "ATO correlation (email + telco + device)",
        "Auto ‘rotate & revoke’ flows",
        "2FA/passkeys nudges with checklists"
      ]
    },
    {
      media: { img: FamilyMode },
      title: "👪 Family Mode & Senior Safety",
      body: [
          "Extra protection for parents/seniors: high-risk calls auto-divert to caregivers, remote access requires approval, and big purchases need verify-to-proceed.",
        "View family feed with alerts, missed scams, and guided suggestions—all with privacy-respecting summaries."
      ],
      points: [
        "Caregiver approvals for risky actions",
        "Spending & remote-access guardrails",
        "Privacy-preserving family summaries"
      ]
    }
  ];

  const checklist = [
     "Call/SMS Shield ON + auto-silence unknown high-risk calls.",
    "Browser Guard ON + Form-Guard for credentials.",
    "Remote-access approvals required; unknown tools blocked.",
    "Safe-Pay overlays on wire/UPI/crypto pages.",
    "Complete weekly Alerts Hub micro-lessons.",
    "Enable 2FA/passkeys on high-value accounts."
  ];

  const faqs = [
     {
      q: "Does traditional antivirus cover all this?",
      a: "No. Antivirus targets code; scams use psychology and social engineering. Scam Protection secures behavior and context."
    },
    {
      q: "Will genuine support calls get blocked?",
      a: "Genuine calls have low risk. You can still set allowlists/rules. Consent sheets ensure all remote steps are documented."
    },
    {
      q: "What about privacy in Family Mode?",
      a: "Family summaries are anonymized. Exact messages or content are not shared—only risk summaries and required actions."
    }
  ];

  return (
    <div className="sp-section">
      <h1 className="sp-heading" data-aos="zoom-in">
        ⚠️ Scam Protection
      </h1>

      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`sp-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="sp-media" data-aos="zoom-in-up">
            <img
              src={s.media.img}
              alt={s.title}
              loading="lazy"
              width="600"
              height="400"
              srcSet={`
                ${s.media.img.replace(".webp", "-small.webp")} 400w,
                ${s.media.img.replace(".webp", "-medium.webp")} 800w,
                ${s.media.img} 1200w
              `}
              sizes="(max-width: 600px) 100vw, 600px"
            />
          </div>

          <div className="sp-text" data-aos="fade-up">
            <h2>{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="sp-points">
              {s.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Checklist */}
      <div className="sp-extra" data-aos="fade-up">
        <h2>✅ Quick Protection Checklist</h2>
        <ul className="sp-checklist">
          {checklist.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      <div className="sp-faqs" data-aos="fade-up">
        <h2>❓ FAQs</h2>
        {faqs.map((f, i) => (
          <div className="sp-faq" key={i}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="sp-cta" data-aos="zoom-in">
        <h2>Stop scams before they start.</h2>
        <p>
          Calls, texts, popups, phishing pages, remote-access traps—sab par layered defense.
          Activate Scam Protection and breathe easy.
        </p>
        <button className="sp-btn">Enable Scam Protection</button>
      </div>
    </div>
  );
}