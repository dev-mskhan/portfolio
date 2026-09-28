import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, MessageCircle, Send, X } from "lucide-react";
import { profile, projects, skillGroups } from "../data";

type Message = {
  id: number;
  role: "assistant" | "visitor";
  text: string;
  links?: Array<{ label: string; href: string }>;
};

const suggestedQuestions = ["Explore projects", "What technologies?", "How can I get in touch?"];

function answerQuestion(question: string): Pick<Message, "text" | "links"> {
  const normalized = question.toLowerCase();

  if (/project|work|ecommerce|auction|crm|case study/.test(normalized)) {
    return {
      text: `The portfolio features ${projects.map(({ title }) => title).join(", ")}.`,
      links: projects.map((project) => ({
        label: project.title,
        href: `/work/${project.slug}`,
      })),
    };
  }

  if (/skill|stack|technolog|language|build/.test(normalized)) {
    return {
      text: skillGroups.map((group) => `${group.label}: ${group.items.join(", ")}`).join(". "),
      links: [{ label: "Browse the full stack", href: "/#skills" }],
    };
  }

  if (/contact|email|hire|reach|talk|connect/.test(normalized)) {
    return {
      text: `You can reach Muhammad directly at ${profile.email}.`,
      links: [
        { label: "Send an email", href: `mailto:${profile.email}` },
        { label: "Go to the contact form", href: "/#contact" },
      ],
    };
  }

  if (/about|who|profile|location|where/.test(normalized)) {
    return {
      text: `${profile.name} is a ${profile.roleHirer}, based in ${profile.location}.`,
      links: [{ label: "Read the profile", href: "/#about" }],
    };
  }

  return {
    text: "I can help you find projects, technologies, and contact details.",
    links: [
      { label: "View projects", href: "/#work" },
      { label: "Contact Muhammad", href: `mailto:${profile.email}` },
    ],
  };
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      text: "Hi. I can help you explore the projects, technologies, and contact details on this portfolio.",
      links: [],
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  function addQuestion(question: string) {
    const userMessage: Message = {
      id: nextId.current++,
      role: "visitor",
      text: question,
    };
    const assistantMessage: Message = {
      id: nextId.current++,
      role: "assistant",
      ...answerQuestion(question),
    };
    setMessages((current) => [...current, userMessage, assistantMessage]);
  }

  useEffect(() => {
    if (!open) return;
    endRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;
    addQuestion(question);
    setInput("");
  }

  return (
    <aside className="chat-widget" aria-label="Portfolio assistant">
      {open && (
        <section className="chat-panel" role="dialog" aria-labelledby="chat-title">
          <header className="chat-header">
            <div className="chat-avatar" aria-hidden="true">MS</div>
            <div className="chat-heading">
              <h2 id="chat-title">Portfolio guide</h2>
              <p>Projects, skills, and contact details</p>
            </div>
            <button
              type="button"
              className="chat-close"
              onClick={() => setOpen(false)}
              aria-label="Close portfolio guide"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </header>

          <div className="chat-messages" aria-live="polite" aria-relevant="additions text">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-message chat-message-${message.role}`}
              >
                <p>{message.text}</p>
                {message.links && message.links.length > 0 && (
                  <div className="chat-message-links">
                    {message.links.map((link) => (
                      <a key={`${message.id}-${link.href}`} href={link.href}>
                        {link.label}
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {messages.length === 1 && (
            <div className="chat-suggestions" aria-label="Suggested questions">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => addQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <form id="chat-form" className="chat-form" onSubmit={sendMessage}>
            <label className="sr-only" htmlFor="chat-message">
              Ask about projects, technologies, or contact details
            </label>
            <input
              id="chat-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about the portfolio"
              autoComplete="off"
            />
            <button type="submit" disabled={!input.trim()} aria-label="Send message">
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      <div className="floating-actions">
        <button
          type="button"
          className="chat-launcher"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close portfolio guide" : "Open portfolio guide"}
          aria-expanded={open}
        >
          {open ? <X size={19} aria-hidden="true" /> : <MessageCircle size={19} aria-hidden="true" />}
          <span>{open ? "Close" : "Ask about my work"}</span>
        </button>
      </div>
    </aside>
  );
}
