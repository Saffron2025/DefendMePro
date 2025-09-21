import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/VPN.css";

export default function VPN() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Preload all images to reduce late loading
    const imagePaths = [
      "/VPN/Tunnels.webp",
      "/VPN/Private.webp",
      "/VPN/Spilt.webp",
      "/VPN/MultiHop.webp",
      "/VPN/Tracker.webp",
      "/VPN/PublicWiFi.webp",
      "/VPN/Switching.webp",
    ];

    imagePaths.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const sections = [
    {
      media: { img: "/VPN/Tunnels.webp" },
      title: "🔐 End-to-End Encrypted VPN Tunnels",
      body: [
        "Protect your internet traffic with strong end-to-end encryption from your device to our secure exit gateways. This ensures your data stays private on public Wi-Fi, home networks, and everywhere in between.",
        "We use modern VPN protocols optimized for both blazing speed and robust security, with fallback options for restrictive or unstable networks.",
      ],
      points: [
        "WireGuard® protocol for fast, efficient VPN connections",
        "OpenVPN (UDP/TCP) for maximum compatibility",
        "Industry-standard ChaCha20/Poly1305 and AES-GCM encryption ciphers",
      ],
    },
    {
      media: { img: "/VPN/Private.webp" },
      title: "🕵️ Zero-Logs VPN with Privacy by Design",
      body: [
        "Our VPN operates with a strict no-logs policy—meaning we never record your browsing activity, connection timestamps, or DNS queries.",
        "Aggregate-only crash and health data keep the service reliable without compromising your privacy. Session keys rotate frequently to minimize metadata retention.",
      ],
      points: [
        "No traffic or DNS query logs tied to individual users",
        "Ephemeral session IDs and key rotation for enhanced privacy",
        "Audit-ready, transparent privacy policies and configurations",
      ],
    },
    {
      media: { img: "/VPN/Spilt.webp" },
      title: "🧭 Split Tunneling & App-Based VPN Rules",
      body: [
        "Customize which apps route through the VPN to optimize performance and security. Protect sensitive apps like banking and email while keeping latency-critical apps like gaming and video calls outside the tunnel.",
        "Set per-domain exclusions to maintain access to local devices like printers, CCTV, and NAS on your home network.",
      ],
      points: [
        "App-level include and exclude VPN rules",
        "Domain and subnet-specific routing configurations",
        "Local network discovery exemptions for seamless device access",
      ],
    },
    {
      media: { img: "/VPN/MultiHop.webp" },
      title: "🛰️ Multi-Hop VPN & Traffic Obfuscation for Censorship Resistance",
      body: [
        "Bypass network throttling, censorship, and VPN blocks with obfuscation techniques that disguise VPN traffic as regular HTTPS.",
        "Multi-hop routing sends your traffic through two or more VPN servers, significantly increasing metadata privacy and making it harder for adversaries to trace.",
      ],
      points: [
        "TLS-based traffic obfuscation on restrictive networks",
        "Configurable double-hop and multi-hop VPN routes",
        "Use resilient VPN ports (443/80) to blend into normal traffic",
      ],
    },
    {
      media: { img: "/VPN/Tracker.webp" },
      title: "🧼 Tracker & DNS Shield with SafeSearch Filters",
      body: [
        "Prevent tracking and malware infections by blocking ad-tech trackers, phishing domains, and malicious sites at the DNS level before they can load.",
        "Enable parental and SafeSearch profiles to enforce kid-friendly search results and browsing experiences across popular platforms.",
      ],
      points: [
        "DNS-level blocking for malware, phishing, and trackers",
        "Custom DNS profiles: Family, Strict, Developer modes",
        "Encrypted DNS via DoH/DoT with private resolvers for privacy",
      ],
    },
    {
      media: { img: "/VPN/PublicWiFi.webp" },
      title: "📶 Automatic Protection on Public Wi-Fi Networks",
      body: [
        "Automatically detect untrusted or insecure Wi-Fi networks and activate the kill switch and strict firewall to prevent data leaks.",
        "Get alerts about rogue access points, weak encryption, and Evil Twin hotspots that impersonate trusted networks.",
      ],
      points: [
        "Auto-connect on untrusted Wi-Fi SSIDs",
        "Heuristics for ARP spoofing and rogue access point detection",
        "Firewall hardening to protect against captive portal attacks",
      ],
    },
    {
      media: { img: "/VPN/Switching.webp" },
      title: "🌍 Intelligent Region Switching with Real-Time Metrics",
      body: [
        "Choose VPN server locations based on latency, load, and privacy considerations.",
        "Our app suggests privacy-friendly jurisdictions and helps you manage favorites and recently used regions for quick switching.",
      ],
      points: [
        "Real-time latency and server load indicators",
        "Privacy-aware jurisdiction recommendations",
        "Favorites and last-used servers for fast access",
      ],
    },
  ];

  const checklist = [
    "Enable the kill switch and auto-connect on untrusted Wi-Fi networks.",
    "Use WireGuard as the default VPN protocol; fall back to OpenVPN if needed.",
    "Turn on DNS Shield to block malware, phishing, and trackers.",
    "Configure split tunneling rules for latency-sensitive apps.",
    "Activate multi-hop and traffic obfuscation on restrictive networks.",
    "Review the server list and pin 2–3 low-latency favorites.",
  ];

  const faqs = [
    {
      q: "Does using a VPN guarantee 100% anonymity online?",
      a: "While a VPN hides your IP address and encrypts your traffic, it doesn't provide complete anonymity. Browser fingerprinting, cookies, and account logins can still identify you. Combining VPN use with good privacy practices offers the best protection.",
    },
    {
      q: "Why is a VPN kill switch important?",
      a: "If your VPN connection drops unexpectedly, your internet traffic might be exposed. The kill switch prevents any data from leaking outside the VPN tunnel until the connection is securely re-established.",
    },
    {
      q: "What does the Tracker and DNS Shield block?",
      a: "It blocks access to known malware sites, phishing domains, command and control servers, ad trackers, and some aggressive analytics endpoints at the DNS level—before the content even loads.",
    },
  ];

  return (
    <div className="vpn-section">
      <h1 className="vpn-heading" data-aos="zoom-in">
        🌐 VPN & Online Privacy Protection
      </h1>

      {sections.map((section, idx) => (
        <div
          key={idx}
          className={`vpn-block ${idx % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="vpn-media" data-aos="zoom-in-up" style={{ minHeight: 300 }}>
            <img
              src={section.media.img}
              alt={section.title}
              loading="lazy"
              decoding="async"
              width={800} // set real width if you know it, or estimate
              height={450} // set real height or estimate
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div className="vpn-text" data-aos="fade-up">
            <h2>{section.title}</h2>
            {section.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
            <ul className="vpn-points">
              {section.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="vpn-extra" data-aos="fade-up">
        <h2>✅ Essential VPN Privacy Setup Checklist</h2>
        <ul className="vpn-checklist">
          {checklist.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="vpn-faqs" data-aos="fade-up">
        <h2>❓ Frequently Asked Questions (FAQs)</h2>
        {faqs.map((faq, i) => (
          <div className="vpn-faq" key={i}>
            <h3>{faq.q}</h3>
            <p>{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="vpn-cta" data-aos="zoom-in">
        <h2>Browse Securely and Privately Everywhere</h2>
        <p>
          Experience fast WireGuard tunnels, kill switch protection, tracker blocking, multi-hop VPN, and obfuscation—all in one easy setup.
        </p>
        <button className="vpn-btn">Enable VPN Protection</button>
      </div>
    </div>
  );
}
