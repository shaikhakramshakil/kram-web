"use client";

import Terminal from "@/components/Terminal";
import TextType from "@/components/TextType";

export default function Home() {
  const copyInstall = () => {
    navigator.clipboard.writeText("npm install -g kramscan");
  };

  return (
    <>
      {/* ─── Nav ─── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo mono">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            kramscan
            <span className="version-tag">0.4.0</span>
          </a>
          <div className="nav-right mono">
            <a href="#features">Features</a>
            <a href="#plugins">Plugins</a>
            <a href="#commands">Docs</a>
            <a href="https://github.com/shaikhakramshakil/kramscan" target="_blank" rel="noopener noreferrer" className="nav-gh">
              <svg height="16" viewBox="0 0 16 16" width="16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* ─── Hero ─── */}
        <section className="hero">
          <div className="wrap fade-up">
            <img
              src="https://github.com/user-attachments/assets/6439c670-8d73-4bdd-b8fa-c74de949a31e"
              alt="KramScan"
              className="hero-logo"
            />
            <div className="hero-badges">
              <a href="https://www.npmjs.com/package/kramscan" target="_blank" rel="noopener"><img src="https://img.shields.io/npm/v/kramscan?style=flat-square&logo=npm&logoColor=white&color=cb3837" alt="npm" /></a>
              <a href="https://github.com/shaikhakramshakil/kramscan/actions" target="_blank" rel="noopener"><img src="https://img.shields.io/github/actions/workflow/status/shaikhakramshakil/kramscan/ci.yml?branch=main&style=flat-square&logo=github-actions&logoColor=white&label=CI" alt="CI" /></a>
              <img src="https://img.shields.io/badge/TypeScript-5.4-3178c6?style=flat-square&logo=typescript&logoColor=white" alt="TS" />
              <img src="https://img.shields.io/badge/Node.js-%3E%3D18-brightgreen?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node" />
            </div>
            <div className="hero-typing mono">
              <TextType
                text={[
                  "Automated vulnerability scanning.",
                  "AI-powered security analysis.",
                  "10 built-in detection plugins.",
                  "CI/CD security gate for your pipeline.",
                  "PDF, DOCX, JSON & Markdown reports.",
                  "Multi-provider: OpenAI, Anthropic, Gemini.",
                ]}
                typingSpeed={40}
                initialDelay={1400}
                deletingSpeed={20}
                pauseDuration={2200}
                showCursor={true}
                cursorCharacter="_"
                cursorClassName="hero-cursor"
                variableSpeed={{ min: 30, max: 70 }}
                loop={true}
              />
            </div>
            <p className="hero-desc">
              Crawl web applications with a headless browser, run 10 built-in
              vulnerability plugins, and pipe results through OpenAI, Anthropic,
              Gemini, or Mistral for context-aware remediation reports.
            </p>

            <div className="hero-actions mono">
              <div className="install-box" onClick={copyInstall} title="Click to copy">
                <span className="prompt">$</span>
                <code>npm install -g kramscan</code>
                <span className="copy-hint">copy</span>
              </div>
              <a href="https://github.com/shaikhakramshakil/kramscan" className="btn-ghost" target="_blank" rel="noopener noreferrer">
                Documentation →
              </a>
            </div>
          </div>
        </section>

        {/* ─── Terminal ─── */}
        <div className="terminal-wrap fade-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <Terminal />
        </div>

        <hr className="divider" style={{ marginTop: "72px" }} />

        {/* ─── Features ─── */}
        <section id="features" className="section">
          <div className="wrap">
            <div className="section-label">What it does</div>
            <div className="section-title">
              Find vulnerabilities before they ship.
            </div>
            <div className="features-grid">
              <div className="f-card">
                <div className="f-card-title"><span className="indicator" /> Vulnerability Detection</div>
                <p>XSS, SQL injection, CSRF, insecure headers, CORS misconfigurations, open redirects — detected automatically across every crawled page.</p>
              </div>
              <div className="f-card">
                <div className="f-card-title"><span className="indicator" /> Dev Watch Mode</div>
                <p>Point it at localhost, change a file, and KramScan re-scans instantly. Shows a diff of new vs. resolved findings after each save.</p>
              </div>
              <div className="f-card">
                <div className="f-card-title"><span className="indicator" /> CI/CD Gate</div>
                <p>Exits with code 1 when vulns exceed your threshold. Drop one line into GitHub Actions and block insecure deploys.</p>
              </div>
              <div className="f-card">
                <div className="f-card-title"><span className="indicator" /> Headless Crawling</div>
                <p>Puppeteer-powered browser renders SPAs and executes JavaScript to catch issues hidden from static analysis.</p>
              </div>
              <div className="f-card">
                <div className="f-card-title"><span className="indicator" /> AI Agent</div>
                <p>Conversational security assistant that independently verifies reported findings using non-destructive payloads.</p>
              </div>
              <div className="f-card">
                <div className="f-card-title"><span className="indicator" /> Report Export</div>
                <p>PDF, DOCX, Markdown, JSON, and TXT. AI executive summaries included. Every report ships with remediation steps.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ─── Plugins ─── */}
        <section id="plugins" className="section">
          <div className="wrap">
            <div className="section-label">Detection layer</div>
            <div className="section-title">10 built-in plugins. Extend with your own.</div>
            <div className="plugins-list mono">
              {["XSSPlugin", "SQLInjectionPlugin", "CSRFPlugin", "SecurityHeadersPlugin", "CORSAnalyzerPlugin", "OpenRedirectPlugin", "DebugEndpointPlugin", "DirectoryTraversalPlugin", "CookieSecurityPlugin", "SensitiveDataPlugin"].map(p => (
                <span key={p} className="plugin-tag">{p}</span>
              ))}
            </div>
            <p style={{ marginTop: "20px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Each plugin extends <code className="mono" style={{ color: "var(--green-dim)" }}>BaseVulnerabilityPlugin</code>. Drop a new file into <code className="mono" style={{ color: "var(--text)" }}>src/plugins/vulnerabilities/</code> and the PluginManager picks it up.
            </p>
          </div>
        </section>

        <hr className="divider" />

        {/* ─── AI ─── */}
        <section className="section">
          <div className="wrap">
            <div className="section-label">AI providers</div>
            <div className="section-title">Bring your own model.</div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "4px", marginTop: "-24px" }}>
              KramScan pipes scan results through your chosen LLM for risk
              scoring, remediation advice, and executive summaries.
            </p>
            <div className="providers-row mono">
              <div className="provider-item">OpenAI</div>
              <div className="provider-item">Anthropic</div>
              <div className="provider-item">Gemini</div>
              <div className="provider-item">Mistral</div>
              <div className="provider-item">Groq</div>
              <div className="provider-item">OpenRouter</div>
              <div className="provider-item">Kimi</div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ─── Commands ─── */}
        <section id="commands" className="section">
          <div className="wrap">
            <div className="section-label">CLI reference</div>
            <div className="section-title">Commands</div>
            <div className="cmd-grid mono">
              <div className="cmd-row"><span className="cmd">kramscan scan &lt;url&gt;</span><span className="cmd-desc">Full vulnerability scan</span></div>
              <div className="cmd-row"><span className="cmd">kramscan dev [url]</span><span className="cmd-desc">Watch-mode localhost scanner</span></div>
              <div className="cmd-row"><span className="cmd">kramscan gate &lt;url&gt;</span><span className="cmd-desc">CI/CD security gate</span></div>
              <div className="cmd-row"><span className="cmd">kramscan agent</span><span className="cmd-desc">AI security assistant</span></div>
              <div className="cmd-row"><span className="cmd">kramscan analyze</span><span className="cmd-desc">AI analysis of past scans</span></div>
              <div className="cmd-row"><span className="cmd">kramscan report</span><span className="cmd-desc">Generate reports</span></div>
              <div className="cmd-row"><span className="cmd">kramscan onboard</span><span className="cmd-desc">Setup wizard</span></div>
              <div className="cmd-row"><span className="cmd">kramscan doctor</span><span className="cmd-desc">Verify environment</span></div>
              <div className="cmd-row"><span className="cmd">kramscan config</span><span className="cmd-desc">View/edit config</span></div>
              <div className="cmd-row"><span className="cmd">kramscan init</span><span className="cmd-desc">Generate .kramscanrc</span></div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="footer mono">
        <div className="wrap">
          <p>MIT License · Built by Akram Shaikh</p>
          <div className="footer-links">
            <a href="https://akramshaikh.me" target="_blank" rel="noopener noreferrer">akramshaikh.me</a>
            <a href="https://github.com/shaikhakramshakil" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/shaikhakramshakil/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
