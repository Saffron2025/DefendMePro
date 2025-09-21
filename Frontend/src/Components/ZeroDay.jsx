import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/ZeroDay.css";

// Optional: Static imports for images (agar ho sake)
import ZeroImg from "../../public/Images/zero.webp";
import CriticalAppsImg from "../../public/Images/CriticalApps.webp";
import ZeroDayWalkthroughImg from "../../public/Images/ZeroDayWalkthrough.webp";
import PlayNiceImg from "../../public/Images/PlayNice.webp";
import RansomwareImg from "../../public/Images/Ransomware.webp";

export default function ZeroDay() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: ZeroImg },
      title: "Advanced Protection Against Zero-Day Threats",
      body: [
        "Zero-day attacks exploit unknown vulnerabilities, bypassing traditional signature-based defenses and patch cycles.",
        "DefendMePro provides a robust process-level lockdown with policy-driven execution controls that block suspicious behaviors—even when files appear legitimate.",
      ],
      points: [
        "Policy-based execution: allow trusted processes, restrict unknowns",
        "Control of child-process spawning and living-off-the-land binaries (LOLBins)",
        "Memory management and script engine guardrails to prevent exploitation",
      ],
    },
    {
      media: { img: CriticalAppsImg },
      title: "Application Containment and Isolation",
      body: [
        "Critical applications like browsers, email clients, and document editors run under strict policies to prevent silent macro execution, unauthorized PowerShell use, and malicious dropper chains.",
        "Scripts triggered by documents are sandboxed, logged, and require explicit user approval before running.",
      ],
      points: [
        "Macro isolation for Office and PDF workflows",
        "Policy enforcement on script hosts such as wscript and cscript",
        "Network egress monitoring to block unknown outbound connections",
      ],
    },
    {
      media: { img: ZeroDayWalkthroughImg },
      title: "Live Demonstration: Blocking Unknown Malicious Behavior",
      body: [
        "See how DefendMePro stops an unsigned loader from running in the Downloads folder. The loader attempts living-off-the-land techniques and probes for credentials.",
        "Our policies intervene early—blocking ransomware staging and preventing data exfiltration.",
      ],
      points: [
        "Unsigned files from untrusted sources receive limited privileges",
        "Suspicious child processes like powershell.exe are denied",
        "Hard blocks on anomalous file operations such as shadow copy tampering",
      ],
    },
    {
      media: { img: PlayNiceImg },
      title: "Seamless Integration with Existing Antivirus and EDR",
      body: [
        "DefendMePro complements your existing antivirus and endpoint detection systems by acting as a behavioral firewall, catching threats that signature-based engines may miss.",
        "Our zero-day defenses are finely tuned to minimize false positives while maintaining readiness for real threats.",
      ],
      points: [
        "Low false-positive policies with a safe learning mode",
        "Granular allow-listing for trusted developer and IT tools",
        "Exportable logs compatible with SIEM and SOC workflows",
      ],
    },
    {
      media: { img: RansomwareImg },
      title: "Ransomware Kill-Switch and Recovery Assistance",
      body: [
        "When ransomware-like behavior is detected—such as mass file writes, shadow copy deletion, or rapid file extension changes—DefendMePro immediately halts the process.",
        "You receive actionable guidance to prevent lateral spread and a customized recovery checklist based on affected files.",
      ],
      points: [
        "Heuristic throttling of bulk file writes",
        "Detection of shadow copy tampering",
        "Automatic isolation of suspicious processes",
      ],
    },
  ];

  const checklist = [
    "Enable ‘Restrict unknown binaries’ in Lockdown Mode.",
    "Harden Office and PDF workflows by disabling auto-macros and enforcing user prompts.",
    "Block script engines from launching unauthorized network tools by default.",
    "Activate browser download sandbox for EXE, MSI, JS, and VBS files.",
    "Disable PowerShell v2 and restrict untrusted PowerShell to Constrained Language Mode.",
    "Enable USB guard: allow read-only access for unknown removable drives.",
  ];

  return (
    <main className="zeroday-section" role="main" aria-labelledby="zeroday-heading">
      <h1 id="zeroday-heading" className="zeroday-heading" data-aos="zoom-in">
        Zero-Day Threat Defense
      </h1>

      {sections.map((section, idx) => (
        <article
          key={idx}
          className={`zeroday-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          aria-labelledby={`section-title-${idx}`}
        >
          <div className="zeroday-media" data-aos="zoom-in-up">
            <img
              src={section.media.img}
              alt={`${section.title} illustration`}
              loading={idx === 0 ? "eager" : "lazy"} // First image eager, rest lazy
              decoding="async"
              width="600"
              height="400"
            />
          </div>

          <div className="zeroday-text" data-aos="fade-up">
            <h2 id={`section-title-${idx}`}>{section.title}</h2>
            {section.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
            <ul className="zeroday-points">
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      <section className="zeroday-extra" data-aos="fade-up" aria-label="Why behavior lockdown is effective">
        <h2>Why Behavior-Based Lockdown Outperforms Patch-Only Strategies</h2>
        <p>
          While software patches are vital, they are inherently reactive. Zero-day attackers exploit
          vulnerabilities before they are publicly disclosed and before signatures are created.
          A behavior-based security model proactively restricts unknown payloads from executing critical actions.
        </p>
        <p>
          Even if a malicious script is triggered, containment policies and child-process restrictions
          keep damage confined. DefendMePro allows IT teams and advanced users to progressively
          harden defenses with guided controls and trusted allow-list configurations.
        </p>

        <div className="zeroday-checklist" aria-label="Quick hardening checklist">
          <h3>Quick Hardening Checklist</h3>
          <ul>
            {checklist.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="zeroday-cta" data-aos="zoom-in" aria-label="Call to action to enable zero-day defense">
        <h2>Stop Unknown Threats Before They Start</h2>
        <p>
          Activate Zero-Day Lockdown to sandbox risky downloads and restrict malicious script behavior.
          Prevention is always better than remediation.
        </p>
        <button className="zeroday-btn" aria-label="Enable Zero-Day Threat Defense">
          Enable Zero-Day Defense
        </button>
      </section>
    </main>
  );
}
