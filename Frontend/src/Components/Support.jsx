import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/LiveSupport.css";

// Images ko sahi path ke saath import karein
import RealHumans from "../../public/DefendPro/RealHumans.webp";
import Watch3Days from "../../public/DefendPro/Watch3Days.webp";
import SafeRemote from "../../public/DefendPro/SafeRemote.webp";
import Rapid from "../../public/DefendPro/Rapid.webp";
import Multilingual from "../../public/DefendPro/Multilingual.webp";
import Privacy from "../../public/DefendPro/Privacy.webp";
import PlayBooks from "../../public/DefendPro/PlayBooks.webp";

export default function LiveSupport() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const sections = [
        {
            // Yahan imported variables ka use karein
            media: { img: RealHumans },
            title: "👥 Real Humans, 7 Days a Week",
            body: [
                "When in doubt, speed matters. Our support team is active daily—including weekends & holidays—to provide immediate guidance on scams or suspicious activity.",
                "No bots, no scripts-only. You’ll get human context: your device, your use-case, and your risk profile based answers."
            ],
            points: [
                "Email, chat, phone — your pick",
                "India-friendly hours + global coverage",
                "Priority for active threat situations"
            ]
        },
        {
            media: { img: Watch3Days },
            title: "🎥 Watch: 3-Min Incident Triage",
            body: [
                "In this walkthrough, see how we triage a ‘possible scam’ call: identity checks, device sanity scan, and calm-by-default script that removes pressure.",
                "If the caller is a spoofed bank/brand, we teach you safe verification steps—what to say & what never to say."
            ],
            points: [
                "Step-by-step calm script",
                "Device & account quick checks",
                "Escalation if money at risk"
            ]
        },
        {
            media: { img: SafeRemote },
            title: "🖥️ Safe Remote Session (Only with Consent)",
            body: [
                "Sometimes a remote session is helpful for deep fixes. But rules are clear: your explicit consent, time-bounded access, and action-by-action narration.",
                "During payment screens, remote control auto-pauses; clipboard/keyboard injection is detected—and you get live visibility."
            ],
            points: [
                "Consent + purpose sheet before session",
                "Session recording & activity log",
                "Auto-pause on payment/OTP screens"
            ]
        },
        {
            media: { img: Rapid },
            title: "🚨 Rapid Escalation & Recovery",
            body: [
                "Funds at risk? We switch to high-priority flow: bank notifications, card locks, session revokes, password rotation, and safe storage of recovery codes.",
                "You get a concise ‘Do This Now’ checklist that replaces panic with a clear action plan."
            ],
            points: [
                "Bank/UPI emergency steps",
                "Password & token rotation",
                "Fraud report + evidence pack"
            ]
        },
        {
            media: { img: Multilingual },
            title: "🌐 Multilingual & Accessible",
            body: [
                "Support available in Hindi + English, with possible regional language hand-offs.",
                "For low-vision users, high-contrast mode guidance, call captions, and plain-language summaries are provided."
            ],
            points: [
                "Hindi/English first — regional hand-offs",
                "Accessibility-friendly summaries",
                "Non-technical explanations"
            ]
        },
        {
            media: { img: Privacy },
            title: "🔒 Privacy-First Help",
            body: [
                "We follow a minimum data approach—only asking what’s necessary to solve the issue.",
                "Sensitive fields are masked during remote sessions; logs anonymized; session artifacts can be purged on your request."
            ],
            points: [
                "Data minimization by default",
                "Masked secrets & PII hygiene",
                "User-requested log purge option"
            ]
        },
        {
            media: { img: PlayBooks },
            title: "📚 Micro-Playbooks On Demand",
            body: [
                "30-second micro playbooks for common scams/issues: ‘what to say’, ‘what not to say’, ‘verify steps’, with screenshots.",
                "Family Mode? You can share playbooks with parents/seniors as SMS/email with one-tap actions."
            ],
            points: [
                "Bank/UPI, courier OTP, tech support scams",
                "Screenshots + scripts included",
                "Shareable with family in 1 tap"
            ]
        }
    ];

    const checklist = [
        "Note suspicious call/email: number/domain, time, what pressure was applied.",
        "If you clicked a link — on which device? Which browser/app?",
        "Did you allow payment/OTP/remote-access? If yes, note details.",
        "Check recent transactions in Bank/UPI apps (but do NOT reply to unknown chats).",
        "Only enable screen-share/remote after consent once connected to us."
    ];

    const faqs = [
        {
            q: "What is the typical response time?",
            a: "High-risk (money at risk) conversations get priority. Typical first response on chat/phone is within minutes; email may take a bit longer."
        },
        {
            q: "Can you talk to my bank on my behalf?",
            a: "We provide you with exact scripts and steps (including call transfer), because bank verification happens in your name. In emergencies, we guide you in parallel."
        },
        {
            q: "Is the remote session safe?",
            a: "Yes—explicit consent + session logs + auto-pause on payment/OTP screens. You can stop the session anytime."
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