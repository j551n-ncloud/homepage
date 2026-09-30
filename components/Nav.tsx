"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { content, type Lang } from "@/lib/content";

export default function Nav({ lang = "en", altHref }: { lang?: Lang; altHref?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang];
  // anchors point at the home page so they also work from the legal pages
  const home = lang === "de" ? "/de" : "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`nav-wrap${scrolled ? " nav-scrolled" : ""}`}>
      <Link className="nav-logo" href={home}>Johannes Nguyen</Link>
      <ul className="nav-links">
        <li className="nav-hide-sm"><a href={`${home}#about`}>{t.nav.about}</a></li>
        <li><a href={`${home}#skills`}>{t.nav.skills}</a></li>
        <li><a href={`${home}#projects`}>{t.nav.projects}</a></li>
        <li className="nav-hide-sm"><a href={`${home}#experience`}>{t.nav.experience}</a></li>
        <li><a href={`${home}#contact`}>{t.nav.contact}</a></li>
        <li><a className="nav-lang" href={altHref ?? t.langSwitch.href} hrefLang={lang === "de" ? "en" : "de"} aria-label={t.langSwitch.aria}>{t.langSwitch.label}</a></li>
      </ul>
    </nav>
  );
}
