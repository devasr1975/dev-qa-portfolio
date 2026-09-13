import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight, Check, ChevronDown, Code2, Database, Github, Globe2,
  Linkedin, Mail, Menu, MessageCircle, Play, Send, ShieldCheck,
  Sparkles, TestTube2, X, Zap
} from "lucide-react";
import "./styles.css";

import ecommerceImage from "./assets/projects/ecommerce.png";
import karateApiImage from "./assets/projects/karate-api.png";
import postmanImage from "./assets/projects/postman.png";
import cicdImage from "./assets/projects/cicd.png";

const EMAIL = "devasr1975@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/devasr1975/";
const GITHUB = "https://github.com/devasr1975";
const WHATSAPP = `https://wa.me/918270670795?text=${encodeURIComponent(
  "Hi Dev, I found your QA Automation portfolio and would like to discuss a testing project."
)}`;

const skills = [
  { name: "Java", icon: "☕", text: "Automation framework development" },
  { name: "Playwright", icon: "◉", text: "UI & end-to-end automation" },
  { name: "Karate", icon: "◇", text: "API automation & validation" },
  { name: "Postman", icon: "➤", text: "API testing & collections" },
  { name: "SQL", icon: "▣", text: "Database & data validation" },
  { name: "GitHub", icon: "⌘", text: "Version control & collaboration" },
  { name: "CI/CD", icon: "∞", text: "GitHub Actions pipelines" }
];

const services = [
  {
    number: "01",
    title: "Manual Testing",
    text: "Thorough functional, regression, smoke, sanity and exploratory testing designed around your business flows.",
    icon: TestTube2,
    bullets: ["Functional & regression", "Exploratory testing", "Test cases & bug reports"]
  },
  {
    number: "02",
    title: "UI Automation",
    text: "Reliable browser automation for critical journeys and repetitive regression scenarios using Playwright.",
    icon: Globe2,
    bullets: ["Playwright automation", "Cross-browser flows", "Reusable page objects"]
  },
  {
    number: "03",
    title: "API Testing",
    text: "Validate REST APIs for contracts, business rules, authentication, negative scenarios and data integrity.",
    icon: Code2,
    bullets: ["Karate automation", "Postman testing", "Response validation"]
  },
  {
    number: "04",
    title: "Database Testing",
    text: "Check that application and API workflows persist and retrieve the right data using SQL.",
    icon: Database,
    bullets: ["SQL validation", "Data integrity", "Backend verification"]
  },
  {
    number: "05",
    title: "CI/CD Testing",
    text: "Bring automated tests into your delivery pipeline so important checks run consistently with every release.",
    icon: Zap,
    bullets: ["GitHub Actions", "Scheduled regression", "Build validation"]
  }
];

const projects = [
  {
    image: ecommerceImage,
    tag: "PLAYWRIGHT + JAVA",
    title: "E-Commerce Automation",
    text: "A maintainable end-to-end framework covering login, product search, cart and checkout journeys.",
    metrics: ["UI automation", "Regression", "POM"]
  },
  {
    image:postmanImage,
    tag: "KARATE + JAVA",
    title: "REST API Automation",
    text: "API test suite covering CRUD flows, authentication, positive/negative scenarios and JSON validation.",
    metrics: ["REST APIs", "Assertions", "Data flows"]
  },
  {
     image: karateApiImage,
    tag: "POSTMAN",
    title: "API Testing Collection",
    text: "A structured Postman collection for functional API coverage, environment variables and reusable checks.",
    metrics: ["Collections", "Environments", "Negative tests"]
  },
  {
    image:cicdImage,
    tag: "GITHUB ACTIONS",
    title: "CI/CD Test Pipeline",
    text: "Automated test execution integrated into GitHub Actions with repeatable regression runs.",
    metrics: ["CI pipeline", "Automation", "Reports"]
  }
];

const process = [
  ["01", "Understand", "Learn the product, requirements, risks and critical user journeys."],
  ["02", "Analyze", "Identify what should be manually tested and what is worth automating."],
  ["03", "Test", "Execute focused UI, API and database testing with clear evidence."],
  ["04", "Automate", "Build reusable Playwright or Karate coverage for repeatable scenarios."],
  ["05", "Integrate", "Connect automated checks to GitHub Actions and the delivery workflow."],
  ["06", "Report", "Share concise results, defects, coverage and next-step recommendations."]
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [sent, setSent] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(progress, [0, 0.2], [0, -40]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `QA Project Enquiry — ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      `Project type: ${data.get("project")}`,
      "",
      data.get("message")
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="site-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />

      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo("home")} aria-label="Go home">
            <span className="brand-mark">D</span>
            <span>Deva<span className="muted"></span></span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {[
              ["about", "About"],
              ["services", "Services"],
              ["work", "Work"],
              ["process", "Process"],
              ["contact", "Contact"]
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)}>{label}</button>
            ))}
            <a className="nav-cta" href={`mailto:${EMAIL}`}>Hire me <ArrowUpRight size={15} /></a>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section" ref={heroRef}>
          <div className="hero-grid container">
            <motion.div className="hero-copy" style={{ y: heroY }}>
              <Reveal>
                <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR FREELANCE PROJECTS</div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1>
                  Quality builds
                  <br />
                  <em>better</em> software.
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="hero-text">
                  I’m <strong>Deva S</strong>, a Freelance QA Automation Engineer helping startups and software teams
                  test, automate and ship with confidence.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="hero-actions">
                  <button className="btn btn-dark" onClick={() => scrollTo("contact")}>
                    Start a project <ArrowUpRight size={17} />
                  </button>
                  <button className="btn btn-ghost" onClick={() => scrollTo("work")}>
                    <Play size={15} /> View my work
                  </button>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="hero-note">
                  <ShieldCheck size={18} />
                  <span>Manual testing <i>→</i> automation <i>→</i> CI/CD</span>
                </div>
              </Reveal>
            </motion.div>

            <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <div className="orb orb-a" />
              <div className="orb orb-b" />
              <div className="code-card">
                <div className="window-bar"><span /><span /><span /><b>qa-flow.spec.java</b></div>
                <pre><code>{`@Test
void criticalFlow() {

  login();
  addProduct();
  checkout();

  assertThat(order)
    .isSuccessful();
}

// ✓ UI
// ✓ API
// ✓ DATABASE
// ✓ CI/CD`}</code></pre>
                <div className="code-status"><span><Check size={13} /> 24 tests passed</span><small>2.84s</small></div>
              </div>
              <div className="floating-chip chip-one"><Sparkles size={14} /> Playwright</div>
              <div className="floating-chip chip-two"><Zap size={14} /> GitHub Actions</div>
              <div className="floating-chip chip-three"><Code2 size={14} /> Karate API</div>
            </motion.div>
          </div>

          <div className="scroll-hint"><ChevronDown size={17} /> Scroll to explore</div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>MY TOOLKIT</span>
            {skills.map((skill) => <span className="tool-pill" key={skill.name}>{skill.icon} {skill.name}</span>)}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container two-col">
            <Reveal>
              <div className="section-label">01 — ABOUT</div>
              <h2>I test beyond<br /><em>the happy path.</em></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="about-copy">
                <p className="lead">Good QA is more than finding bugs. It is understanding how real users, real data and real releases can break a system.</p>
                <p>I work across the testing lifecycle—from requirements and test design to UI automation, API validation, SQL checks and CI/CD integration.</p>
                <p>My focus is practical: <strong>find important problems early, automate the repeatable work, and make releases safer.</strong></p>
                <div className="signature">Deva S <span>QA Automation Engineer</span></div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <div><div className="section-label">02 — SERVICES</div><h2>What I can <em>test.</em></h2></div>
                <p>Flexible QA support for a single release, an automation project or ongoing product testing.</p>
              </div>
            </Reveal>

            <div className="service-layout">
              <div className="service-list">
                {services.map((service, i) => {
                  const Icon = service.icon;
                  return (
                    <motion.button
                      key={service.title}
                      className={`service-row ${activeService === i ? "active" : ""}`}
                      onClick={() => setActiveService(i)}
                      whileHover={{ x: 5 }}
                    >
                      <span className="service-number">{service.number}</span>
                      <span className="service-icon"><Icon size={20} /></span>
                      <span className="service-title">{service.title}</span>
                      <ArrowUpRight size={18} />
                    </motion.button>
                  );
                })}
              </div>

              <motion.div
                className="service-detail"
                key={activeService}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
              >
                {(() => {
                  const s = services[activeService];
                  const Icon = s.icon;
                  return <>
                    <div className="detail-icon"><Icon /></div>
                    <span className="detail-number">{s.number}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <ul>{s.bullets.map(b => <li key={b}><Check size={15} /> {b}</li>)}</ul>
                  </>;
                })()}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section skills">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <div><div className="section-label">03 — TOOLKIT</div><h2>Built with the<br /><em>right tools.</em></h2></div>
                <p>Modern testing tools across UI, API, database and delivery layers.</p>
              </div>
            </Reveal>
            <div className="skill-grid">
              {skills.map((skill, i) => (
                <Reveal key={skill.name} delay={i * 0.05}>
                  <motion.div className="skill-card" whileHover={{ y: -7 }}>
                    <span className="skill-symbol">{skill.icon}</span>
                    <h3>{skill.name}</h3>
                    <p>{skill.text}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section work">
          <div className="container">
            <Reveal>
              <div className="section-head">
                <div><div className="section-label">04 — SELECTED WORK</div><h2>Proof through<br /><em>practice.</em></h2></div>
                <p>Demo projects showing how I approach automation, API quality and continuous testing.</p>
              </div>
            </Reveal>
            <div className="project-grid">
              {projects.map((project, i) => (
                <Reveal key={project.title} delay={i * 0.08}>
                  <motion.article className="project-card" whileHover={{ y: -8 }}>
                    <div className={`project-visual visual-${i}`}>
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="project-image"
                      />

                      <ArrowUpRight
                        className="project-arrow"
                        size={21}
                      />
                    </div>
                    <div className="project-body">
                      <span className="project-tag">{project.tag}</span>
                      <h3>{project.title}</h3>
                      <p>{project.text}</p>
                      <div className="metric-row">{project.metrics.map(m => <span key={m}>{m}</span>)}</div>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section process">
          <div className="container">
            <Reveal>
              <div className="section-label">05 — PROCESS</div>
              <h2>Simple process.<br /><em>Serious QA.</em></h2>
            </Reveal>
            <div className="process-grid">
              {process.map(([n, title, text], i) => (
                <Reveal key={n} delay={i * 0.06}>
                  <div className="process-card">
                    <span>{n}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section why">
          <div className="container">
            <div className="why-box">
              <div>
                <div className="section-label">06 — WHY WORK WITH ME</div>
                <h2>Quality is a<br /><em>product feature.</em></h2>
              </div>
              <div className="why-items">
                {[
                  ["Quality first", "Focus on defects that matter to users and the business."],
                  ["Automation mindset", "Automate repetitive, stable and high-value scenarios."],
                  ["End-to-end view", "Connect UI, API and database validation."],
                  ["Clear communication", "Concise results, evidence and actionable defects."]
                ].map(([title, text], i) => (
                  <motion.div className="why-item" key={title} whileHover={{ x: 6 }}>
                    <span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <Reveal>
              <div>
                <div className="section-label">07 — CONTACT</div>
                <h2>Have a project?<br /><em>Let’s make it reliable.</em></h2>
                <p className="contact-intro">Tell me what you are building, what needs testing and where you need help. I’ll get back to you with a practical QA approach.</p>
                <div className="contact-links">
                  <a href={`mailto:${EMAIL}`}><Mail size={18} /> {EMAIL}</a>
                  <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
                  <a href={GITHUB || "#"} onClick={(e) => !GITHUB && e.preventDefault()} target="_blank" rel="noreferrer"><Github size={18} /> GitHub {GITHUB ? "" : "(add URL)"}</a>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Name<input required name="name" placeholder="Your name" /></label>
                  <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
                </div>
                <label>Company <span className="optional">optional</span><input name="company" placeholder="Company / startup" /></label>
                <label>Project type
                  <select name="project" defaultValue="Full QA Testing">
                    <option>Full QA Testing</option>
                    <option>Playwright Automation</option>
                    <option>API / Karate Automation</option>
                    <option>Postman API Testing</option>
                    <option>SQL / Database Testing</option>
                    <option>CI/CD Integration</option>
                    <option>Ongoing QA Support</option>
                  </select>
                </label>
                <label>Tell me about the project<textarea required name="message" rows="5" placeholder="What are you building? What would you like tested or automated?"></textarea></label>
                <button className="btn btn-dark submit-btn" type="submit"><Send size={16} /> {sent ? "Opening email…" : "Send enquiry"}</button>
                <small className="form-note">This form opens your email app with the project details pre-filled.</small>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div><div className="brand footer-brand"><span className="brand-mark">D</span><span>Deva<span className="muted"></span></span></div><p>Freelance QA Automation Engineer</p></div>
          <div className="footer-right">
            <div className="footer-socials">
              <a href={LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a>
              <a href={`mailto:${EMAIL}`} aria-label="Email"><Mail size={17}/></a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={17}/></a>
            </div>
            <span>© {new Date().getFullYear()} Deva S. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);