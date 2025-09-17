import React from "react";
import "../styles/Resources.css";

export default function ResourceSection({ id, title, blocks }) {
  return (
    <section id={id} className="resource-section">
      <h2 className="resource-title">{title}</h2>

      {blocks.map((block, i) => (
        <div
          key={i}
          className={`resource-block ${i % 2 !== 0 ? "reverse" : ""}`}
        >
          {/* Image */}
          <div className="block-img">
            <img src={block.img} alt={block.title} />
          </div>

          {/* Text */}
          <div className="block-text">
            <h3>{block.title}</h3>
            <p>{block.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
