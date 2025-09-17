import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/VPN.css";

export default function VPN() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      media: { img: "/VPN/Tunnels.webp" },
      title: "🔐 End-to-End Encrypted Tunnels",
      body: [
        "Your internet traffic is wrapped in strong encryption from your device to our exit gateway—so public Wi-Fi snoops, ISPs, and hotspot owners can’t peek.",
        "We prioritize modern protocols for both speed and security, while gracefully falling back when networks are picky.",
      ],
      points: [
        "WireGuard® for speed + efficiency",
        "OpenVPN (UDP/TCP) for compatibility",
        "ChaCha20/Poly1305 & AES-GCM ciphers",
      ],
    },
    {
      media: { img: "/VPN/Private.webp" },
      title: "🕵️ Private by Default: No-Logs Architecture",
      body: [
        "We designed the service to operate without retaining activity logs or DNS queries tied to you.",
        "Crash/health metrics are aggregate-only and can be disabled. Keys rotate; metadata minimization is the rule.",
      ],
      points: [
        "No traffic logs / no DNS query logging tied to users",
        "Key rotation + ephemeral session IDs",
        "Audit-ready configurations & transparent policies",
      ],
    },
    {
      media: { video: "/Videos/VPNWalkthrough.mp4", poster: "/VPN/OneTapConnect.webp" },
      title: "🎥 Live: One-Tap Connect + Leak Tests",
      body: [
        "See the app connect to the nearest low-latency server, then auto-run IP/DNS/WebRTC leak tests.",
        "If anything fails, the kill switch engages and the app suggests fixes (adapter priority, firewall rules).",
      ],
      points: [
        "Auto best-server selection < 100ms",
        "Built-in IP/DNS/WebRTC leak check",
        "Kill switch on failure or sleep/wake",
      ],
    },
    {
      media: { img: "/VPN/Spilt.webp" },
      title: "🧭 Split Tunneling & App Rules",
      body: [
        "Route sensitive apps through the VPN (banking, email), while keeping gaming/video calls outside for lowest ping.",
        "Per-domain exclusions let you keep local devices (printers/CCTV/NAS) reachable on your home LAN.",
      ],
      points: [
        "App-based include/exclude lists",
        "Per-domain and per-subnet rules",
        "LAN discovery exemptions (printer/NAS)",
      ],
    },
    {
      media: { img: "/VPN/MultiHop.webp" },
      title: "🛰️ Multi-Hop, Obfuscation & Censorship Bypass",
      body: [
        "When networks throttle or censor, obfuscation disguises VPN traffic as regular HTTPS.",
        "Multi-hop routes your traffic via two regions for added metadata privacy (more hops, more work for adversaries).",
      ],
      points: [
        "TLS-based obfuscation on restrictive networks",
        "Configurable double-hop routes",
        "Resilient ports (443/80) to blend in",
      ],
    },
    {
      media: { img: "/VPN/Tracker.webp" },
      title: "🧼 Tracker/DNS Shield & SafeSearch Options",
      body: [
        "Block ad-tech trackers, known malware domains, and phishing domains at the DNS layer, before they even resolve.",
        "Parental/SafeSearch profiles optionally force kid-safe results on major engines and platforms.",
      ],
      points: [
        "DNS-level blocklists (malware/phishing/tracker)",
        "Per-profile DNS (Family, Strict, Developer)",
        "DoH/DoT with private resolvers",
      ],
    },
    {
      media: { img: "/VPN/PublicWiFi.webp" },
      title: "📶 Public Wi-Fi Shield",
      body: [
        "Untrusted networks are auto-detected: we flip on the kill switch, enable strict firewall, and connect to the nearest safe gateway.",
        "The app warns on rogue APs, weak encryption, and ‘Evil Twin’ SSIDs that mimic trusted hotspots.",
      ],
      points: [
        "Auto-connect on untrusted SSIDs",
        "ARP spoof/Rogue AP heuristics",
        "Firewall hardening on captive portals",
      ],
    },
    {
      media: { img: "/VPN/Switching.webp" },
      title: "🌍 Region Switching (With Sense)",
      body: [
        "Choose regions for latency or content portability while staying mindful of legal constraints.",
        "We surface real-time load/latency and suggest privacy-friendly jurisdictions where it makes sense.",
      ],
      points: [
        "Per-region latency & load indicators",
        "Privacy-forward jurisdiction tips",
        "Favorites & last-used quick tiles",
      ],
    },
  ];

  const checklist = [
    "Enable kill switch + auto-connect on untrusted Wi-Fi.",
    "Use WireGuard by default; fall back to OpenVPN if blocked.",
    "Turn on DNS Shield (malware/phishing/trackers).",
    "Add split tunneling rules for latency-sensitive apps.",
    "Use multi-hop + obfuscation on restrictive networks.",
    "Review region list; pin 2–3 low-latency favorites.",
  ];

  const faqs = [
    {
      q: "Kya VPN se main 100% anonymous ho jata hoon?",
      a: "VPN aapka IP/ISP se privacy deta hai, lekin 100% anonymity nahi. Browser fingerprinting, cookies, account logins abhi bhi identify kar sakte hain. VPN + good hygiene = best results.",
    },
    {
      q: "Kill switch kyu zaroori hai?",
      a: "Agar VPN drop ho gaya to traffic plain me chala jaayega. Kill switch ensure karta hai ki jab tak tunnel up nahi hota, data bahar na nikle.",
    },
    {
      q: "Tracker/DNS Shield kya block karta hai?",
      a: "Known malware, phishing, C2 domains, ad-tech trackers, aur kuch aggressive analytics endpoints ko DNS par hi drop karta hai—page load se pehle.",
    },
  ];

  return (
    <div className="vpn-section">
      <h1 className="vpn-heading" data-aos="zoom-in">
        🌐 VPN & Online Privacy
      </h1>

      {sections.map((s, idx) => (
        <div
          key={idx}
          className={`vpn-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="vpn-media" data-aos="zoom-in-up">
            {s.media.video ? (
              <video
                className="vpn-video"
                src={s.media.video}
                poster={s.media.poster}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img src={s.media.img} alt={s.title} />
            )}
          </div>

          <div className="vpn-text" data-aos="fade-up">
            <h2>{s.title}</h2>
            {s.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <ul className="vpn-points">
              {s.points.map((pt, j) => (
                <li key={j}>{pt}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Checklist */}
      <div className="vpn-extra" data-aos="fade-up">
        <h2>✅ Privacy Setup Checklist</h2>
        <ul className="vpn-checklist">
          {checklist.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* FAQs */}
      <div className="vpn-faqs" data-aos="fade-up">
        <h2>❓ FAQs</h2>
        {faqs.map((f, i) => (
          <div className="vpn-faq" key={i}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="vpn-cta" data-aos="zoom-in">
        <h2>Browse privately. Everywhere.</h2>
        <p>
          Fast WireGuard tunnels, kill switch, tracker blocking, multi-hop, and obfuscation—
          ek tap me online privacy upgrade.
        </p>
        <button className="vpn-btn">Enable VPN Protection</button>
      </div>
    </div>
  );
}
