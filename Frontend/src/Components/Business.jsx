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
        "Invoice fraud, vendor impersonation, business email compromise (BEC), fake procurement, and remote-access abuse are common threats targeting SMEs due to their lean processes and short approval chains.",
        "DefendMePro combines human expertise, policy-driven guardrails, and endpoint controls to keep day-to-day work fast while containing financial and identity risks."
      ],
      points: [
        "Comprehensive scam and phishing defense beyond antivirus",
        "Protection for identity and payment workflows",
        "Guided incident response within minutes"
      ]
    },
    {
      media: { img: "/DefendPro/BusinessOverview.webp" },
      title: "🎥 See It in Action: BEC & Fake Vendor Prevention",
      body: [
        "Live demo showcasing how an attacker spoofs a vendor to submit urgent bank detail changes and pressures finance for wire transfers. Our Safe-Pay overlays flag suspicious requests, validate IBAN/UPI beneficiaries, and require dual approvals.",
        "Email signal engine detects lookalike domains, reply-to mismatches, and unusual timing or amounts, prompting users with a ‘verify out-of-band’ script."
      ],
      points: [
        "Safe-Pay overlays on wire, ACH, and UPI payment pages",
        "Lookalike domain and behavior-based threat signals",
        "Two-person verification for payment changes"
      ]
    },
    {
      media: { img: "/DefendPro/EndPoint.webp" },
      title: "🛡️ Endpoint Defense Designed for Workflows",
      body: [
        "Zero-day style protections including process restraint, script controls, and USB policy that do not disrupt legitimate tools like IDEs, browsers, conferencing, or CRM connectors.",
        "Remote-access policies block unknown tools and gate known tools through consent sheets, time-boxed sessions, clipboard/keyboard injection guards, and auto-pause on payment screens."
      ],
      points: [
        "Process-level restraint to curb risky process spawns",
        "PowerShell and script controls with allowlists",
        "Remote access approvals, logging, and session management"
      ]
    },
    {
      media: { img: "/DefendPro/Finance.webp" },
      title: "💳 Finance Guardrails & Safe-Pay Features",
      body: [
        "Most SME losses happen due to process failures, not malware. We establish guardrails where money moves: quotes, invoices, vendor changes, payroll, and refunds.",
        "Our overlays confirm receiver identity, memo correctness, currency type, wallet age (for crypto), and highlight unusual transaction deviations."
      ],
      points: [
        "Beneficiary verification and memo sanity checks",
        "High-risk flags for new or young wallets",
        "Out-of-band verification prompts"
      ]
    },
    {
      media: { img: "/DefendPro/EmailSaas.webp" },
      title: "🔐 Identity, Email & SaaS Hygiene Management",
      body: [
        "Compromised inboxes can impact your entire company. We monitor risky forwarding, auto-delete rules, OAuth app sprawl, and exposed tokens.",
        "On detecting high-risk signals, automatic flows revoke sessions, rotate passwords and tokens, upgrade security with passkeys/2FA, and notify administrators."
      ],
      points: [
        "Detection of suspicious forwarding rules",
        "OAuth app sprawl reports and revocation prompts",
        "Admin-assisted passkey migration support"
      ]
    },
    {
      media: { img: "/DefendPro/PolicyPacks.webp" },
      title: "🧾 Ready-to-Run Policy Packs",
      body: [
        "Launch with practical, plain-English policies your team can follow from day one, including Payment Change Policy, Vendor Verification SOP, Remote Support Rules, Data Handling, and Incident Response cards.",
        "Each policy is available as a quick-read one-pager plus a detailed version for compliance documentation."
      ],
      points: [
        "Payment and Vendor SOPs (one-pager and full version)",
        "Remote support and remote access consent templates",
        "Incident response cards for frontline staff"
      ]
    },
    {
      media: { img: "/DefendPro/HumanHelp.webp" },
      title: "👥 Human Support When It Matters Most",
      body: [
        "If something seems suspicious, your team can reach a human expert within minutes for calm triage, verification, and assistance with recovery if funds or identities are at risk.",
        "After incidents, receive a compact evidence pack (headers, hashes, URLs, call notes) for bank or police reporting."
      ],
      points: [
        "7-day support with India-friendly hours",
        "Scripted call and email verification steps",
        "Evidence packs for escalation and reporting"
      ]
    }
  ];

  const onboarding = [
    "Discovery: 30-40 minute call to map tools (email, payments, CRM, dev), remote-access needs, device mix (Windows/Mac), and risk profile.",
    "Pilot: Deploy Safe-Pay overlays, browser guard, remote-access policies, and alerts for finance and 1–2 adjacent teams.",
    "Company-wide rollout: staged deployment with two brief micro-trainings; policy packs published to your internal wiki or handbook.",
    "Tune & Review: Monthly risk reports, vendor change metrics, near-miss counts, and playbook updates."
  ];

  const pricing = [
    {
      name: "Starter",
      price: "₹349/user/month",
      fit: "Up to 25 users | startups, agencies, boutiques",
      includes: [
        "Browser Guard and Phishing Defense",
        "Basic Safe-Pay overlays (wire/ACH/UPI)",
        "Remote-access consent sheets",
        "Weekly Scam Playbooks",
        "Basic Email signal highlights",
        "Email and chat support"
      ]
    },
    {
      name: "Growth",
      price: "₹549/user/month",
      fit: "25–150 users | growing SMEs",
      includes: [
        "All Starter features",
        "Endpoint restraints and script controls",
        "Advanced Safe-Pay rules and approvals",
        "Email risk rules (forwarding, rules, OAuth)",
        "Admin dashboard and monthly risk reports",
        "Priority support and onboarding assistance"
      ],
      badge: "Most popular"
    },
    {
      name: "Plus",
      price: "Custom pricing",
      fit: "150+ users | compliance-focused or curated needs",
      includes: [
        "All Growth features",
        "Multi-entity and subsidiary support",
        "Policy customization and audit support",
        "SAML/SCIM, MDM recipes",
        "Dedicated Technical Account Manager and playbook drills"
      ]
    }
  ];

  const checklist = [
    "Two-person approval required on all payment changes.",
    "Vendor bank changes require out-of-band phone verification.",
    "Remote access strictly requires consent and session recording.",
    "Payments must only be processed via authorized systems, never through chats or calls.",
    "Implement passkeys or 2FA on email, payroll, banking, and CRM systems.",
    "Conduct quarterly tabletop exercises simulating fake vendor and refund traps."
  ];

  const faqs = [
    {
      q: "Does this replace antivirus software?",
      a: "No. DefendMePro adds process-level and behavioral guardrails (zero-day style) that complement existing antivirus solutions. We tune overlaps to ensure smooth integration."
    },
    {
      q: "How long does rollout take?",
      a: "Small teams can expect a 1–2 day pilot followed by 3–5 days for staged rollout. Mid-size teams typically complete deployment in 2–3 weeks, including policy approvals and micro-trainings."
    },
    {
      q: "Are remote teams and contractors covered?",
      a: "Yes. Role-based policies, device posture checks, and remote access rules apply to contractors as well. Access is granted with least privilege principles."
    },
    {
      q: "Do you assist with compliance?",
      a: "We provide policy packs and evidence trails to aid internal and external audits. Formal audit support for ISO, SOC, and other standards is available in the Plus tier."
    }
  ];

  return (
    <main className="biz-section" role="main" aria-label="Business security solutions">
      <h1 className="biz-heading" data-aos="zoom-in">
        💼 DefendMePro for Business
      </h1>

      {sections.map((section, idx) => (
        <section
          key={idx}
          className={`biz-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          aria-labelledby={`section-title-${idx}`}
        >
          <div className="biz-media" data-aos="zoom-in-up">
            <img
              src={section.media.img}
              alt={section.title}
              loading="lazy"
              width="480"
              height="300"
              decoding="async"
              fetchpriority="low"
            />
          </div>

          <div className="biz-text" data-aos="fade-up">
            <h2 id={`section-title-${idx}`}>{section.title}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <ul className="biz-points">
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="biz-extra" data-aos="fade-up" aria-labelledby="onboarding-title">
        <h2 id="onboarding-title">🚀 Onboarding in Four Simple Steps</h2>
        <ol className="biz-steps">
          {onboarding.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="biz-pricing" data-aos="zoom-in" aria-labelledby="pricing-title">
        <h2 id="pricing-title">💳 Pricing Plans</h2>
        <div className="biz-tiers" role="list">
          {pricing.map((plan, i) => (
            <article
              key={i}
              className={`biz-tier ${plan.badge ? "highlight" : ""}`}
              role="listitem"
              aria-label={`${plan.name} plan`}
            >
              {plan.badge && <span className="biz-badge">{plan.badge}</span>}
              <h3>{plan.name}</h3>
              <p className="biz-price">{plan.price}</p>
              <p className="biz-fit">{plan.fit}</p>
              <ul>
                {plan.includes.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
              <button className="biz-btn" aria-label={`Talk to sales about the ${plan.name} plan`}>
                Talk to Sales
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="biz-check" data-aos="fade-up" aria-labelledby="checklist-title">
        <h2 id="checklist-title">✅ Minimum Viable Business Safety Checklist</h2>
        <ul className="biz-checklist">
          {checklist.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="biz-faqs" data-aos="fade-up" aria-labelledby="faqs-title">
        <h2 id="faqs-title">❓ Frequently Asked Questions</h2>
        {faqs.map((faq, i) => (
          <article className="biz-faq" key={i}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </article>
        ))}
      </section>

      <section className="biz-cta" data-aos="zoom-in" aria-label="Call to action">
        <h2>Give Your Business a Safer Default</h2>
        <p>
          Guardrails where they matter: inbox, payments, identity, and remote-access. 
          Book a 30-minute discovery call to map your risks and accelerate rollout.
        </p>
        <div className="biz-cta-actions">
          <a className="biz-btn primary" href="/contact#sales" aria-label="Book a discovery call with sales">
            📅 Book a Discovery Call
          </a>
          <a className="biz-btn ghost" href="/contact" aria-label="Contact sales team">
            ✉️ Contact Sales
          </a>
        </div>
      </section>
    </main>
  );
}
