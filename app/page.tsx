import Link from "next/link";
import { GitBranch, BookOpen, BookMarked } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import EmailCopy from "@/components/EmailCopy";
const version = (process.env.NEXT_PUBLIC_APP_VERSION ?? "dev").replace(/^v/, "");
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-gradient-overlay" aria-hidden="true" />
        <div className="hero-inner">
          <Reveal>
            <h1 className="hero-name">Johannes<br />Nguyen</h1>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero-bottom">
              <div className="hero-bottom-left">
                <div className="hero-role-tag">IT Specialist</div>
                <div className="hero-avail">
                  <div className="avail-dot" />
                  Available
                </div>
              </div>
              <div className="hero-right">
                <p className="hero-headline">
                  From automotive diagnostics to enterprise systems integration{" "}
                  <strong>apprentice IT specialist at DKFZ</strong>, homelab operator, automation-first thinker.
                </p>
                <div className="hero-btns">
                  <a href="#contact" className="btn btn-fill">Contact me</a>
                  <a href="#about" className="btn btn-outline">About</a>
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
            <Reveal className="section-label">About</Reveal>
            <Reveal>
              <div className="about-text">
                <p>As an apprentice system integrator at the German Cancer Research Center, I work with Linux, automation, and resilient infrastructure, bringing precision and clarity to both everyday operations and long-term platform planning.</p>
                <p>Every chapter sharpened my ability to diagnose complex systems, collaborate with specialists, and keep critical services available. These are skills I now apply daily in IT.</p>
              </div>
              <div className="stats">
                <div className="stat">
                  <Counter to={4} suffix="+" />
                  <div className="stat-l">Years Linux &amp; Windows Server in production</div>
                </div>
                <div className="stat">
                  <Counter to={12} suffix="+" />
                  <div className="stat-l">Self-hosted services deployed &amp; maintained</div>
                </div>
                <div className="stat">
                  <Counter to={3} />
                  <div className="stat-l">Proxmox nodes (N-Serv001–003)</div>
                </div>
                <div className="stat">
                  <div className="stat-n" style={{ fontSize: "1.3rem", paddingTop: ".5rem" }}>Automation-first</div>
                  <div className="stat-l">Ansible, GitHub Actions, GitLab CI/CD</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="section-row">
            <Reveal className="section-label">Skills</Reveal>
            <div>
              <Reveal>
                <div className="skills-intro">
                  <h3>Systems work with end-to-end ownership</h3>
                  <p>From ops fundamentals to developer workflows, I focus on reliable platforms, automation, and observability.</p>
                </div>
              </Reveal>
              <div className="skills-groups">
                <Reveal delay={0}>
                  <div>
                    <a className="skill-group-label" href="https://blog.j551n.com/tag/linux/" target="_blank" rel="noopener noreferrer">Sysadmin</a>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/linux/" target="_blank" rel="noopener noreferrer">Linux</a>
                      <div className="skill-item-tags">systemd, RHEL, cgroups, auditd</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/bash/" target="_blank" rel="noopener noreferrer">Bash Scripting</a>
                      <div className="skill-item-tags">Shell utilities, performance optimization</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/monitoring/" target="_blank" rel="noopener noreferrer">Monitoring</a>
                      <div className="skill-item-tags">Grafana, Prometheus, performance tuning</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/hardware/" target="_blank" rel="noopener noreferrer">Dell Hardware</a>
                      <div className="skill-item-tags">iDRAC, PowerEdge, RAID, hardware diagnostics</div>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div>
                    <a className="skill-group-label" href="https://blog.j551n.com/tag/devops/" target="_blank" rel="noopener noreferrer">DevOps</a>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/ci-cd/" target="_blank" rel="noopener noreferrer">CI/CD</a>
                      <div className="skill-item-tags">GitHub Actions, GitLab CI/CD, Git</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/ansible/" target="_blank" rel="noopener noreferrer">Ansible / AWX</a>
                      <div className="skill-item-tags">Playbook development, AWX Operator, automation</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/python/" target="_blank" rel="noopener noreferrer">Python &amp; SQL</a>
                      <div className="skill-item-tags">FastAPI, Pandas, PostgreSQL, MySQL</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/development/" target="_blank" rel="noopener noreferrer">Fullstack Dev</a>
                      <div className="skill-item-tags">TypeScript, Supabase, Vite, Express</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/ai/" target="_blank" rel="noopener noreferrer">AI &amp; LLMs</a>
                      <div className="skill-item-tags">Open WebUI, self-hosted LLMs, prompt engineering</div>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div>
                    <a className="skill-group-label" href="https://blog.j551n.com/tag/virtualization/" target="_blank" rel="noopener noreferrer">Virtualization</a>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/proxmox/" target="_blank" rel="noopener noreferrer">Proxmox VE</a>
                      <div className="skill-item-tags">GPU passthrough, Ceph, clustering, HA</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/vmware/" target="_blank" rel="noopener noreferrer">VMware</a>
                      <div className="skill-item-tags">ESXi, Proxmox migration</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/my-homelab/" target="_blank" rel="noopener noreferrer">Homelab</a>
                      <div className="skill-item-tags">Self-hosted services, Tailscale, LSF</div>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={300}>
                  <div>
                    <a className="skill-group-label" href="https://blog.j551n.com/tag/infrastructure/" target="_blank" rel="noopener noreferrer">Infrastructure</a>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/networking/" target="_blank" rel="noopener noreferrer">Networking</a>
                      <div className="skill-item-tags">VLANs, LACP, routing, IPAM, Netbox, Proxmox SDN</div>
                    </div>
                    <div className="skill-item">
                      <a className="skill-item-name" href="https://blog.j551n.com/tag/kubernetes/" target="_blank" rel="noopener noreferrer">Containers &amp; K8s</a>
                      <div className="skill-item-tags">Docker Compose, K3S, Helm, custom operators</div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience">
          <div className="section-row">
            <Reveal className="section-label">Experience</Reveal>
            <Reveal>
              <div className="exp-list">
                <div className="exp-item exp-current">
                  <div className="exp-period">2022 – Present</div>
                  <div>
                    <div className="exp-company"><a href="https://blog.j551n.com/dkfz/" target="_blank" rel="noopener noreferrer">German Cancer Research Center (DKFZ)</a></div>
                    <div className="exp-role">Apprentice IT Specialist for System Integration</div>
                  </div>
                </div>
                <div className="exp-item">
                  <div className="exp-period">2021 – 2022</div>
                  <div>
                    <div className="exp-company"><a href="https://blog.j551n.com/voegele/" target="_blank" rel="noopener noreferrer">Rheingönheim Vögele</a></div>
                    <div className="exp-role">Commercial Vehicle Mechanic</div>
                  </div>
                </div>
                <div className="exp-item">
                  <div className="exp-period">2017 – 2021</div>
                  <div>
                    <div className="exp-company"><a href="https://blog.j551n.com/mercedes-benz/" target="_blank" rel="noopener noreferrer">Mercedes-Benz Mannheim</a></div>
                    <div className="exp-role">Automotive Mechanic Apprentice</div>
                  </div>
                </div>
                <div className="exp-item">
                  <div className="exp-period">2016</div>
                  <div>
                    <div className="exp-company"><a href="https://blog.j551n.com/basf/" target="_blank" rel="noopener noreferrer">BASF Ludwigshafen</a></div>
                    <div className="exp-role">Computer Science Internship</div>
                  </div>
                </div>
                <div className="exp-item">
                  <div className="exp-period">2016</div>
                  <div>
                    <div className="exp-company"><a href="https://blog.j551n.com/porsche/" target="_blank" rel="noopener noreferrer">Porsche Weissach</a></div>
                    <div className="exp-role">BORS Prototyping Internship</div>
                  </div>
                </div>
                <div className="exp-item">
                  <div className="exp-period">2015</div>
                  <div>
                    <div className="exp-company"><a href="https://blog.j551n.com/trw/" target="_blank" rel="noopener noreferrer">TRW Radolfzell</a></div>
                    <div className="exp-role">Production &amp; Material Testing Internship</div>
                  </div>
                </div>
                <div className="exp-item">
                  <div className="exp-period">2013</div>
                  <div>
                    <div className="exp-company"><a href="https://blog.j551n.com/grn/" target="_blank" rel="noopener noreferrer">GRN Schwetzingen</a></div>
                    <div className="exp-role">Computer Science Internship</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <div className="section-row">
            <Reveal className="section-label">Contact</Reveal>
            <Reveal>
              <div className="contact-text">
                <p>I am deepening my expertise in automation, observability, and resilient platform design while bringing the same discipline from automotive diagnostics into modern infrastructure work.</p>
                <div className="contact-avail">
                  <div className="avail-dot" style={{ background: "#2a7a2a" }} />
                  Open to opportunities matching systems work
                </div>
              </div>
              <div className="contact-list">
                <EmailCopy />
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
            <span>© 2026</span>
            <a href={`https://github.com/j551n-ncloud/homepage/releases/tag/v${version}`} target="_blank" rel="noopener noreferrer">v{version}</a>
            <Link href="/legal/notice">Impressum</Link>
            <Link href="/legal/privacy">Privacy</Link>
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
