import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Business.css";

export default function Business() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/VPN/ModernSmall.webp" },
      title: "🏢 Built for Modern Small & Mid-Size Teams",
      body: [
        "Invoice fraud, vendor impersonation, business email compromise (BEC), fake procurement, and remote-access abuse — SMEs are prime targets because processes are lean and approval chains are short.",
        "DefendMePro blends human expertise, policy-driven guardrails, and endpoint controls so day-to-day work stays fast, but financial and identity risks are contained."
      ],
      points: [
        "Scam & phishing defense beyond antivirus",
        "Identity & payment workflow protection",
        "Guided incident response within minutes"
      ]
    },
    {
      media: { img: "/DefendPro/BusinessOverview.webp" },
      title: "🎥 See It in Action: BEC + Fake Vendor Play",
      body: [
        "Live demo: attacker spoofs a vendor, submits urgent bank details change, pushes finance for wire. Our Safe-Pay overlays flag the request, validate IBAN/UPI beneficiary, and require a second person approval.",
        "Email signal engine highlights lookalike domains, reply-to mismatches, and unusual timing/amounts, then nudges users with a ‘verify out-of-band’ script."
      ],
      points: [
        "Safe-Pay overlays on wire/ACH/UPI pages",
        "Lookalike domain & behavior signals",
        "Two-person verification for changes"
      ]
    },
    {
      media: { img: "/DefendPro/EndPoint.webp" },
      title: "🛡️ Endpoint Defense That Fits Workflows",
      body: [
        "Zero-day style protections (process restraint, script controls, and USB policy) without breaking legit tools like IDEs, browsers, conferencing, or CRM connectors.",
        "Remote-access policy: unknown tools blocked; known tools gated via consent sheet, time-boxed sessions, clipboard/keyboard injection guard, and payment-screen auto-pause."
      ],
      points: [
        "Process-level restraint (risky spawns curbed)",
        "PowerShell/Script controls with allowlists",
        "RA approvals, logging, and session rules"
      ]
    },
    {
      media: { img: "/DefendPro/Finance.webp" },
      title: "💳 Finance Guardrails & Safe-Pay",
      body: [
        "Most SME losses are process-level, not malware-level. We put rails where money moves: quotes, invoices, vendor changes, payroll adjustments, refunds.",
        "Overlay confirms receiver identity, memo, currency, wallet age (crypto), and highlights unusual deltas vs historic patterns."
      ],
      points: [
        "Beneficiary verification + memo sanity checks",
        "High-risk flags on new/young wallets",
        "Out-of-band verification prompt"
      ]
    },
    {
      media: { img: "/DefendPro/EmailSaas.webp" },
      title: "🔐 Identity, Email & SaaS Hygiene",
      body: [
        "Compromised inbox = company-wide blast radius. We monitor risky forwards, auto-delete rules, OAuth app sprawl, and exposed tokens.",
        "On high-risk, we drive automatic flows: revoke sessions, rotate passwords/tokens, upgrade to passkeys/2FA, and notify admins."
      ],
      points: [
        "Suspicious rules & forwarding detection",
        "OAuth sprawl reports + revocation nudges",
        "Admin-assisted passkey migrations"
      ]
    },
    {
      media: { img: "/DefendPro/PolicyPacks.webp" },
      title: "🧾 Policy Packs: Ready-to-Run",
      body: [
        "Ship usable policy day one. We include short, plain-English policies your team can actually follow: Payment Change Policy, Vendor Verification SOP, Remote Support Rules, Data Handling, and Incident Response cards.",
        "Every policy is one-page quick-read + a long version for compliance binders."
      ],
      points: [
        "Payment/Vendor SOP (1-pager + full)",
        "Remote support + RA consent templates",
        "Incident cards for front-line staff"
      ]
    },
    {
      media: { img: "/DefendPro/HumanHelp.webp" },
      title: "👥 Human Help When It Matters",
      body: [
        "When something feels off, your team gets a human in minutes. We triage calmly, verify, and step into recovery flows if money/identity is at risk.",
        "Post-incident, you get a compact evidence pack (headers, hashes, URLs, call notes) to attach to bank or police reports."
      ],
      points: [
        "7-days support, India-friendly hours",
        "Scripted call/email verification steps",
        "Evidence packs for escalations"
      ]
    }
  ];

  const onboarding = [
    "Discovery: 30-40 min call to map tools (email, payments, CRM, dev), remote-access needs, device mix (Windows/Mac), and risk profile.",
    "Pilot: roll out to finance + 1–2 adjacent teams; enable Safe-Pay overlays, browser guard, RA policy, and alerts.",
    "Company-wide: staged rollout with two short micro-trainings; policy packs published to your wiki/handbook.",
    "Tune & Review: monthly risk report, vendor change metrics, near-miss counts, and playbook refresh."
  ];

  const pricing = [
    {
      name: "Starter",
      price: "₹349/user/mo",
      fit: "Up to 25 users | startups, agencies, boutiques",
      includes: [
        "Browser Guard + Phishing Defense",
        "Safe-Pay overlays (wire/ACH/UPI) – basic",
        "Remote-access consent sheets",
        "Weekly Scam Playbooks",
        "Email signal highlights (basic)",
        "Email/chat support"
      ]
    },
    {
      name: "Growth",
      price: "₹549/user/mo",
      fit: "25–150 users | growing SMEs",
      includes: [
        "All Starter features",
        "Endpoint restraints + script controls",
        "Safe-Pay (advanced rules & approvals)",
        "Email risk rules (forwarding, rules, OAuth)",
        "Admin dashboard + monthly risk reports",
        "Priority support + onboarding help"
      ],
      badge: "Most popular"
    },
    {
      name: "Plus",
      price: "Custom",
      fit: "150+ users | compliance or curated needs",
      includes: [
        "All Growth features",
        "Multi-entity / subsidiary support",
        "Policy customization & audits support",
        "SAML/SCIM, MDM recipes",
        "Dedicated TAM + playbook drills"
      ]
    }
  ];

  const checklist = [
    "Two-person approval on payment changes.",
    "Vendor bank change = out-of-band phone verification.",
    "Remote access requires consent + recording.",
    "No payments done over chats/calls — only via system.",
    "Passkeys/2FA on email, payroll, banking, and CRM.",
    "Quarterly tabletop: fake vendor + refund trap."
  ];

  const faqs = [
    {
      q: "Kya yeh antivirus replace karta hai?",
      a: "Hum process-level and behavioral guardrails add karte hain (zero-day style) jo antivirus se aage jaate hain. Aapka existing AV reh sakta hai; overlap ko hum tune kar dete hain."
    },
    {
      q: "Rollout me kitna time lagta hai?",
      a: "Small teams: 1–2 days pilot + 3–5 days staged rollout. Mid-size: 2–3 weeks including policy sign-offs and micro-trainings."
    },
    {
      q: "Remote teams & contractors cover hote hain?",
      a: "Haan. Per-role policies + device posture checks + RA rules contractors par apply hote hain. Access least-privilege ke saath diya jata hai."
    },
    {
      q: "Compliance help milti hai?",
      a: "We provide policy packs and evidence trails that help with internal/external reviews. Formal audits/attestations (ISO/SOC) ke liye Plus tier me guidance hoti hai."
    }
  ];

  return (
    <div className="biz-section">
      <h1 className="biz-heading" data-aos="zoom-in">
        💼 DefendMePro for Business
      </h1>

      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`biz-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="biz-media" data-aos="zoom-in-up">
            <img
              src={s.media.img}
              alt={s.title}
              loading="lazy"
              width="480"
              height="300"
            />
          </div>

          <div className="biz-text" data-aos="fade-up">
            <h2>{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="biz-points">
              {s.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="biz-extra" data-aos="fade-up">
        <h2>🚀 Onboarding in Four Steps</h2>
        <ol className="biz-steps">
          {onboarding.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="biz-pricing" data-aos="zoom-in">
        <h2>💳 Pricing</h2>
        <div className="biz-tiers">
          {pricing.map((p, i) => (
            <div className={`biz-tier ${p.badge ? "highlight" : ""}`} key={i}>
              {p.badge && <span className="biz-badge">{p.badge}</span>}
              <h3>{p.name}</h3>
              <p className="biz-price">{p.price}</p>
              <p className="biz-fit">{p.fit}</p>
              <ul>
                {p.includes.map((x, j) => (
                  <li key={j}>{x}</li>
                ))}
              </ul>
              <button className="biz-btn">Talk to Sales</button>
            </div>
          ))}
        </div>
      </div>

      <div className="biz-check" data-aos="fade-up">
        <h2>✅ Minimum Viable Business Safety</h2>
        <ul className="biz-checklist">
          {checklist.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="biz-faqs" data-aos="fade-up">
        <h2>❓ FAQs</h2>
        {faqs.map((f, i) => (
          <div className="biz-faq" key={i}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>

      <div className="biz-cta" data-aos="zoom-in">
        <h2>Give your business a safer default.</h2>
        <p>
          Guardrails where they matter: inbox, payments, identity, and remote-access. 
          Book a 30-minute discovery to map your risk and roll out fast.
        </p>
        <div className="biz-cta-actions">
          <a className="biz-btn primary" href="/contact#sales">📅 Book a Discovery Call</a>
          <a className="biz-btn ghost" href="/contact">✉️ Contact Sales</a>
        </div>
      </div>
    </div>
  );
}
