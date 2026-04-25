"use client";

import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="nav-brand">
            <span style={{ color: "var(--accent-green)", fontWeight: 'bold' }}>&gt;_</span> KramScan 
            <span style={{ fontSize: '0.7rem', backgroundColor: '#333', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px', color: '#e0e0e0', fontWeight: 'normal' }}>v0.4.0</span>
          </a>
          <div className="nav-links mono" style={{ display: 'flex', alignItems: 'center' }}>
            <a href="#features">Features</a>
            <a href="#plugins">Plugins</a>
            <a href="https://www.npmjs.com/package/kramscan" target="_blank" rel="noopener noreferrer">NPM</a>
            <a href="https://github.com/shaikhakramshakil/kramscan" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <svg height="20" viewBox="0 0 16 16" width="20" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="section" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            
            <div className="animate-fade-in-up" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <img 
                src="https://github.com/user-attachments/assets/6439c670-8d73-4bdd-b8fa-c74de949a31e" 
                alt="KramScan Logo" 
                style={{ maxWidth: '100%', height: 'auto', display: 'inline-block', marginBottom: '1.5rem' }} 
              />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://www.npmjs.com/package/kramscan" target="_blank" rel="noopener"><img src="https://img.shields.io/npm/v/kramscan?style=for-the-badge&logo=npm&logoColor=white&color=cb3837" alt="npm version" /></a>
                <a href="https://github.com/shaikhakramshakil/kramscan/actions" target="_blank" rel="noopener"><img src="https://img.shields.io/github/actions/workflow/status/shaikhakramshakil/kramscan/ci.yml?branch=main&style=for-the-badge&logo=github-actions&logoColor=white&label=CI" alt="CI" /></a>
                <img src="https://img.shields.io/badge/TypeScript-5.4-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
              </div>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 500 }}>
                Automated vulnerability scanning + multi-provider AI analysis.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
                KramScan is a command-line security auditing tool that orchestrates headless browser crawling, runs a modular plugin system against discovered pages, and passes findings through a generative AI layer to produce actionable, context-aware reports.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                <div className="code-block mono" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '12px 20px', margin: 0, backgroundColor: '#000' }}>
                  <span style={{ color: 'var(--accent-green)' }}>$</span>
                  <span style={{ color: '#fff' }}>npm install -g kramscan</span>
                </div>
                <a href="https://github.com/shaikhakramshakil/kramscan" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px' }}>Documentation</a>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, maxWidth: '900px', margin: '0 auto', width: '100%' }}>
              <Terminal />
            </div>
            
          </div>
        </section>

        <section id="features" className="section" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="container">
            <h2 className="mono" style={{ textAlign: 'center' }}>&gt; Core_Features</h2>
            <div className="features-grid" style={{ marginTop: '3rem' }}>
              <div className="feature-card">
                <div className="feature-icon mono">01</div>
                <h3>Automated Detection</h3>
                <p>Detect XSS, SQL injection, CSRF, insecure headers, CORS misconfigurations, open redirects, and more automatically.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon mono">02</div>
                <h3>Dev Mode</h3>
                <p>Watches your localhost for file changes and auto re-scans, showing a diff of new vs. resolved findings in real-time.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon mono">03</div>
                <h3>CI/CD Gate</h3>
                <p>Block deployments when vulnerabilities exceed your configured threshold. Perfect for GitHub Actions and pipelines. Exits with code 1 on failure.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon mono">04</div>
                <h3>Headless Crawling</h3>
                <p>Renders SPAs via Puppeteer to find vulnerabilities in dynamically generated content, heavily executing JavaScript.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon mono">05</div>
                <h3>Interactive AI Agent</h3>
                <p>Conversational security assistant with autonomous verification capabilities to confirm findings live.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon mono">06</div>
                <h3>Professional Reporting</h3>
                <p>Export results to PDF, DOCX, Markdown, TXT, and JSON output with remediation steps and error tracking.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="ai" className="section">
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="mono">&gt; AI_Analysis_Engine</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                KramScan passes findings through a generative AI layer to assess risk, generate context-aware payloads, and provide human-readable remediation summaries.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span className="code-block mono" style={{ padding: '10px 20px' }}>OpenAI</span>
                <span className="code-block mono" style={{ padding: '10px 20px' }}>Anthropic</span>
                <span className="code-block mono" style={{ padding: '10px 20px' }}>Gemini</span>
                <span className="code-block mono" style={{ padding: '10px 20px' }}>Mistral</span>
                <span className="code-block mono" style={{ padding: '10px 20px' }}>Groq</span>
              </div>
            </div>
          </div>
        </section>

        <section id="plugins" className="section" style={{ backgroundColor: '#111' }}>
          <div className="container">
            <h2 className="mono" style={{ textAlign: 'center' }}>&gt; Built-in_Plugins</h2>
            <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {["XSS", "SQL Injection", "CSRF", "Insecure Headers", "CORS Misconfigurations", "Open Redirects", "Debug Endpoints", "Directory Traversal", "Cookie Auditing", "Sensitive Data Exposure"].map(plugin => (
                <span key={plugin} className="code-block mono" style={{ padding: '10px 20px', borderLeft: '3px solid var(--accent-green)' }}>
                  {plugin}
                </span>
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--text-secondary)' }}>
              Easily extensible via the PluginManager. Write your own custom detection rules by extending `BaseVulnerabilityPlugin`.
            </p>
          </div>
        </section>

        <section id="architecture" className="section" style={{ backgroundColor: '#0a0a0a' }}>
          <div className="container">
            <h2 className="mono" style={{ textAlign: 'center' }}>&gt; System_Architecture</h2>
            <div className="terminal-window" style={{ marginTop: '3rem', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--terminal-border)', paddingBottom: '1rem' }}>
                <div className="mono" style={{ color: 'var(--accent-blue)' }}>User Command (CLI)</div>
                <div className="mono">=&gt;</div>
                <div className="mono" style={{ color: 'var(--text-primary)' }}>CLI Controller</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--terminal-border)', paddingBottom: '1rem' }}>
                <div className="mono" style={{ color: 'var(--text-primary)' }}>CLI Controller</div>
                <div className="mono">=&gt;</div>
                <div className="mono" style={{ color: 'var(--accent-yellow)' }}>Scanner Module (Puppeteer) & AI Agent</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--terminal-border)', paddingBottom: '1rem' }}>
                <div className="mono" style={{ color: 'var(--accent-yellow)' }}>Scanner Module</div>
                <div className="mono">=&gt;</div>
                <div className="mono" style={{ color: 'var(--accent-green)' }}>Plugin Manager (XSS, SQLi, etc)</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed var(--terminal-border)', paddingBottom: '1rem' }}>
                <div className="mono" style={{ color: 'var(--accent-green)' }}>Vulnerability Detection</div>
                <div className="mono">=&gt;</div>
                <div className="mono" style={{ color: 'var(--accent-red)' }}>AI Analysis Engine (LLM)</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="mono" style={{ color: 'var(--accent-red)' }}>AI Analysis Engine</div>
                <div className="mono">=&gt;</div>
                <div className="mono" style={{ color: 'var(--text-primary)' }}>Risk Assessment & PDF/JSON Report</div>
              </div>
            </div>
          </div>
        </section>

        <section id="install" className="section" style={{ backgroundColor: '#111' }}>
          <div className="container" style={{ maxWidth: '600px' }}>
            <h2 className="mono" style={{ textAlign: 'center' }}>&gt; Installation</h2>
            <div className="code-block mono" style={{ marginTop: '2rem' }}>
              <span style={{ color: 'var(--text-primary)' }}>npm install -g kramscan</span>
              <button className="copy-btn" onClick={() => navigator.clipboard.writeText('npm install -g kramscan')}>Copy</button>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-secondary)' }}>
              Or run directly: <span className="mono" style={{ color: 'var(--accent-green)' }}>npx kramscan scan https://example.com</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer mono">
        <div className="container">
          <p>© {new Date().getFullYear()} Akram Shaikh. Licensed under MIT.</p>
          <p style={{ marginTop: '10px' }}>
            <a href="https://akramshaikh.me" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>Website</a> | 
            <a href="https://github.com/shaikhakramshakil" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none', marginLeft: '10px' }}>GitHub</a>
          </p>
        </div>
      </footer>
    </>
  );
}
