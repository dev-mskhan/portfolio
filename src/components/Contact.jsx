import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [statusMessage, setStatusMessage] = useState(null); // success or error
  const [statusType, setStatusType] = useState("success"); // "success" or "error"

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_dragzfq",
        "template_8a7o55r",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "PcUjhWzw-SsWgI8yp"
      );
      setStatusType("success");
      setStatusMessage("Your message was sent successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatusType("error");
      setStatusMessage("Failed to send message. Please try again later.");
    }

    // Auto-clear message after 5 seconds
    setTimeout(() => {
      setStatusMessage(null);
    }, 5000);
  };

  return (
    <motion.section
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-xl mx-auto px-4 pt-10 text-center"
    >
      <h2 className="text-2xl font-bold mb-2">Let's get in touch!</h2>
      <p className="mb-6 text-white/70">
        Feel free to message me directly. I usually respond within 24 hours.
      </p>
      <div className="mb-6 text-left text-white/60">
        <p>
          <strong>Email:</strong>{" "}
          <small className="text-blue-400 hover:underline text-lg">
            dev.mskhan@gmail.com
          </small>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <small className="text-blue-400 text-lg hover:underline">
            +92 318 4606617
          </small>
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-left"
      >
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="Your Name"
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50"
        />
        {errors.name && (
          <span className="text-red-400 text-sm">Name is required</span>
        )}

        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Your Email"
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50"
        />
        {errors.email && (
          <span className="text-red-400 text-sm">Email is required</span>
        )}

        <textarea
          rows="4"
          {...register("message", { required: true })}
          placeholder="Your Message"
          className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 resize-none"
        />
        {errors.message && (
          <span className="text-red-400 text-sm">Message is required</span>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="self-center mt-2 bg-[#ddcecd] cursor-pointer text-[#26081c] font-semibold px-6 py-2 rounded-full transition"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {statusMessage && (
        <div
          className={`text-sm py-3 ${
            statusType === "success" ? "text-green-400" : "text-red-500"
          }`}
        >
          {statusMessage}
        </div>
      )}
    </motion.section>
  );
}
