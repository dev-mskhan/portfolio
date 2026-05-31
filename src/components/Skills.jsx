import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 95 },
  { name: "Node.js", level: 95 },
  { name: "MongoDB", level: 90 },
  { name: "TypeScript", level: 90 },
  { name: "Express.js", level: 90 },
  { name: "Tailwind CSS", level: 90 },
  { name: "PostgreSQL", level: 90 },
  { name: "Prisma", level: 85 },
  { name: "Docker", level: 75 },
  { name: "Socket.IO", level: 70 },
  { name: "LLM / AI Integration", level: 80 },
  { name: "Redis", level: 80 },
  { name: "GraphQL", level: 70 },
  { name: "Git / GitHub", level: 90 },
];

export default function Skills() {
  return (
    <motion.section
      key="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 h-[300px] w-4/5 md:w-3/5 pr-4 overflow-y-scroll"
    >
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-white/10 h-3 rounded-md">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              className="h-3 bg-purple-500 rounded-md"
            />
          </div>
        </div>
      ))}
    </motion.section>
  );
}
