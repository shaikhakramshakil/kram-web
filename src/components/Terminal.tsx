"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface HistoryEntry {
  id: string;
  command: string;
  output: React.ReactNode;
}

export default function Terminal() {
  const [phase, setPhase] = useState<"typing" | "scanning" | "interactive">("typing");
  const [typedText, setTypedText] = useState("");
  const [scanLines, setScanLines] = useState<React.ReactNode[]>([]);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [runStep, setRunStep] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, []);

  useEffect(scroll, [typedText, scanLines, history, input, runStep, scroll]);

  // ── Phase 1: type out the command character by character ──
  const command = "kramscan scan https://example.com";

  useEffect(() => {
    if (phase !== "typing") return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTypedText(command.slice(0, i));
      if (i >= command.length) {
        clearInterval(iv);
        setTimeout(() => setPhase("scanning"), 400);
      }
    }, 45);
    return () => clearInterval(iv);
  }, [phase]);

  // ── Phase 2: simulate scan output line by line ──
  useEffect(() => {
    if (phase !== "scanning") return;

    const lines: { node: React.ReactNode; delay: number }[] = [
      { delay: 300, node: <span style={{ color: "#737373" }}>[+] Initializing KramScan v0.4.0...</span> },
      { delay: 700, node: <span style={{ color: "#737373" }}>[+] Loading 10 plugins: XSS, SQLi, CSRF, CORS, Headers...</span> },
      { delay: 1200, node: <span style={{ color: "#737373" }}>[+] Launching headless browser...</span> },
      { delay: 2000, node: <span style={{ color: "#737373" }}>[+] Crawling 42 pages...</span> },
      { delay: 2800, node: <><span style={{ color: "var(--yellow)" }}>[!]</span> <span style={{ color: "#c8c8c8" }}>Missing Security Headers</span> <span style={{ color: "#737373" }}>on /login</span></> },
      { delay: 3400, node: <><span style={{ color: "var(--red)" }}>[!]</span> <span style={{ color: "#c8c8c8" }}>Reflected XSS</span> <span style={{ color: "#737373" }}>on /search?q=</span></> },
      { delay: 4000, node: <><span style={{ color: "var(--yellow)" }}>[!]</span> <span style={{ color: "#c8c8c8" }}>CORS Misconfiguration</span> <span style={{ color: "#737373" }}>on /api/v1/users</span></> },
      { delay: 4800, node: <span style={{ color: "#737373" }}>[+] Running AI analysis (Claude-3.5-Sonnet)...</span> },
      { delay: 5600, node: <span style={{ color: "#737373" }}>[+] Generating remediation report...</span> },
      { delay: 6400, node: <span style={{ color: "#f0f0f0" }}>Scan complete — 2 high, 1 medium finding. Report → ~/.kramscan/reports/scanreport.pdf</span> },
    ];

    const timeouts = lines.map((l) =>
      setTimeout(() => {
        setScanLines((prev) => [...prev, l.node]);
      }, l.delay)
    );

    const finishTimeout = setTimeout(() => {
      setPhase("interactive");
    }, 7200);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(finishTimeout);
    };
  }, [phase]);

  // ── Focus input when interactive ──
  useEffect(() => {
    if (phase === "interactive") inputRef.current?.focus();
  }, [phase, isRunning]);

  // ── Handle user commands ──
  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || isRunning) return;
    const cmd = input.trim();

    if (cmd === "clear") {
      setHistory([]);
      setScanLines([]);
      setTypedText("");
      setInput("");
      return;
    }

    let output: React.ReactNode = null;

    if (cmd === "") {
      output = null;
    } else if (cmd === "help") {
      output = (
        <div style={{ color: "#737373" }}>
          <span style={{ color: "var(--green)" }}>kramscan scan &lt;url&gt;</span>{"  "}Full vulnerability scan<br />
          <span style={{ color: "var(--green)" }}>kramscan --version</span>{"     "}Show version<br />
          <span style={{ color: "var(--green)" }}>kramscan doctor</span>{"        "}Check environment<br />
          <span style={{ color: "var(--green)" }}>whoami</span>{"                "}Current user<br />
          <span style={{ color: "var(--green)" }}>clear</span>{"                 "}Clear terminal
        </div>
      );
    } else if (cmd === "kramscan --version" || cmd === "kramscan -v") {
      output = <span style={{ color: "#737373" }}>kramscan/0.4.0 node/v20.11.0 win32-x64</span>;
    } else if (cmd === "whoami") {
      output = <span style={{ color: "#737373" }}>security_auditor</span>;
    } else if (cmd === "kramscan doctor") {
      output = (
        <div style={{ color: "#737373" }}>
          <span style={{ color: "var(--green)" }}>✓</span> Node.js v20.11.0<br />
          <span style={{ color: "var(--green)" }}>✓</span> Puppeteer installed<br />
          <span style={{ color: "var(--green)" }}>✓</span> AI provider configured (Anthropic)<br />
          <span style={{ color: "var(--green)" }}>✓</span> Config loaded from ~/.kramscan/config.json<br />
          All checks passed.
        </div>
      );
    } else if (cmd.startsWith("kramscan scan ")) {
      const url = cmd.replace("kramscan scan ", "");
      setIsRunning(true);
      setRunStep(0);
      output = <span style={{ color: "#737373" }}>Starting scan on {url}...</span>;

      setHistory((prev) => [...prev, { id: crypto.randomUUID(), command: cmd, output }]);
      setInput("");
      return;
    } else {
      output = <span style={{ color: "var(--red)" }}>command not found: {cmd.split(" ")[0]}</span>;
    }

    setHistory((prev) => [...prev, { id: crypto.randomUUID(), command: cmd, output }]);
    setInput("");
  };

  // ── Animate user-triggered scan ──
  useEffect(() => {
    if (!isRunning) return;
    const steps: { delay: number; step: number }[] = [
      { delay: 500, step: 1 },
      { delay: 1400, step: 2 },
      { delay: 2800, step: 3 },
      { delay: 4200, step: 4 },
    ];
    const timeouts = steps.map((s) =>
      setTimeout(() => {
        setRunStep(s.step);
        if (s.step === 4) setIsRunning(false);
      }, s.delay)
    );
    return () => timeouts.forEach(clearTimeout);
  }, [isRunning]);

  return (
    <div
      className="terminal-window"
      onClick={() => inputRef.current?.focus()}
      style={{ cursor: "text", height: "380px", display: "flex", flexDirection: "column" }}
    >
      <div className="terminal-header" style={{ cursor: "default" }}>
        <div className="terminal-dots">
          <div className="dot red" />
          <div className="dot yellow" />
          <div className="dot green" />
        </div>
        <div className="terminal-title mono">user@kramscan: ~</div>
      </div>

      <div className="terminal-body mono" ref={bodyRef} style={{ flexGrow: 1, overflowY: "auto" }}>
        {/* ── Intro simulation ── */}
        {(phase === "typing" || phase === "scanning" || (phase === "interactive" && typedText)) && (
          <div style={{ marginBottom: "12px" }}>
            <div>
              <span style={{ color: "var(--blue)" }}>~</span>{" "}
              <span style={{ color: "var(--green)" }}>$</span>{" "}
              {typedText}
              {phase === "typing" && <span className="cursor" />}
            </div>
            {scanLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}

        {/* ── Waiting indicator during scan sim ── */}
        {phase === "scanning" && (
          <div style={{ marginTop: "4px" }}>
            <span className="cursor" />
          </div>
        )}

        {/* ── Interactive history ── */}
        {phase === "interactive" && history.map((entry) => (
          <div key={entry.id} style={{ marginBottom: "10px" }}>
            <div>
              <span style={{ color: "var(--blue)" }}>~</span>{" "}
              <span style={{ color: "var(--green)" }}>$</span>{" "}
              {entry.command}
            </div>
            {entry.output}

            {/* user-triggered scan output */}
            {entry.command.startsWith("kramscan scan ") && (isRunning || runStep > 0) && entry.id === history[history.length - 1]?.id && (
              <div style={{ marginTop: "6px" }}>
                {runStep >= 1 && <div style={{ color: "#737373" }}>[+] Loading plugins... Starting headless browser...</div>}
                {runStep >= 2 && (
                  <div>
                    <span style={{ color: "var(--yellow)" }}>[!]</span> Missing Security Headers on /login<br />
                    <span style={{ color: "var(--red)" }}>[!]</span> Reflected XSS on /search?q=
                  </div>
                )}
                {runStep >= 3 && <div style={{ color: "#737373" }}>[+] Running AI analysis...</div>}
                {runStep >= 4 && <div style={{ color: "#f0f0f0" }}>Scan complete — 2 high, 1 medium. Report saved.</div>}
              </div>
            )}
          </div>
        ))}

        {/* ── Input prompt ── */}
        {phase === "interactive" && !isRunning && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ color: "var(--blue)" }}>~</span>
            <span style={{ color: "var(--green)", marginLeft: "4px", marginRight: "8px" }}>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--green)",
                fontFamily: "var(--font-fira-code), monospace",
                fontSize: "0.88rem",
                outline: "none",
                flexGrow: 1,
                caretColor: "var(--green)",
              }}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        )}

        {/* ── Busy cursor during user scan ── */}
        {phase === "interactive" && isRunning && (
          <div style={{ marginTop: "6px" }}><span className="cursor" /></div>
        )}
      </div>
    </div>
  );
}
