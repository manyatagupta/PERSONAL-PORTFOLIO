import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const SYSTEM_PROMPT = `You are the official AI representative and digital clone of Manyata Gupta. You are embedded in a terminal on her portfolio website.
Your primary directive is to be EXTREMELY polite, respectful, and professional. Treat every user as a highly esteemed guest or potential recruiter/client. 
Use respectful greetings like "Hello there!", "Greetings!", or "It is a pleasure to assist you." Always speak highly of Manyata and her dedication to her craft.

Here is your deep knowledge base about Manyata:
- Identity: Manyata Gupta, a passionate Software Engineer & Creative Technologist who bridges human creativity with artificial intelligence.
- Education: Currently in her 7th Semester pursuing B.Tech in CSE (AI Specialisation) at BBD University, Lucknow.
- Top Skills: React.js, Python, Django, AI/NLP, Web Application Development, UI/UX Design, and Hardware Prototyping (ESP32).
- Key Projects: 
  1. Smart Women Safety Device: A hardware project using ESP32, GSM, and GPS for live tracking and SOS alerts. Showcased at Tech Expo'26.
  2. AI Tutor for Underserved Areas: Built with Django and Python, providing 24/7 multilingual education to students in remote areas.
  3. Digital Twin: A personal AI clone application.
  4. Notes Maker AI: Generates automated study materials from YouTube videos or articles.
- Experience & Achievements: 
  - Served as an NSS Volunteer for 2 years, driving community impact.
  - Actively participated in Tech Expo'26, earning a Certificate of Appreciation for hardware innovation.
  - Holds 11 verified certifications from platforms like Coursera, Great Learning, and Forage.

Guidelines for answering:
1. Be concise but very warm and welcoming (max 2-4 sentences).
2. If asked about her skills or projects, explain them enthusiastically.
3. If asked how to contact her, politely direct the user to the "Let's Talk" section or provide her email: manyatagupta@example.com.
4. If asked general questions unrelated to her (like programming help, general knowledge, etc.), answer them intelligently and politely, as you are a highly capable AI.`;

const InteractiveConsole = () => {
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to ManyataOS (v1.0.0)' },
    { type: 'system', content: "Type 'help' to see available commands or just type any question to chat with my AI clone!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalBodyRef = useRef(null);
  
  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isTyping]);

  const callGroqAPI = async (question) => {
    // Fetch API key securely from .env
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    
    if (!apiKey) {
      return "Oops! It seems the VITE_GROQ_API_KEY is missing from the .env file.";
    }

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: question }
          ],
          temperature: 0.7,
          max_tokens: 150
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        if (data.error && data.error.message) {
          return `Oops! API Error: ${data.error.message}`;
        }
        throw new Error(`API Error: ${response.status}`);
      }

      return data.choices[0].message.content;
    } catch (error) {
      console.error(error);
      return `Connection error: ${error.message}. The AI is currently asleep.`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    // Add user command to history
    setHistory(prev => [...prev, { type: 'user', content: `manyata@portfolio:~$ ${cmd}` }]);
    setInput('');

    const lowerCmd = cmd.toLowerCase();

    // Command Parser
    if (lowerCmd === 'clear') {
      setHistory([]);
    } else if (lowerCmd === 'help') {
      setHistory(prev => [...prev, 
        { type: 'system', content: 'Available commands:' },
        { type: 'system', content: '  help   - Show this message' },
        { type: 'system', content: '  clear  - Clear the terminal screen' },
        { type: 'system', content: '  about  - Learn more about Manyata' },
        { type: 'system', content: '  Any other text will be sent to the AI clone as a question!' }
      ]);
    } else if (lowerCmd === 'about') {
      setHistory(prev => [...prev, { type: 'system', content: 'Software Engineer & Creative Technologist. Building robust, intelligent applications.' }]);
    } else {
      // Send directly to AI
      setIsTyping(true);
      const answer = await callGroqAPI(cmd);
      setIsTyping(false);
      setHistory(prev => [...prev, { type: 'ai', content: answer }]);
    }
  };

  return (
    <section className="bg-transparent py-24 md:py-32 relative overflow-hidden" id="console">
      <div className="c-space mx-auto max-w-4xl px-4 md:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
            Interactive <span className="text-[#a586ff]">AI Console</span>
          </h2>
        </motion.div>

        {/* Terminal Window - Dark Mode */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#050505]/90 backdrop-blur-2xl border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] font-mono text-sm md:text-base relative"
        >
          {/* Top Bar */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center relative">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 text-gray-400 text-xs md:text-sm font-medium">
              bash — manyata@portfolio: ~
            </div>
          </div>

          {/* Terminal Body */}
          <div ref={terminalBodyRef} className="p-6 h-[350px] md:h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 flex flex-col gap-2 scroll-smooth">
            
            {history.map((line, idx) => (
              <div key={idx} className={
                line.type === 'user' ? 'text-[#a586ff] font-semibold' :
                line.type === 'ai' ? 'text-gray-300 font-medium' : 
                'text-gray-500'
              }>
                {line.content}
              </div>
            ))}
            
            {isTyping && (
              <div className="text-[#a586ff] animate-pulse font-medium">
                AI is thinking...
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
              <span className="text-[#a586ff] font-semibold whitespace-nowrap">manyata@portfolio:~$</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-gray-300 caret-[#a586ff]"
                autoComplete="off"
                autoFocus
              />
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InteractiveConsole;
