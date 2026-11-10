import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const fullText = "> 404: Endpoint not found.\n> The requested resource does not exist.\n> Press below to return home.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(intervalId);
    }, 30);
    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-5 min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full bg-[var(--container)] border border-[var(--border)] p-8 rounded-xl shadow-2xl relative overflow-hidden"
      >
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            System Alert // 404
        </span>
        
        <pre
          className="font-mono text-sm leading-loose whitespace-pre-wrap min-h-[100px]"
          style={{ color: "var(--accent)" }}
        >
          {displayedText}
          <span className="animate-pulse">_</span>
        </pre>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <Link to="/" className="group cta-outline inline-flex items-center gap-2">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Return Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
