import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

export default function Projects() {
  const projectList = [
    {
      name: "Shop Rift",
      image: "/images/vendor.avif",
      description: "A premium AI-powered e-commerce platform featuring smart product recommendations, live cart updates, and robust vendor dashboards.",
      liveLink: "https://ai-ecommerce-six.vercel.app/",
      github: "https://github.com/dev-mskhan/ai-ecommerce",
    },
    {
      name: "Vanguard Fitness",
      image: "/images/fitness.avif",
      description: "A comprehensive fitness tracking web app with customizable workout routines, interactive progress analytics, and smart nutrition logging.",
      liveLink: "https://vanguard-fitness.vercel.app/",
      github: "https://github.com/dev-mskhan/vanguard_fitness",
    },
    {
      name: "Aura Studio",
      image: "/images/aura.avif",
      description: "A creative digital agency website with stunning immersive visuals, modern layout components, and rich interactive web experiences.",
      liveLink: "https://aura-studio-beta.vercel.app/",
      github: "https://github.com/dev-mskhan/aura-studio",
    },
    {
      name: "Velvet Vine",
      image: "/images/velvet.avif",
      description: "An elegant, high-end online wine store featuring secure checkout paths, rich taste profile filters, and custom recommendation guides.",
      liveLink: "https://velvet-vine-sooty.vercel.app/",
      github: "https://github.com/dev-mskhan/velvet-vine",
    },
  ];

  return (
    <motion.section
      key="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center relative px-2"
    >
      <div className="w-full md:w-11/12 relative px-4">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="py-4"
        >
          {projectList.map((project, index) => (
            <SwiperSlide key={index} className="!h-auto flex">
              <div className="w-full rounded-2xl overflow-hidden glassdoor-effect border border-white/10 hover:border-purple-500/35 hover:bg-white/15 bg-white/5 transition-all duration-500 flex flex-col justify-between h-full group">
                <div className="overflow-hidden relative h-40 md:h-44 lg:h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-1 gap-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 hover:bg-[#ddcecd] hover:text-[#26081c] text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer"
                    >
                      <i className="fas fa-external-link-alt text-[10px]" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer text-gray-300 hover:text-white"
                    >
                      <i className="fab fa-github text-[11px]" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Chevrons */}
        <div className="flex sm:block justify-center gap-4 mt-4 sm:mt-0">
          <div className="swiper-prev cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 bg-black/60 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/30 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:-left-6 md:-left-12 z-20">
            <i className="fas fa-chevron-left text-sm md:text-base"></i>
          </div>
          <div className="swiper-next cursor-pointer w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 bg-black/60 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/30 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:-right-6 md:-right-12 z-20">
            <i className="fas fa-chevron-right text-sm md:text-base"></i>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
