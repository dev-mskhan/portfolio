export default function Header() {
  return (
    <header className="flex justify-between items-center py-9">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Shahzaib Khan</h1>
        <p className="text-sm md:text-lg text-[#e4fde1]">
          Full Stack Developer | React Enthusiast
        </p>
      </div>
      <img
        src="/images/shahzaib-profile.jpg"
        alt="Profile"
        className="h-16 w-16 md:h-18 md:w-18 lg:w-20 lg:h-20 rounded-full border-3 border-white object-cover shadow-lg flex-shrink-0"
      />
    </header>
  );
}
