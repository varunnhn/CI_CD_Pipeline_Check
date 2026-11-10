import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";

const BAD_JSON = `{
  "name": "Darth Vader",
  "decision": "INVALID",
  "probability": 0.0328,
  "is_name": false,
  "stage": "ensemble",
  "reason_code": "FICTIONAL_CHARACTER_MATCH",
  "model_used": "ensemble-v2-6specialist",
  "response_time_ms": 6.81
}`;

const GOOD_JSON = `{
  "name": "James H. Smith",
  "decision": "VALID",
  "probability": 1.0,
  "is_name": true,
  "stage": "ensemble",
  "likely_origin_region": "General",
  "model_used": "ensemble-v2-6specialist",
  "response_time_ms": 8.44
}`;

const wait = (ms) => new Promise(res => setTimeout(res, ms));

export default function CodeSnippet() {
  // view: "FORM" | "CODE"
  const [view, setView] = useState("FORM");
  const [inputValue, setInputValue] = useState("");
  const [jsonText, setJsonText] = useState("");
  const [cursorPos, setCursorPos] = useState({ x: 150, y: 250 });
  const [isClicking, setIsClicking] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    let mounted = true;

    // Reduced motion: show the finished state, run nothing.
    if (prefersReduced) {
      setView("CODE");
      setIsValid(true);
      setInputValue("James H. Smith");
      setJsonText(GOOD_JSON);
      return () => { mounted = false; };
    }

    const typeText = async (text, setter, speed = 50) => {
      let current = "";
      for (let i = 0; i < text.length; i++) {
        if (!mounted) return;
        current += text[i];
        setter(current);
        await wait(speed);
      }
    };

    const runSequence = async () => {
      let passes = 0;
      while (mounted && passes < 2) {
        passes += 1;
        // --- CYCLE 1: BAD NAME ---
        setIsValid(false);
        setView("FORM");
        setInputValue("");
        setJsonText("");
        setCursorPos({ x: 150, y: 200 }); // Start cursor bottom-right
        await wait(800);
        if (!mounted) break;
        
        // Type bad name
        await typeText("Darth Vader", setInputValue, 80);
        await wait(400);
        
        // Move cursor to "Continue" button (center is 0, button is roughly y: 65)
        setCursorPos({ x: 0, y: 65 }); 
        await wait(700); // Wait for cursor move animation
        
        // Click
        setIsClicking(true);
        await wait(150);
        setIsClicking(false);
        await wait(300);
        
        // Transition to Code view
        setView("CODE");
        await wait(600);
        
        // Type JSON response
        await typeText(BAD_JSON, setJsonText, 10);
        await wait(3000); // Let user read it

        // --- CYCLE 2: GOOD NAME ---
        setIsValid(true);
        setView("FORM");
        setInputValue("");
        setJsonText("");
        setCursorPos({ x: 150, y: 200 });
        await wait(800);
        if (!mounted) break;

        // Type good name
        await typeText("James H.Smith", setInputValue, 80);
        await wait(400);

        // Move cursor to "Continue" button
        setCursorPos({ x: 0, y: 65 }); 
        await wait(700);
        
        // Click
        setIsClicking(true);
        await wait(150);
        setIsClicking(false);
        await wait(300);

        // Transition to Code view
        setView("CODE");
        await wait(600);
        
        // Type JSON response
        await typeText(GOOD_JSON, setJsonText, 10);
        await wait(4000); // Let user read it
      }
    };

    runSequence();

    return () => { mounted = false; };
  }, [prefersReduced]);

  const renderJsonLine = (line) => {
    let html = line
      .replace(/("[^"]+"):/g, '<span class="text-blue-200/90">$1</span>:')
      .replace(/: (true|false|null)/g, ': <span class="text-orange-300">$1</span>')
      .replace(/: ([\d.]+)/g, ': <span class="text-purple-300/90">$1</span>')
      .replace(/: ("[^"]+")/g, ': <span class="text-green-200/90">$1</span>');
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div className="bg-[#0A0A0A] border border-[var(--border)] rounded-xl overflow-hidden text-xs sm:text-xs font-mono text-left w-full shadow-2xl relative flex flex-col h-full min-h-[450px]">
      
      {/* Header Bar */}
      <div className="flex items-center px-4 py-3 bg-white/[0.02] border-b border-[var(--border)] relative z-20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="ml-4 text-[var(--text-muted)] text-[10px] uppercase tracking-wider">
          {view === "FORM" ? "Client Form" : "POST /v1/evaluate/name"}
        </div>
        
        <div className={`ml-auto flex items-center transition-opacity duration-300 ${view === "CODE" && jsonText.length > 50 ? 'opacity-100' : 'opacity-0'}`}>
          {isValid ? (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-green-900 bg-green-950/30 text-green-400 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase">DECISION: VALID</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-red-900/60 bg-red-950/20 text-red-300 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="text-[10px] font-bold tracking-widest uppercase">DECISION: INVALID</span>
            </div>
          )}
        </div>
      </div>

      <div className="relative flex-1">
        <AnimatePresence mode="wait">
          {view === "FORM" && (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 p-6 flex flex-col justify-center items-center font-sans bg-[var(--canvas)]"
            >
              <div className="w-full max-w-[280px] bg-[var(--container)] p-6 border border-[var(--border)] rounded-lg shadow-xl relative">
                <h3 className="text-white font-semibold mb-4 text-sm">Account Verification</h3>
                <div className="mb-4">
                  <label className="block text-[10px] text-[var(--text-muted)] uppercase tracking-wider mb-1">Full Name</label>
                  <div className="w-full bg-[#111] border border-[var(--border)] rounded px-3 py-2 text-white h-[36px] flex items-center overflow-hidden">
                    {inputValue}
                    <motion.span 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="ml-0.5 inline-block w-1.5 h-4 bg-white/50"
                    />
                  </div>
                </div>
                <motion.button 
                  animate={{ scale: isClicking ? 0.95 : 1, filter: isClicking ? "brightness(0.8)" : "brightness(1)" }}
                  className="w-full bg-white text-black font-semibold rounded py-2 text-xs"
                >
                  Continue
                </motion.button>
              </div>

              {/* Fake Mouse Cursor */}
              <motion.div 
                className="absolute z-50 pointer-events-none drop-shadow-xl"
                initial={{ x: 150, y: 200 }}
                animate={{ x: cursorPos.x, y: cursorPos.y }}
                transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.5 }}
                style={{ top: "50%", left: "50%", marginLeft: "-6px", marginTop: "-6px" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white fill-black">
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                </svg>
              </motion.div>
            </motion.div>
          )}

          {view === "CODE" && (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 p-5 overflow-y-auto text-white/70 leading-relaxed"
            >
              <pre className="whitespace-pre-wrap break-words text-[11px] sm:text-xs">
                <code>
                  <div className="text-gray-300">
                    {jsonText.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {renderJsonLine(line)}
                      </React.Fragment>
                    ))}
                  </div>
                </code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
