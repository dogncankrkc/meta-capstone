import React from "react";

export default function PageHeader({ eyebrow, title, description, align = "left" }) {
  // Render a reusable section header for page-level content.
  return (
    <section className="page-header-section">
      <div className={`page-header page-header-${align}`}>
        {eyebrow ? <p className="page-header-eyebrow">{eyebrow}</p> : null}
        <h1 className="page-header-title">{title}</h1>
        {description ? <p className="page-header-description">{description}</p> : null}
      </div>
    </section>
  );
}
