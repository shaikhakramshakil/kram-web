"use client";

import { useState, useRef, useEffect } from "react";

interface CommandOutput {
  id: string;
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [input, setInput] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, input, scanStep]);

  useEffect(() => {
    if (isScanning) {
      const steps = [
        { delay: 500, step: 1 },
        { delay: 1500, step: 2 },
        { delay: 3000, step: 3 },
        { delay: 4500, step: 4 },
      ];
      
      const timeouts = steps.map((s) =>
        setTimeout(() => {
          setScanStep(s.step);
          if (s.step === 4) {
            setIsScanning(false);
          }
        }, s.delay)
      );

      return () => timeouts.forEach(clearTimeout);
    }
  }, [isScanning]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isScanning) {
      const cmd = input.trim();
      let output: React.ReactNode = null;

      if (cmd === "") {
        output = "";
      } else if (cmd === "help") {
        output = (
          <div style={{ color: '#a3a3a3' }}>
            Available commands:<br/>
            - <span style={{ color: 'var(--accent-green)' }}>kramscan scan &lt;url&gt;</span>: Start a vulnerability scan<br/>
            - <span style={{ color: 'var(--accent-green)' }}>kramscan --version</span>: Display version info<br/>
            - <span style={{ color: 'var(--accent-green)' }}>clear</span>: Clear terminal output<br/>
            - <span style={{ color: 'var(--accent-green)' }}>whoami</span>: Print current user
          </div>
        );
      } else if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      } else if (cmd === "kramscan --version" || cmd === "kramscan -v") {
        output = <div style={{ color: '#a3a3a3' }}>kramscan v0.4.0</div>;
      } else if (cmd === "whoami") {
        output = <div style={{ color: '#a3a3a3' }}>security_auditor</div>;
      } else if (cmd.startsWith("kramscan scan ")) {
        setIsScanning(true);
        setScanStep(0);
        output = <div style={{ color: '#a3a3a3' }}>Starting scan...</div>;
      } else {
        output = <div style={{ color: 'var(--accent-red)' }}>kramscan: command not found: {cmd.split(" ")[0]}</div>;
      }

      setHistory((prev) => [
        ...prev,
        { id: Math.random().toString(36).substr(2, 9), command: cmd, output },
      ]);
      setInput("");
    }
  };

  return (
    <div className="terminal-window" onClick={focusInput} style={{ cursor: "text", height: "400px", display: "flex", flexDirection: "column" }}>
      <div className="terminal-header" style={{ cursor: "default" }}>
        <div className="terminal-dots">
          <div className="dot red"></div>
          <div className="dot yellow"></div>
          <div className="dot green"></div>
        </div>
        <div className="terminal-title">user@kramscan: ~</div>
      </div>
      <div className="terminal-body mono" ref={terminalRef} style={{ flexGrow: 1, overflowY: "auto" }}>
        <div style={{ color: '#a3a3a3', marginBottom: '1rem' }}>
          Welcome to KramScan CLI v0.4.0.<br/>
          Type <span style={{ color: 'var(--accent-green)' }}>help</span> to see available commands, or try <span style={{ color: 'var(--accent-green)' }}>kramscan scan https://example.com</span>
        </div>

        {history.map((entry) => (
          <div key={entry.id} style={{ marginBottom: '10px' }}>
            <div>
              <span style={{ color: "var(--accent-blue)" }}>~</span> <span style={{ color: "var(--accent-green)" }}>$</span> {entry.command}
            </div>
            {entry.output}
            {entry.command.startsWith("kramscan scan ") && isScanning === false && history[history.length-1].id === entry.id && scanStep === 4 && (
              <div style={{ marginTop: '10px' }}>
                <div style={{ color: '#a3a3a3' }}>
                  [+] Initializing KramScan v0.4.0...<br/>
                  [+] Loading plugins: XSS, SQLi, CSRF, CORS, OpenRedirect...<br/>
                  [+] Starting headless browser...
                </div>
                <div style={{ marginTop: '10px' }}>
                  <span style={{ color: 'var(--accent-yellow)' }}>[!] Vulnerability Found:</span> Missing Security Headers on /login<br/>
                  <span style={{ color: 'var(--accent-red)' }}>[!] Vulnerability Found:</span> Reflected XSS on /search?q=<br/>
                  [+] Crawling 42 pages...
                </div>
                <div style={{ marginTop: '10px' }}>
                  [+] Engaging AI Analysis Engine (Claude-3.5-Sonnet)...<br/>
                  [+] Generating actionable remediation steps...
                </div>
                <div style={{ marginTop: '10px', color: '#fff' }}>
                  <br/>
                  Scan complete! 2 high, 1 medium issues found.<br/>
                  Report saved to ~/.kramscan/reports/scanreport.pdf
                </div>
              </div>
            )}
            {entry.command.startsWith("kramscan scan ") && isScanning && history[history.length-1].id === entry.id && (
              <div style={{ marginTop: '10px' }}>
                {scanStep >= 1 && (
                  <div className="animate-fade-in-up" style={{ color: '#a3a3a3' }}>
                    [+] Initializing KramScan v0.4.0...<br/>
                    [+] Loading plugins: XSS, SQLi, CSRF, CORS, OpenRedirect...<br/>
                    [+] Starting headless browser...
                  </div>
                )}
                {scanStep >= 2 && (
                  <div className="animate-fade-in-up" style={{ marginTop: '10px' }}>
                    <span style={{ color: 'var(--accent-yellow)' }}>[!] Vulnerability Found:</span> Missing Security Headers on /login<br/>
                    <span style={{ color: 'var(--accent-red)' }}>[!] Vulnerability Found:</span> Reflected XSS on /search?q=<br/>
                    [+] Crawling 42 pages...
                  </div>
                )}
                {scanStep >= 3 && (
                  <div className="animate-fade-in-up" style={{ marginTop: '10px' }}>
                    [+] Engaging AI Analysis Engine (Claude-3.5-Sonnet)...<br/>
                    [+] Generating actionable remediation steps...
                  </div>
                )}
                {scanStep >= 4 && (
                  <div className="animate-fade-in-up" style={{ marginTop: '10px', color: '#fff' }}>
                    <br/>
                    Scan complete! 2 high, 1 medium issues found.<br/>
                    Report saved to ~/.kramscan/reports/scanreport.pdf
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {!isScanning && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: "var(--accent-blue)" }}>~</span> <span style={{ color: "var(--accent-green)", marginLeft: '4px', marginRight: '8px' }}>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--accent-green)",
                fontFamily: "var(--font-fira-code), monospace",
                fontSize: "0.95rem",
                outline: "none",
                flexGrow: 1,
                width: "100%"
              }}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        )}
        {isScanning && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="cursor" style={{ marginTop: '10px' }}></span>
          </div>
        )}
      </div>
    </div>
  );
}
