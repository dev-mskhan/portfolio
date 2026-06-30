import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: data.get("Name"),
          email: data.get("Email"),
          message: data.get("Message"),
        }),
      });

      if (!res.ok) throw new Error("Web3Forms request failed");

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Web3Forms error:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              index="// 04"
              title="Let's build something"
              subtitle="Have a project, role, or research collaboration in mind? Send a message — it lands straight in my inbox."
            />
            <div className="space-y-3 font-mono text-sm text-muted-foreground">
              <p>
                <span className="text-primary">email</span> &rarr;
                dev.mskhan@gmail.com
              </p>
              <p>
                <span className="text-primary">phone</span> &rarr; 0318 4606617
              </p>
              <p>
                <span className="text-primary">based</span> &rarr; Multan,
                Pakistan
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-border bg-card p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-mono text-xs text-muted-foreground"
                >
                  NAME
                </label>
                <input
                  id="name"
                  name="Name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="border border-border bg-input px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-mono text-xs text-muted-foreground"
                >
                  EMAIL
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="border border-border bg-input px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs text-muted-foreground"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="Message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="resize-none border border-border bg-input px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 border border-primary bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground transition-colors hover:bg-transparent hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="inline-flex items-center gap-2 border border-primary bg-muted px-4 py-3 font-mono text-xs text-primary">
                  <CheckCircle2 size={15} /> Message sent — thanks for reaching
                  out!
                </p>
              )}
              {status === "error" && (
                <p className="inline-flex items-center gap-2 border border-border bg-muted px-4 py-3 font-mono text-xs text-muted-foreground">
                  <AlertTriangle size={15} className="text-primary" /> Something
                  went wrong. Email me directly instead.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
