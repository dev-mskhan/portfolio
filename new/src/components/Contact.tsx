import { useState, type FormEvent } from "react";
import { track } from "@vercel/analytics";
import { AlertTriangle, CheckCircle2, Loader2, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: data.get("Name"),
          email: data.get("Email"),
          message: data.get("Message"),
        }),
      });

      if (!response.ok) throw new Error("Web3Forms request failed");

      setStatus("success");
      track("contact_form_success");
      form.reset();
    } catch (error) {
      console.error("Web3Forms error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="content-section">
      <div className="page-width section-space">
        <div className="contact-layout">
          <div data-scroll-reveal>
            <SectionHeading
              title="Let's build something"
              subtitle="Have a project, role, or research collaboration in mind? Send a message and it lands straight in my inbox."
            />
            <div className="contact-details">
              <p><span>EMAIL</span>{profile.email}</p>
              <p><span>PHONE</span>{profile.phone}</p>
              <p><span>BASED</span>{profile.location}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form" data-scroll-reveal>
            <div className="form-field">
              <label htmlFor="name">NAME</label>
              <input
                id="name"
                name="Name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="Message"
                required
                rows={5}
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" disabled={status === "submitting"} className="button button-primary w-fit">
              {status === "submitting" ? (
                <><Loader2 size={16} className="animate-spin" aria-hidden="true" /> Sending...</>
              ) : (
                <>Send message <span className="button-arrow" aria-hidden="true"><Send size={14} /></span></>
              )}
            </button>

            {status === "success" && (
              <p className="form-status form-status-success" role="status">
                <CheckCircle2 size={15} className="mr-1 inline" aria-hidden="true" />
                Message sent, thanks for reaching out!
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status-error" role="alert">
                <AlertTriangle size={15} className="mr-1 inline" aria-hidden="true" />
                Something went wrong. Email me directly instead.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
