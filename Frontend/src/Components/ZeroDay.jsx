import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/ZeroDay.css";

export default function ZeroDay() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/Images/zero.webp" },
      title: "🛡️ Lockdown Beyond Signatures",
      body: [
        "Zero-day attacks don’t wait for definitions or patch cycles. They abuse unknown bugs, novel loaders, and living-off-the-land techniques.",
        "DefendMePro adds a hard barrier at the process level—policy-driven execution control that blocks suspicious behavior even if the file looks ‘clean’.",
      ],
      points: [
        "Policy-based execution (allow known-good, restrict unknowns)",
        "Child-process spawning rules & LOLBins throttling",
        "Memory allocation + script engine guardrails",
      ],
    },
    {
      media: { img: "/Images/CriticalApps.webp" },
      title: "🏰 Application Containment & Isolation",
      body: [
        "Critical apps (browser, mail, docs) run with tightened policies: no silent macro spawns, no unsolicited PowerShell, no dropper chains.",
        "If a document tries to detonate a script, we sandbox, log, and require explicit user intent.",
      ],
      points: [
        "Macro isolation for Office & PDF workflows",
        "Scriptable hosts (wscript/cscript) under policy gates",
        "Network egress watch: unknowns can’t beacon out",
      ],
    },
    {
      // Video replaced by image here
      media: { img: "/Images/ZeroDayWalkthrough.webp" },
      title: "🎥 Live Walkthrough: Unknown File → Blocked Behavior",
      body: [
        "Watch a fresh loader attempt to run from Downloads. It’s unsigned, tries to kick off a living-off-the-land chain, and probes credential stores.",
        "Our policy stops it at the first suspicious step, before ransomware staging or data exfiltration begins.",
      ],
      points: [
        "Unsigned + untrusted origin → limited privileges",
        "Suspicious child-process (powershell.exe) → denied",
        "Anomalous file-ops (shadow copy tamper) → hard block",
      ],
    },
    {
      media: { img: "/Images/PlayNice.webp" },
      title: "🧩 Plays Nice with Your AV/EDR",
      body: [
        "We don’t replace your antivirus/EDR—we reinforce it. Think of DefendMePro as a behavior firewall that catches what signature engines miss.",
        "Zero-day layers are tuned to reduce noise while keeping kill-switches ready for real threats.",
      ],
      points: [
        "Low false-positive policy sets with safe learning mode",
        "Granular allow-listing for dev tools & IT utilities",
        "Exportable logs for SIEM/SOC workflows",
      ],
    },
    {
      media: { img: "/Images/Ransomware.webp" },
      title: "⚡ Ransomware Kill-Switch & Recovery Aids",
      body: [
        "If a process shows ransomware traits—mass file-writes, shadow delete, extension cascade—we pull the plug.",
        "You get immediate guidance to cut lateral movement, plus a recovery checklist tailored to what was touched.",
      ],
      points: [
        "Heuristic bulk-write throttling",
        "Shadow copy tamper detection",
        "Auto-isolation of suspect processes",
      ],
    },
  ];

  const checklist = [
    "Enable ‘Restrict unknown binaries’ in Lockdown Mode.",
    "Harden Office/PDF: disable auto-macros, require intent prompts.",
    "Block script engines from launching network tools by default.",
    "Turn on browser download sandbox for EXE, MSI, JS, VBS.",
    "Disable PowerShell v2; restrict untrusted PowerShell to Constrained Language Mode.",
    "USB guard: allow read-only for unknown removable drives.",
  ];

  return (
    <div className="zeroday-section">
      <h1 className="zeroday-heading" data-aos="zoom-in">
        🔒 Zero-Day Threat Defense
      </h1>

      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`zeroday-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="zeroday-media" data-aos="zoom-in-up">
            {/* Only image now */}
            <img
              src={s.media.img}
              alt={s.title}
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
            />
          </div>

          <div className="zeroday-text" data-aos="fade-up">
            <h2>{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="zeroday-points">
              {s.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Long-form helper area */}
      <div className="zeroday-extra" data-aos="fade-up">
        <h2>🧠 Why Behavior Lockdown Beats Waiting for Patches</h2>
        <p>
          Patches are essential—but they’re reactive. Zero-day actors hit before CVEs go public
          and long before signatures arrive. A behavior-first model prevents unknown payloads from
          gaining the privileges they need to detonate. Even if a doc opens and a script spawns,
          containment rules and child-process policies keep the blast radius near-zero.
        </p>
        <p>
          For power users and IT teams, DefendMePro offers progressive hardening: start with guided
          prompts, review what would be blocked, and tighten over time. Developers and admins can
          allow-list trusted toolchains without weakening guardrails for everything else.
        </p>

        <div className="zeroday-checklist">
          <h3>✅ Quick Hardening Checklist</h3>
          <ul>
            {checklist.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="zeroday-cta" data-aos="zoom-in">
        <h2>Stop unknowns before they start.</h2>
        <p>
          Turn on Zero-Day Lockdown, sandbox risky downloads, and restrict script abuse.
          Prevention beats remediation—every single time.
        </p>
        <button className="zeroday-btn">Enable Zero-Day Defense</button>
      </div>
    </div>
  );
}
