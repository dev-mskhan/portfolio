export default function Header() {
  return (
    <header className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 py-10 md:py-12 border-b border-white/5">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-white via-purple-200 to-[#ddcecd] bg-clip-text text-transparent">
          Shahzaib Khan
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-start gap-1 items-center text-sm md:text-base text-gray-300">
          <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-100 font-medium text-xs md:text-sm">
            Full Stack Developer
          </span>
          <span className="text-white/20">•</span>
          <span className="px-3 py-1 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-300 font-medium text-xs md:text-sm">
            MERN Stack
          </span>
          <span className="text-white/20">•</span>
          <span className="px-3 py-1 rounded-full bg-purple-700/10 border border-purple-700/20 text-purple-400 font-medium text-xs md:text-sm">
            AI Enthusiast
          </span>
        </div>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-700"></div>
        <img
          src="/images/shahzaib-profile.png"
          alt="Shahzaib Khan"
          className="relative h-15 w-15 md:h-18 md:w-18 lg:w-20 lg:h-20 rounded-full border-2 border-white/30 object-cover shadow-2xl flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </header>
  );
}
