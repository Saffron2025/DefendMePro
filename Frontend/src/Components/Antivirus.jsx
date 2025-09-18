import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Antivirus.css";

export default function Antivirus() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/Password/Antivirus.webp" },
      title: "🛡️ Beyond ‘Just Antivirus’",
      body: [
        "Modern attacks rarely look like old-school viruses. They blend signed loaders, LOLBins, macros, and remote tools. We layer behavioral defenses on top of your AV to block stealthy tactics.",
        "Think of it as a ‘device firewall for behavior’: if a process tries something risky (mass encryption, shadow copy tamper, silent PowerShell), we step in instantly."
      ],
      points: [
        "Behavior shields over signature engines",
        "Process policy: restrict unknowns, allow known-good",
        "Ransomware heuristics & rollback guidance"
      ]
    },
    {
      media: { img: "/Password/SystemHardening.webp" },
      title: "🔧 System Hardening Presets",
      body: [
        "One-click presets lock down common abuse paths without breaking daily work. You can start with ‘Balanced’, then tighten to ‘Strict’ as you get comfortable.",
        "Admins can tune per-role presets (Creator, Dev, Finance) so tools you trust stay fast, while risky behaviors remain fenced."
      ],
      points: [
        "Disable legacy scripting (WScript/CScript) by default",
        "PowerShell Constrained Language Mode for untrusted",
        "Office/PDF macro-isolation & intent prompts"
      ]
    },
    {
      media: { video: "/Videos/DeviceShieldDemo.mp4", poster: "/Password/LiveFileGuard.webp" },
      title: "🎥 Live: File Guard + Ransomware Throttle",
      body: [
        "Watch Defender+File Guard catch a suspicious process that starts bulk writes in user folders and probes VSS. The throttle kicks in, the process is isolated, and you get a one-tap recovery checklist."
      ],
      points: [
        "Bulk-write & extension-cascade detection",
        "Shadow copy tamper alerts",
        "Auto-isolation & guided recovery"
      ]
    },
    {
      media: { img: "/Password/RemoteAccess.webp" },
      title: "🔌 Remote Access & USB Controls",
      body: [
        "Remote tools are powerful—and commonly abused. We allow known, verified support sessions while blocking rogue agents and screen-stealers.",
        "Removable media can be set to read-only by default; autorun is disabled; suspect binaries can’t execute from USB roots."
      ],
      points: [
        "AnyDesk/TeamViewer policy + session consent",
        "USB read-only for unknown drives",
        "Block EXE/MSI/Script from removable roots"
      ]
    },
    {
      media: { img: "/Password/BrowserDefence.webp" },
      title: "🌐 Browser & Network Defenses",
      body: [
        "Your browser is the new OS. We filter dangerous downloads, warn on lookalike domains, and fence off credential pages until verified.",
        "Unknown apps can’t beacon out silently; suspicious egress is throttled or denied until you approve."
      ],
      points: [
        "Download sandbox for EXE/MSI/JS/VBS",
        "Phishing lookalike domain warnings",
        "Egress policies for unknown processes"
      ]
    },
    {
      media: { img: "/Password/AV.webp" },
      title: "🧩 Works with Your Existing AV/EDR",
      body: [
        "We don’t replace your AV—we enhance it. Events are correlated to reduce noise yet surface true risk fast.",
        "For teams, logs export cleanly to SIEM/SOC; per-app allowlists keep dev and IT tooling smooth."
      ],
      points: [
        "Low false-positive policy sets",
        "Role-based allowlists (VSCode, Git, Docker, Node)",
        "SIEM-friendly event export"
      ]
    }
  ];

  const checklist = [
    "Turn on ‘Balanced’ hardening preset (then move to ‘Strict’).",
    "Enable macro isolation for Office & PDF readers.",
    "Constrain PowerShell; disable legacy script hosts.",
    "Force download sandbox for executables/scripts.",
    "Make USB unknown devices read-only by default.",
    "Keep OS/driver/firmware updates auto-applied."
  ];

  const faqs = [
    {
      q: "Kya yeh meri existing antivirus ko replace karta hai?",
      a: "Nahi—hum enhance karte hain. Signatures + behavior = stronger defense. Existing AV detections ke saath hum suspicious behavior ko bhi block karte hain."
    },
    {
      q: "Strict preset se apps tootenge to nahi?",
      a: "Start with ‘Balanced’. Agar koi dev/IT tool break ho, usko allowlist me add karo. Presets role-aware hain, isliye daily kaam smooth rahega."
    },
    {
      q: "Recovery kaise hoti hai ransomware attempt me?",
      a: "Process isolate hota hai, shadow tamper detect hota hai, aur guided checklist milti hai: network cutoff, restore points, cloud file versions, aur credentials rotate."
    }
  ];

  return (
    <div className="av-section">
      <h1 className="av-heading" data-aos="zoom-in">
        🖥️ Antivirus & Device Security
      </h1>

      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`av-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="av-media" data-aos="zoom-in-up">
            {section.media.video ? (
              <video
                className="av-video"
                src={section.media.video}
                poster={section.media.poster}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={section.media.img}
                alt={section.title}
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>

          <div className="av-text" data-aos="fade-up">
            <h2>{section.title}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <ul className="av-points">
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Checklist */}
      <div className="av-extra" data-aos="fade-up">
        <h2>✅ Quick Hardening Checklist</h2>
        <ul className="av-checklist">
          {checklist.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      <div className="av-faqs" data-aos="fade-up">
        <h2>❓ FAQs</h2>
        {faqs.map((faq, i) => (
          <div className="av-faq" key={i}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="av-cta" data-aos="zoom-in">
        <h2>Harden your device. Kill stealth tactics.</h2>
        <p>
          Behavior shields + system guardrails + browser/network controls—sab ek jagah.
          Switch on Device Security and relax.
        </p>
        <button className="av-btn">Enable Device Security</button>
      </div>
    </div>
  );
}
