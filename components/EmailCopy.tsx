"use client";

import { useState } from "react";

const EMAIL = "johannes.nguyen@j551n.com";

export default function EmailCopy() {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="contact-item" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="ci-label">Email</div>
      <div className="ci-value">{copied ? "Copied!" : EMAIL}</div>
    </div>
  );
}
