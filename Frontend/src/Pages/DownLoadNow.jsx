import React from "react";
import "../Styles/Download.css";

const INSTALLER_URL =
  "https://github.com/Saffron2025/DefendMePro/releases/download/v1.0.0/SecureDesk.Setup.1.0.1.exe";

export default function DownloadPage() {
  return (
    <div className="page">
      <h1 className="title">📢 MessageApp</h1>
      <p className="subtitle">
        <strong>MessageApp</strong> is your simple, easy-to-use desktop
        companion. It keeps you <span className="highlight">alert and safe</span>{" "}
        by sending real-time notifications about{" "}
        <strong>scams, frauds, and cyber threats</strong>.
      </p>

      <p className="description">
        Whether you are new to computers or have been using them for years,
        this app makes it easy to stay protected. Once installed, it will
        quietly run in the background and notify you whenever there is an
        important warning about your security.
      </p>

      <button
        className="download-btn"
        onClick={() => window.open(INSTALLER_URL, "_blank")}
      >
        ⤓ Download for Windows
      </button>

      <div className="instructions">
        <h2>🛠 How to Install:</h2>
        <ol>
          <li>
            Click on the <span className="highlight">blue button</span> above.
          </li>
          <li>Find the file named “MessageApp Setup” in your Downloads.</li>
          <li>
            Double-click the file and follow the simple on-screen instructions.
          </li>
          <li>
            Once installed, the app will <strong>run automatically</strong> in
            the background.
          </li>
        </ol>
      </div>

      <div className="benefits">
        <h2>✨ Why Choose MessageApp?</h2>
        <ul>
          <li>✔️ Easy-to-read fonts and large buttons, perfect for everyone</li>
          <li>✔️ Runs quietly without slowing your computer</li>
          <li>✔️ Protects you from online scams and fraud attempts</li>
          <li>✔️ Official, safe, and trusted application</li>
        </ul>
      </div>

      <footer className="footer">
        <p>
          ⚠️ For your safety, download only from this official website. Stay
          safe. Stay informed. Stay protected.
        </p>
      </footer>
    </div>
  );
}
