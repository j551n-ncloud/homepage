import Link from "next/link";
import { GitBranch, BookOpen, BookMarked, ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import EmailCopy from "@/components/EmailCopy";
import Counter from "@/components/Counter";
import CvLink from "@/components/CvLink";
import DitherField from "@/components/DitherField";
import { content, type Lang } from "@/lib/content";
import { getLatestPosts, getLiveTags, tagUrl } from "@/lib/blog";
import { legalPaths } from "@/lib/legal";

const version = (process.env.NEXT_PUBLIC_APP_VERSION ?? "dev").replace(/^v/, "");
// web variants without phone and street address, built from the Bewerbung repo (make web)
const CV_PATHS: Record<Lang, string> = {
  en: "/Johannes_Nguyen_CV.pdf",
  de: "/Johannes_Nguyen_Lebenslauf.pdf",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Johannes Nguyen",
  jobTitle: "IT Specialist for System Integration",
  url: "https://j551n.com",
  email: "mailto:johannes.nguyen@j551n.com",
  worksFor: {
    "@type": "Organization",
    name: "German Cancer Research Center (DKFZ)",
    url: "https://www.dkfz.de",
  },
  alumniOf: [
    { "@type": "Organization", name: "German Cancer Research Center (DKFZ)", url: "https://www.dkfz.de" },
    { "@type": "Organization", name: "Mercedes-Benz Mannheim" },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Fachinformatiker für Systemintegration (IT Specialist for System Integration)",
      credentialCategory: "Vocational qualification (IHK)",
      dateCreated: "2026-07",
      recognizedBy: { "@type": "Organization", name: "Industrie- und Handelskammer (IHK)" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Kfz-Mechatroniker (Automotive Mechatronics Technician)",
      credentialCategory: "Vocational qualification",
      dateCreated: "2021",
    },
  ],
  knowsAbout: [
    "Linux", "Ansible", "AWX", "Kubernetes", "k3s", "Proxmox VE", "Proxmox Backup Server",
    "GitLab CI/CD", "GitHub Actions", "Docker", "Harbor", "Trivy", "LDAP", "Active Directory",
    "ADFS", "OIDC", "CrowdSec", "Grafana Loki", "Grafana Alloy", "Prometheus", "Checkmk",
    "IBM Spectrum LSF", "IBM Elastic Storage System", "Ceph", "NetBox", "Python", "FastAPI",
    "TypeScript", "Retrieval-augmented generation", "Model Context Protocol",
  ],
  sameAs: [
    "https://github.com/j551n-ncloud",
    "https://www.linkedin.com/in/johannesquangminh",
    "https://blog.j551n.com",
  ],
};

export default async function HomePage({ lang }: { lang: Lang }) {
  const t = content[lang];
  const posts = await getLatestPosts(3);
  const liveTags = await getLiveTags(
    t.skills.groups.flatMap((g) => g.items.map((i) => i.tag)).filter((x): x is string => !!x),
  );
  const linkFor = (x: { href?: string; tag?: string }) =>
    x.href ?? (x.tag && liveTags.has(x.tag) ? tagUrl(x.tag) : undefined);
  const year = new Date().getFullYear();
  const fmt = new Intl.DateTimeFormat(t.blog.locale, { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Nav lang={lang} />

      {/* HERO */}
      <section className="hero-section">
        <DitherField />
        <div className="hero-inner">
          <Reveal>
            <h1 className="hero-name">Johannes<br />Nguyen</h1>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-bottom">
              <div className="hero-bottom-left">
                <div className="hero-role-tag">{t.hero.role}</div>
                <div className="hero-avail">
                  <div className="avail-dot" />
                  {t.hero.avail}
                </div>
              </div>
              <div className="hero-right">
                <p className="hero-headline">
                  {t.hero.headlineStart}
                  <strong>{t.hero.headlineStrong}</strong>{t.hero.headlineEnd}
                </p>
                <div className="hero-btns">
                  <CvLink href={CV_PATHS[lang]} lang={lang} className="btn btn-fill">{t.hero.cv}</CvLink>
                  <a href="#contact" className="btn btn-outline">{t.hero.contact}</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="page">

        {/* ABOUT */}
        <section id="about">
          <div className="section-row">
            <Reveal className="section-label">{t.about.label}</Reveal>
            <Reveal>
              <div className="about-text">
                {t.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
              <div className="stats">
                {t.about.stats.map((s) => (
                  <div className="stat" key={s.label}>
                    {s.to !== undefined
                      ? <Counter to={s.to} suffix={s.suffix} />
                      : <div className="stat-n" style={{ fontSize: "1.3rem", paddingTop: ".5rem" }}>{s.text}</div>}
                    <div className="stat-l">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="section-row">
            <Reveal className="section-label">{t.skills.label}</Reveal>
            <div>
              <Reveal>
                <div className="skills-intro">
                  <h3>{t.skills.title}</h3>
                  <p>{t.skills.intro}</p>
                </div>
              </Reveal>
              <div className="skills-groups">
                {t.skills.groups.map((g, i) => (
                  <Reveal delay={(i % 3) * 100} key={g.label}>
                    <div>
                      <a className="skill-group-label" href={`https://blog.j551n.com/topics/#${g.topic}`} target="_blank" rel="noopener noreferrer">{g.label}</a>
                      {g.items.map((s) => (
                        <div className="skill-item" key={s.name}>
                          {linkFor(s)
                            ? <a className="skill-item-name" href={linkFor(s)} target="_blank" rel="noopener noreferrer">{s.name}</a>
                            : <div className="skill-item-name">{s.name}</div>}
                          <div className="skill-item-tags">{s.tags}</div>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="section-row">
            <Reveal className="section-label">{t.projects.label}</Reveal>
            <div>
              <Reveal>
                <div className="skills-intro">
                  <h3>{t.projects.title}</h3>
                  <p>{t.projects.intro}</p>
                </div>
              </Reveal>
              <div className="projects-grid">
                {t.projects.items.map((p, i) => (
                  <Reveal delay={(i % 2) * 100} key={p.title}>
                    <article className="project">
                      <div className="project-kind">{p.kind}</div>
                      <h4 className="project-title">{p.title}</h4>
                      <dl className="project-body">
                        <dt>{t.projects.problem}</dt>
                        <dd>{p.problem}</dd>
                        <dt>{t.projects.solution}</dt>
                        <dd>{p.solution}</dd>
                      </dl>
                      <div className="project-foot">
                        <span className="project-stack">{p.stack}</span>
                        {p.links && (
                          <span className="project-links">
                            {p.links.map((l) => (
                              <a className="project-link" href={l.href} target="_blank" rel="noopener noreferrer" key={l.href}>
                                {l.label}<ArrowUpRight size={13} />
                              </a>
                            ))}
                          </span>
                        )}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="section-row">
            <Reveal className="section-label">{t.experience.label}</Reveal>
            <Reveal>
              <div className="exp-list">
                {t.experience.items.map((e) => (
                  <div className={`exp-item${e.current ? " exp-current" : ""}`} key={e.period + e.role}>
                    <div className="exp-period">{e.period}</div>
                    <div>
                      <div className="exp-company">{e.href ? <a href={e.href} target="_blank" rel="noopener noreferrer">{e.company}</a> : e.company}</div>
                      <div className="exp-role">{e.role}</div>
                      {e.points && (
                        <ul className="exp-points">
                          {e.points.map((pt) => <li key={pt.label}><strong>{pt.label}:</strong> {pt.text}</li>)}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* BLOG */}
        {posts.length > 0 && (
          <section id="blog">
            <div className="section-row">
              <Reveal className="section-label">{t.blog.label}</Reveal>
              <Reveal>
                <div className="exp-list">
                  {posts.map((p) => (
                    <a className="exp-item post-item" href={p.url} target="_blank" rel="noopener noreferrer" key={p.url}>
                      <div className="exp-period">{fmt.format(p.date)}</div>
                      <div className="exp-company">{p.title}</div>
                    </a>
                  ))}
                </div>
                <a className="posts-all" href="https://blog.j551n.com" target="_blank" rel="noopener noreferrer">
                  {t.blog.all}<ArrowUpRight size={13} />
                </a>
              </Reveal>
            </div>
          </section>
        )}

        {/* CONTACT */}
        <section id="contact">
          <div className="section-row">
            <Reveal className="section-label">{t.contact.label}</Reveal>
            <Reveal>
              <div className="contact-text">
                <p>{t.contact.text}</p>
                <div className="contact-avail">
                  <div className="avail-dot" style={{ background: "#2a7a2a" }} />
                  {t.contact.avail}
                </div>
                <p className="contact-location">{t.contact.location}</p>
              </div>
              <div className="contact-list">
                <EmailCopy copiedLabel={t.contact.copied} />
                <a className="contact-item" href="https://github.com/j551n-ncloud" target="_blank" rel="noopener noreferrer">
                  <div className="ci-label">GitHub</div>
                  <div className="ci-value">j551n-ncloud</div>
                </a>
                <a className="contact-item" href="https://www.linkedin.com/in/johannesquangminh" target="_blank" rel="noopener noreferrer">
                  <div className="ci-label">LinkedIn</div>
                  <div className="ci-value">johannesquangminh</div>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

      </div>

      <Reveal>
        <footer className="footer-wrap">
          <span className="footer-brand-name">Johannes Nguyen · j551n.com</span>
          <div className="footer-meta">
            <span>© {year}</span>
            <a href={`https://github.com/j551n-ncloud/homepage/releases/tag/v${version}`} target="_blank" rel="noopener noreferrer">v{version}</a>
            <Link href={legalPaths[lang].notice}>{t.footer.notice}</Link>
            <Link href={legalPaths[lang].privacy}>{t.footer.privacy}</Link>
          </div>
        </footer>
        <div className="footer-services">
          <a href="https://gitlab.j551n.com" target="_blank" rel="noopener noreferrer">
            <GitBranch size={13} /><span>GitLab</span>
          </a>
          <a href="https://blog.j551n.com" target="_blank" rel="noopener noreferrer">
            <BookOpen size={13} /><span>Blog</span>
          </a>
          <a href="https://docu.j551n.com" target="_blank" rel="noopener noreferrer">
            <BookMarked size={13} /><span>Docs</span>
          </a>
        </div>
      </Reveal>
    </>
  );
}
