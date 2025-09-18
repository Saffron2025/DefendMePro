import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Business.css";

export default function LiveSupport() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/DefendPro/RealHumans.webp" },
      title: "👥 Real Humans, 7 Days a Week",
      body: [
        "Jab doubt ho, speed matters. Hamari support team daily active rehti hai—weekends & holidays included—taaki scams ya suspicious activity par turant guidance mile.",
        "No bots, no scripts-only. Aapko milega human context: aapka device, aapka use-case, aur aapka risk profile ke hisaab se seedha jawab."
      ],
      points: [
        "Email, chat, phone — your pick",
        "India-friendly hours + global coverage",
        "Priority for active threat situations"
      ]
    },
    {
      media: { video: "/DefendPro/SupportWalkthrough.mp4", poster: "/DefendPro/Watch3Days.webp" },
      title: "🎥 Watch: 3-Min Incident Triage",
      body: [
        "Is walkthrough me dekho kaise ham ‘possible scam’ call ko triage karte hain: identity checks, device sanity scan, aur calm-by-default script jo pressure remove karta hai.",
        "Agar caller spoofed bank/brand ho, ham aapko safe verification steps sikhate hain—kya kehna hai & kya kabhi nahi kehna."
      ],
      points: [
        "Step-by-step calm script",
        "Device & account quick checks",
        "Escalation if money at risk"
      ]
    },
    {
      media: { img: "/DefendPro/SafeRemote.webp" },
      title: "🖥️ Safe Remote Session (Only with Consent)",
      body: [
        "Kabhi-kabhi deep fix ke liye remote session helpful hota hai. Par rules clear: aapki explicit consent, time-bounded access, aur action-by-action narration.",
        "Payment screens ke dauran remote control auto-pause; clipboard/keyboard injection detect hota hai—aur aapko live visibility milti hai."
      ],
      points: [
        "Consent + purpose sheet before session",
        "Session recording & activity log",
        "Auto-pause on payment/OTP screens"
      ]
    },
    {
      media: { img: "/DefendPro/Rapid.webp" },
      title: "🚨 Rapid Escalation & Recovery",
      body: [
        "Funds at risk? We switch to high-priority flow: bank notifies, card locks, account sessions revoke, passwords rotate, aur recovery codes safe-store.",
        "Aapko milta hai concise ‘Do This Now’ checklist jis se panic replace ho jata hai clear action list se."
      ],
      points: [
        "Bank/UPI emergency steps",
        "Password & token rotation",
        "Fraud report + evidence pack"
      ]
    },
    {
      media: { img: "/DefendPro/Multilingual.webp" },
      title: "🌐 Multilingual & Accessible",
      body: [
        "Support Hindi + English me readily available, aur regional language hand-offs possible.",
        "Low-vision users ke liye high-contrast mode guidance, call captions, aur plain-language summaries provide kiye jate hain."
      ],
      points: [
        "Hindi/English first — regional hand-offs",
        "Accessibility-friendly summaries",
        "Non-technical explanations"
      ]
    },
    {
      media: { img: "/DefendPro/Privacy.webp" },
      title: "🔒 Privacy-First Help",
      body: [
        "Hum minimum data approach follow karte hain—sirf utna hi poochte hain jitna issue solve karne ke liye zaroori ho.",
        "Remote sessions me sensitive fields masked; logs anonymized; aapke request par session artifacts purge kiye ja sakte hain."
      ],
      points: [
        "Data minimization by default",
        "Masked secrets & PII hygiene",
        "User-requested log purge option"
      ]
    },
    {
      media: { img: "/DefendPro/PlayBooks.webp" },
      title: "📚 Micro-Playbooks On Demand",
      body: [
        "Har common scam/issue ke liye 30-second micro playbooks: ‘what to say’, ‘what not to say’, ‘verify steps’, screenshots ke saath.",
        "Family Mode? Aap playbook share kar sakte ho parents/seniors ko as SMS/email with one-tap actions."
      ],
      points: [
        "Bank/UPI, courier OTP, tech support scams",
        "Screenshots + scripts included",
        "Shareable with family in 1 tap"
      ]
    }
  ];

  const checklist = [
    "Suspicious call/email note down: number/domain, time, kis baat par pressure dala.",
    "Agar link pe click kia — kis device se? Kis browser/app me?",
    "Koi payment/OTP/remote-access allow to nahi kia? Agar haan, details note karo.",
    "Bank/UPI apps me recent transactions check karo (but do NOT reply to unknown chats).",
    "Humse connect hote hi screen-share/remote sirf consent ke baad hi on karo."
  ];

  const faqs = [
    {
      q: "Response time kitna hota hai?",
      a: "High-risk (money at risk) conversations ko priority milti hai. Typical first response chat/phone par minutes me; email thoda zyada lag sakta hai."
    },
    {
      q: "Kya aap mere bank se baat kar sakte ho?",
      a: "Hum aapko exact script aur steps dete hain (including call transfer), kyunki bank verification aapke naam par hota hai. Emergency me hum parallel me guide karte rehte hain."
    },
    {
      q: "Remote session safe hai?",
      a: "Yes—explicit consent + session log + payment/OTP screen par auto-pause. Aap kabhi bhi ‘Stop Session’ kar sakte ho."
    }
  ];

  return (
    <div className="ls-section">
      <h1 className="ls-heading" data-aos="zoom-in">
        💬 Live Support (7 Days a Week)
      </h1>

      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`ls-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="ls-media" data-aos="zoom-in-up">
            {s.media.video ? (
              <video
                className="ls-video"
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

          <div className="ls-text" data-aos="fade-up">
            <h2>{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="ls-points">
              {s.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Quick pre-contact checklist */}
      <div className="ls-extra" data-aos="fade-up">
        <h2>✅ Before You Contact Us</h2>
        <ul className="ls-checklist">
          {checklist.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      <div className="ls-faqs" data-aos="fade-up">
        <h2>❓ FAQs</h2>
        {faqs.map((f, i) => (
          <div className="ls-faq" key={i}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="ls-cta" data-aos="zoom-in">
        <h2>Need help right now?</h2>
        <p>
          Suspicious call, pop-up, ya payment screen par ho? Hamse turant connect ho.
          Calm script + exact next steps within minutes.
        </p>
        <div className="ls-cta-actions">
          <a className="ls-btn primary" href="tel:+911234567890">📞 Call Support</a>
          <a className="ls-btn" href="mailto:support@defendmepro.com">✉️ Email Us</a>
          <a className="ls-btn ghost" href="/contact#chat">💬 Start Chat</a>
        </div>
        <p className="ls-cta-note">* Never share OTPs or full card numbers with anyone—ever.</p>
      </div>
    </div>
  );
}
