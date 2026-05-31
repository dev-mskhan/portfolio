import { motion } from "framer-motion";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
const services = [
  {
    name: "Front End Development",
    description: "Building responsive, dynamic UIs with React.js, Redux Toolkit, Tailwind CSS, and Material UI.",
    icon: "fa-solid fa-code",
  },
  {
    name: "Back End Development",
    description: "Creating scalable server-side solutions with Node.js, Express.js, and microservices architecture.",
    icon: "fa-solid fa-server",
  },
  {
    name: "AI & LLM Integration",
    description: "Building agentic AI solutions — integrating LLMs, RAG pipelines, and OpenAI/HuggingFace APIs.",
    icon: "fa-solid fa-brain",
  },
  {
    name: "Database Engineering",
    description: "Designing and managing MongoDB, PostgreSQL, Prisma, Redis, and vector databases like Pinecone.",
    icon: "fa-solid fa-database",
  },
  {
    name: "API Development",
    description: "Building RESTful and GraphQL APIs with secure coding standards and Zod validation.",
    icon: "fa-solid fa-network-wired",
  },
  {
    name: "Real-Time Applications",
    description: "Implementing live features with Socket.IO — chat, notifications, and live bidding systems.",
    icon: "fa-solid fa-bolt",
  },
  {
    name: "Testing & QA",
    description: "Unit, integration, and E2E testing with Jest, Cypress, and CodeRabbit for clean, maintainable code.",
    icon: "fa-solid fa-bug",
  },
  {
    name: "DevOps & Deployment",
    description: "Docker containerization, CI/CD pipelines, and deploying on Vercel, Netlify, Render, and AWS/GCP.",
    icon: "fa-solid fa-rocket",
  },
];

const Services = () => {
  return (
    <motion.section
      key="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="w-4/5 mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          pagination={{ el: ".custom-swiper-pagination", clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service) => {
            return (
              <SwiperSlide key={service.name} className="!h-auto flex">
                <div className="w-full rounded-xl glassdoor-effect p-6 md:p-8 flex flex-col justify-between items-center text-center gap-y-3 transition-all duration-300 hover:border-purple-500/35 hover:bg-white/15 min-h-[260px] md:min-h-[280px]">
                  <div className="flex flex-col items-center gap-y-3">
                    <i className={`${service.icon} text-3xl text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.55)]`}></i>
                    <h3 className="text-xl md:text-2xl font-semibold text-white/95">{service.name}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-swiper-pagination mt-6 flex justify-center" />
      </div>
    </motion.section>
  );
};

export default Services;
