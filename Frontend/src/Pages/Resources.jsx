import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Resources.css";

export default function Resources() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const section = queryParams.get("section");

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      offset: 100,    // distance before trigger
      once: true      // run only once
    });
  }, []);

  const sections = {
    reality: {
      title: "📊 The Reality in Numbers",
      content: [
        { img: "/Images/CyberCrime.webp", text: "In 2024, cybercrime caused over $16.6B in losses worldwide — a 33% jump from 2023. The problem isn’t shrinking, it’s accelerating." },
        { img: "/Images/reality2.png", text: "More than 859,532 FBI IC3 complaints were filed in 2024, with scams taking the largest share. Nearly 1 in 4 Americans reported being targeted." },
        { img: "/Images/reality3.png", text: "Elderly victims (60+) lost $4.9B, up 43% from 2023. Scammers target the vulnerable and keep winning." },
        { img: "/Images/reality4.png", text: "98% of modern scams bypass antivirus software completely, proving malware isn’t the only threat anymore." }
      ]
    },
    "falls-short": {
      title: "❌ Why Traditional Security Falls Short",
      content: [
        { img: "/Images/fall1.png", text: "It doesn’t block fake full-screen pop-up scams that freeze your device and trick you into calling fake support numbers." },
        { img: "/Images/fall2.png", text: "It fails to detect refund scams or impersonation calls pretending to be from Amazon, Microsoft, or your bank." },
        { img: "/Images/fall3.png", text: "It can’t warn you about phishing websites that copy the exact look of PayPal, your bank, or antivirus companies." },
        { img: "/Images/fall4.png", text: "It doesn’t stop remote access tools (like AnyDesk/TeamViewer) commonly abused by scammers." },
        { img: "/Images/fall5.png", text: "Most traditional security relies on outdated virus signatures — but scams evolve every week, not every year." }
      ]
    },
    "built-dmp": {
      title: "🛡️ That’s Why We Built DefendMePro",
      content: [
        { img: "/Images/dmp1.png", text: "Real protection for real scams. Scam filters, browser traps, remote access blocks, and live scam alerts built in." },
        { img: "/Images/dmp2.png", text: "All backed by real human experts — not just AI. Because smart security should protect people, not just devices." },
        { img: "/Images/dmp3.png", text: "DefendMePro also delivers weekly Scam Playbooks and ongoing education — so you’re always one step ahead." }
      ]
    },
    fraud: {
      title: "🚫 Fraud Detection",
      content: [
        { img: "/Images/fraud1.png", text: "We monitor for fake transactions, suspicious account activity, and unusual access attempts before they cause damage." },
        { img: "/Images/fraud2.png", text: "Our tools flag financial red flags in real time, alerting you before money is stolen." },
        { img: "/Images/fraud3.png", text: "Whether it’s an invoice scam, fake refund, or bank impersonation — we spot it first." }
      ]
    },
    "scam-protection": {
      title: "⚠️ Scam Protection",
      content: [
        { img: "/Images/scam1.png", text: "📱 Spam call filtering to silence known scam numbers before they reach you." },
        { img: "/Images/scam2.png", text: "🌐 Browser-level protection to detect fake websites and phishing traps in real time." },
        { img: "/Images/scam3.png", text: "🛠️ System hardening to block remote access, screen takeovers, and malicious pop-ups." },
        { img: "/Images/scam4.png", text: "📢 Weekly scam updates and alerts delivered by email, SMS, and our Alerts Hub." }
      ]
    },
    alerts: {
      title: "📢 Scam Alerts Hub",
      content: [
        { img: "/Images/alerts1.png", text: "Stay updated with trending scams — refund scams, phishing websites, fake tech support calls, investment scams, and more." },
        { img: "/Images/alerts2.png", text: "Receive alerts inside the Hub, via email, or even by phone — always in plain, easy-to-understand language." },
        { img: "/Images/alerts3.png", text: "Knowledge is power — we warn you before the scam reaches you." }
      ]
    },
    identity: {
      title: "🔐 Identity Theft Protection",
      content: [
        { img: "/Images/identity1.png", text: "DefendMePro equips you with advanced monitoring tools that detect leaks, unauthorized use, or suspicious activity tied to your personal info." },
        { img: "/Images/identity2.png", text: "If something looks wrong, you get an instant alert — so you can act before real damage is done." },
        { img: "/Images/identity3.png", text: "Your identity controls everything — your money, credit, and reputation. We protect it all." }
      ]
    },
    "zero-day": {
      title: "🔒 Zero-Day Threat Defense",
      content: [
        { img: "/Images/zero1.png", text: "We add a critical layer of protection against brand-new, unknown threats that traditional tools can’t detect." },
        { img: "/Images/zero2.png", text: "Using process-level lockdowns (like AppGuard), we stop ransomware and exploits before they even launch." },
        { img: "/Images/zero3.png", text: "No updates, no delays — just airtight, proactive defense." }
      ]
    },
    passwords: {
      title: "🔑 Password Manager",
      content: [
        { img: "/Images/pass1.png", text: "Secure, encrypted password vault to create and store strong passwords across all devices." },
        { img: "/Images/pass2.png", text: "No more writing them down, guessing, or reusing weak passwords." },
        { img: "/Images/pass3.png", text: "Everything stays private and accessible only to you." }
      ]
    },
    antivirus: {
      title: "🖥️ Antivirus & Device Security",
      content: [
        { img: "/Images/av1.png", text: "Goes beyond basic antivirus — we block spyware, silent keyloggers, and hidden backdoors." },
        { img: "/Images/av2.png", text: "We disable risky system entry points and shut the door on remote takeovers." },
        { img: "/Images/av3.png", text: "Real-time protection configured for the way modern threats actually work." }
      ]
    },
    vpn: {
      title: "🌐 VPN & Online Privacy",
      content: [
        { img: "/Images/vpn1.png", text: "Encrypt your browsing, mask your IP, and protect your identity online." },
        { img: "/Images/vpn2.png", text: "No trackers, no spying, no exposure — your personal data stays personal." },
        { img: "/Images/vpn3.png", text: "Because when your connection is private, so is your life." }
      ]
    },
    spam: {
      title: "📞 Spam Call Protection",
      content: [
        { img: "/Images/spam1.png", text: "Identify and block spam numbers, telemarketers, and robocalls instantly." },
        { img: "/Images/spam2.png", text: "Suspicious callers are flagged in real time — so you can ignore the noise." },
        { img: "/Images/spam3.png", text: "We keep distractions away, letting you focus on what matters most." }
      ]
    },
    support: {
      title: "💬 Live Support (7 Days a Week)",
      content: [
        { img: "/Images/support1.png", text: "Real help from real people — no chatbots, no endless waiting." },
        { img: "/Images/support2.png", text: "Available by phone, chat, or remote session — every day of the week." },
        { img: "/Images/support3.png", text: "Whether it’s a strange pop-up, a suspicious email, or just a doubt — we’ve got your back." }
      ]
    },
    business: {
      title: "💼 DefendMePro for Business",
      content: [
        { img: "/Images/business1.png", text: "Small businesses are now prime targets for scams — from fake invoices to vendor impersonation." },
        { img: "/Images/business2.png", text: "We deliver endpoint protection, team-wide scam awareness, and VPN-based secure networks." },
        { img: "/Images/business3.png", text: "One breach can bankrupt a business. DefendMePro ensures yours isn’t next." }
      ]
    }
  };

  const data = sections[section];

  if (!data) {
    return (
      <div className="resources-page">
        <h2 className="not-found">⚠️ Please select a valid resource from the dropdown.</h2>
      </div>
    );
  }

  return (
    <div className="resources-page">
      <h1 className="resources-title" data-aos="zoom-in">{data.title}</h1>

      {data.content.map((block, index) => (
        <div
          key={index}
          className={`resource-block ${index % 2 === 0 ? "normal" : "reverse"}`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          <div className="resource-img" data-aos="zoom-in-up">
            <img src={block.img} alt="Resource Visual" />
          </div>
          <div className="resource-text" data-aos="fade-up">
            <p>{block.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
