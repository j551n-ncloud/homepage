"use client";

import { useState } from "react";

const EMAIL = "johannes.nguyen@j551n.com";

export default function EmailCopy({ copiedLabel = "Copied!" }: { copiedLabel?: string }) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        // clipboard is unavailable outside secure contexts, open the mail client instead
        window.location.href = `mailto:${EMAIL}`;
      });
  }

  return (
    <button
      type="button"
      className="contact-item"
      onClick={handleClick}
      aria-label={`Copy email address ${EMAIL}`}
    >
      <div className="ci-label">Email</div>
      <div className="ci-value">{copied ? copiedLabel : EMAIL}</div>
    </button>
  );
}
