import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/spamprotection.css";

export default function SpamProtection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/Spam/CallSMS.webp" },
      title: "📵 Call & SMS Shield",
      body: [
        "Robocalls, spoofed caller IDs, aur fake ‘bank/amazon’ agents—sabse pehle inhi par strike. Hum known bad ranges aur live threat feeds se numbers ko risk-score karte hain.",
        "High-risk calls silent ho jate hain; medium-risk par context banner; unknown par one-tap lookup. Scam SMS me links auto-scan ke saath quarantine."
      ],
      points: [
        "Real-time number reputation & spoof-patterns",
        "Auto-silence + voicemail transcription review",
        "SMS link sandbox & quarantine"
      ]
    },
    {
      media: { img: "/Spam/BrowserLevel.webp" },
      title: "🌐 Browser-Level Phishing Defense",
      body: [
        "Fake login pages, invoice scams, aur ‘urgent’ popups—browser guard inhe resolve hone se pehle hi pakad leta hai.",
        "URL lookalike detection, brand impersonation signals, form-guard (credential fields lock jab tak domain verify na ho)."
      ],
      points: [
        "Homograph/lookalike domain warnings",
        "Brand logo & layout similarity signals",
        "Form-guard: creds only on verified domains"
      ]
    },
    {
      media: { video: "/Videos/PopupTrapDemo.mp4", poster: "/Spam/PopUpTrap.webp" },
      title: "🪤 Pop-Up Trap & Screen-Locker Breaker",
      body: [
        "‘Your PC is infected—call now!’ type full-screen popups? We kill their event-traps, unlock cursor/keyboard, aur safe exit provide karte hain.",
        "Iske baad forensic snapshot + domain/report auto-submit ho jata hai taaki aap aur users future me protected rahen."
      ],
      points: [
        "Window hijack/exit-trap neutralization",
        "Audio alarm & fake support banners block",
        "One-tap close + evidence snapshot"
      ]
    },
    {
      media: { img: "/Spam/AbuseBroker.webp" },
      title: "🧰 Remote-Access Abuse Blocker",
      body: [
        "AnyDesk/TeamViewer/Chrome Remote—legit tools bhi scam me misused hote hain. Unknown RA tools block, known tools par consent sheet + session recording prompt.",
        "Payment pages ke dauran remote control auto-pause; clipboard/keyboard injection detect & stop."
      ],
      points: [
        "Unknown RA executables = block/quarantine",
        "Consent + purpose sheet for approved tools",
        "Payment-time remote lock & injection guard"
      ]
    },
    {
      media: { img: "/Spam/RefundTrap.webp" },
      title: "💸 Safe-Pay & Refund-Trap Defense",
      body: [
        "Refund traps aapse ‘extra refund’ claim kara ke wire/crypto nikalwate hain. Safe-Pay card overlays confirm receiver identity, exact amount & memo.",
        "Crypto/FT transfer screens par red-flag banners: fresh wallet age, risk score, mixer links, blacklisted tags."
      ],
      points: [
        "Receiver/domain verification overlays",
        "Wire/UPI/ACH memo sanity checks",
        "Crypto wallet risk score & warnings"
      ]
    },
    {
      media: { img: "/Spam/LiveScamAlert.webp" },
      title: "📢 Live Scam Alerts & Micro-Lessons",
      body: [
        "Naye scam patterns ko hum Alerts Hub me push karte hain: 30-second reads, screenshot examples, aur ‘what to say / what not to say’ scripts.",
        "Aap scenario-based micro-lessons se quickly train ho jate ho—bank calls, courier OTP scams, romance/investment pitches, sab covered."
      ],
      points: [
        "30-sec playbooks with scripts",
        "Regional language variants",
        "One-tap report & share with family"
      ]
    },
    {
      media: { img: "/Spam/AccountTakeover.webp" },
      title: "🔎 Identity & Account Takeover Signals",
      body: [
        "Suspicious password reset emails, recovery calls, SIM-swap patterns—hum inhe correlate karke proactive alerts dete hain.",
        "High-risk signals par auto-flow: passwords rotate, sessions revoke, 2FA upgrade, aur recovery codes safe-store."
      ],
      points: [
        "ATO correlation (email + telco + device)",
        "Auto ‘rotate & revoke’ flows",
        "2FA/passkeys nudges with checklists"
      ]
    },
    {
      media: { img: "/Spam/FamilyMode.webp" },
      title: "👪 Family Mode & Senior Safety",
      body: [
        "Parents/seniors ko extra guard: high-risk calls auto-divert to caregiver, remote-access attempts need approval, aur big purchases par verify-to-proceed.",
        "Aap family feed me dekh sakte ho: alerts, missed scams, aur guide suggestions—privacy-respecting summaries ke saath."
      ],
      points: [
        "Caregiver approvals for risky actions",
        "Spending & remote-access guardrails",
        "Privacy-preserving family summaries"
      ]
    }
  ];

  const checklist = [
    "Call/SMS Shield ON + auto-silence unknown high-risk.",
    "Browser Guard ON + Form-Guard for credentials.",
    "Remote-access approvals required; unknown tools blocked.",
    "Safe-Pay overlays on wire/UPI/crypto pages.",
    "Alerts Hub weekly micro-lessons complete karo.",
    "High-value accounts par 2FA/passkeys enable karo."
  ];

  const faqs = [
    {
      q: "Kya yeh sab traditional antivirus se cover ho jata hai?",
      a: "Nahi. Antivirus code ko target karta hai; scams psychology aur social engineering se attack karte hain. Scam Protection behavior + context ko secure karta hai."
    },
    {
      q: "Agar genuine support call ho to block to nahi ho jayega?",
      a: "Genuine calls par risk low hota hai. Phir bhi, aap allowlist/rules set kar sakte ho. Consent sheets ensure karti hain ki koi bhi remote step documented ho."
    },
    {
      q: "Family Mode me privacy ka kya?",
      a: "Family summaries anonymized hoti hain. Exact messages/contents share nahi hote—sirf risk summaries & required actions."
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
            {s.media.video ? (
              <video
                className="sp-video"
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
                width="600"
                height="400"
                srcSet={`
                  ${s.media.img.replace(".webp", "-small.webp")} 400w,
                  ${s.media.img.replace(".webp", "-medium.webp")} 800w,
                  ${s.media.img} 1200w
                `}
                sizes="(max-width: 600px) 100vw, 600px"
              />
            )}
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
