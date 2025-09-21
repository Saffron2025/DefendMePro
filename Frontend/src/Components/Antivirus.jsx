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
      title: "🛡️ Advanced Antivirus Beyond Traditional Protection",
      body: [
        "Modern cyberattacks rarely resemble traditional viruses. Attackers use signed loaders, living-off-the-land binaries (LOLBins), malicious macros, and remote access tools to evade detection.",
        "Our antivirus software adds a powerful behavioral defense layer that acts as a device firewall for suspicious activities, instantly blocking risky processes like mass encryption attempts, shadow copy tampering, and stealthy PowerShell commands."
      ],
      points: [
        "Behavioral shields layered over signature-based detection",
        "Custom process policies: restrict unknown, allow trusted",
        "Ransomware heuristics with automated rollback guidance"
      ]
    },
    {
      media: { img: "/Password/SystemHardening.webp" },
      title: "🔧 One-Click System Hardening for Endpoint Security",
      body: [
        "Secure your device effortlessly with system hardening presets designed to close common attack vectors without interrupting productivity.",
        "Start with a balanced preset and progressively tighten security to strict mode. IT admins can customize role-based presets ensuring trusted developer and finance tools function smoothly while blocking risky behaviors."
      ],
      points: [
        "Disable legacy scripting hosts (WScript/CScript) by default",
        "Enforce PowerShell Constrained Language Mode for untrusted scripts",
        "Isolate Office and PDF macros with user intent prompts"
      ]
    },
    {
      media: { img: "/Password/LiveFileGuard.webp" },
      title: "🎥 Real-Time File Guard & Ransomware Throttle",
      body: [
        "Monitor live Defender and File Guard protection in action as it detects suspicious bulk file writes and probes of Volume Shadow Copy Service (VSS). The ransomware throttle isolates malicious processes and provides guided recovery steps with a single click."
      ],
      points: [
        "Detect bulk writes and extension-based attack cascades",
        "Alert on shadow copy tampering attempts",
        "Automatic process isolation with step-by-step recovery guidance"
      ]
    },
    {
      media: { img: "/Password/RemoteAccess.webp" },
      title: "🔌 Secure Remote Access & USB Device Controls",
      body: [
        "Remote support tools are powerful but often abused by attackers. We allow only verified sessions from trusted applications like AnyDesk or TeamViewer, requiring explicit user consent.",
        "Enhance USB security by enforcing read-only access for unknown devices, disabling autorun, and blocking execution of suspicious binaries from USB drives."
      ],
      points: [
        "Policy controls for remote access with session consent",
        "USB device read-only mode by default for unknown devices",
        "Block execution of EXE, MSI, and script files from removable media"
      ]
    },
    {
      media: { img: "/Password/BrowserDefence.webp" },
      title: "🌐 Browser Security & Network Protection",
      body: [
        "Browsers are the new operating system for many users. Our security suite filters dangerous downloads, warns about phishing and lookalike domains, and protects sensitive credential entry pages.",
        "Unknown applications are prevented from silently communicating over the network, with suspicious outbound traffic throttled or blocked until explicitly approved."
      ],
      points: [
        "Sandboxing for downloaded executables and scripts (EXE, MSI, JS, VBS)",
        "Phishing detection with lookalike domain warnings",
        "Egress network policies for unknown processes"
      ]
    },
    {
      media: { img: "/Password/AV.webp" },
      title: "🧩 Seamless Integration with Existing Antivirus & EDR",
      body: [
        "Our solution complements your existing antivirus and Endpoint Detection and Response (EDR) tools by correlating events to reduce false positives while surfacing true threats quickly.",
        "For enterprise teams, logs export cleanly to SIEM/SOC platforms, with role-based allowlists for developer and IT tools to maintain workflow efficiency."
      ],
      points: [
        "Low false-positive security policies",
        "Role-based allowlists for common dev and IT applications (VSCode, Git, Docker, Node.js)",
        "SIEM-compatible event export for centralized monitoring"
      ]
    }
  ];

  const checklist = [
    "Enable ‘Balanced’ system hardening preset, then escalate to ‘Strict’ as confidence grows.",
    "Activate macro isolation for Office and PDF readers to block malicious macros.",
    "Enforce PowerShell Constrained Language Mode and disable legacy script hosts.",
    "Require sandboxed downloads for all executable files and scripts.",
    "Set unknown USB devices to read-only by default to prevent malware spread.",
    "Keep your operating system, drivers, and firmware up to date automatically."
  ];

  const faqs = [
    {
      q: "Does this replace my existing antivirus software?",
      a: "No, this solution enhances your current antivirus by combining signature-based detection with advanced behavioral shields. It detects suspicious activity that traditional AV may miss, providing stronger overall protection."
    },
    {
      q: "Will strict presets break my daily applications?",
      a: "Start with the ‘Balanced’ preset to maintain productivity. If any developer or IT tools malfunction, add them to the allowlist. Our presets are role-aware to ensure daily workflows remain smooth."
    },
    {
      q: "How does ransomware recovery work with this system?",
      a: "Malicious processes are automatically isolated, shadow copy tampering is detected, and you receive a guided recovery checklist including network disconnection, restoring shadow copies or cloud versions, and rotating compromised credentials."
    }
  ];

  return (
    <div className="av-section">
      <h1 className="av-heading" data-aos="zoom-in">
        🖥️ Comprehensive Antivirus & Endpoint Security
      </h1>

      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`av-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="av-media" data-aos="zoom-in-up">
            <img
              src={section.media.img}
              alt={section.title}
              loading="lazy"
              decoding="async"
              style={{ width: "100%", height: "auto" }}
            />
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

      <div className="av-extra" data-aos="fade-up">
        <h2>✅ Quick Device Hardening Checklist</h2>
        <ul className="av-checklist">
          {checklist.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="av-faqs" data-aos="fade-up">
        <h2>❓ Frequently Asked Questions (FAQs)</h2>
        {faqs.map((faq, i) => (
          <div className="av-faq" key={i}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="av-cta" data-aos="zoom-in">
        <h2>Harden Your Device and Defend Against Advanced Threats</h2>
        <p>
          Activate our behavior-based shields, system hardening presets, and browser/network defenses all in one place. Enable Device Security now and enjoy peace of mind.
        </p>
        <button className="av-btn">Enable Device Security</button>
      </div>
    </div>
  );
}
