export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-white/10 py-6 px-4 text-white/80 bg-transparent">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Catchy heading or message */}
        <div>
          <h2 className="text-lg font-semibold text-white">
            Let’s build something great together!
          </h2>
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Shahzaib Khan — Built with ❤️
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/dev-mskhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/shahzaibkhan45/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
