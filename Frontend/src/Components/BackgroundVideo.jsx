import React from "react";
import "./BackgroundVideo.css"; // Add this CSS file (below)

export default function BackgroundVideo() {
  return (
    <div className="bgv-wrap">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="bgv-video"
      >
        <source src="/Videos/BackgroundVideo.mp4" type="video/mp4" />
      </video>
      <div className="bgv-overlay"></div>
    </div>
  );
}
