import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";

const SkillsSection = () => {
  const { themeColors, theme } = useSelector((state) => state.themeReducer);
  const [hoveredTech, setHoveredTech] = useState(null);

  const techCategories = {
    frontend: {
      title: "Frontend & UI",
      description:
        "Technologies for building responsive, accessible, and high-performance user interfaces.",
      icons: [
        {
          name: "React.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          tooltipColor: "#61DAFB",
        },
        {
          name: "Next.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          tooltipColor: "#000000",
        },
        {
          name: "TypeScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          tooltipColor: "#3178C6",
        },
        {
          name: "JavaScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          tooltipColor: "#F7DF1E",
        },
        {
          name: "HTML5",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          tooltipColor: "#E34F26",
        },
        {
          name: "CSS3",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          tooltipColor: "#1572B6",
        },
        {
          name: "Tailwind CSS",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          tooltipColor: "#38B2AC",
        },
        {
          name: "Material UI",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
          tooltipColor: "#0081CB",
        },
        {
          name: "Redux",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
          tooltipColor: "#764ABC",
        },
        {
          name: "WordPress",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
          tooltipColor: "#21759B",
        },
      ],
    },
    backend: {
      title: "Backend & Data",
      description:
        "Server-side services, APIs, and databases for full-stack capability.",
      icons: [
        {
          name: "Node.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          tooltipColor: "#339933",
        },
        {
          name: "PostgreSQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          tooltipColor: "#4169E1",
        },
        {
          name: "MySQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          tooltipColor: "#4479A1",
        },
        {
          name: "MongoDB",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          tooltipColor: "#47A248",
        },
        {
          name: "Supabase",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
          tooltipColor: "#3ECF8E",
        },
        {
          name: "Firebase",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          tooltipColor: "#FFCA28",
        },
        {
          name: "GraphQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          tooltipColor: "#E10098",
        },
        {
          name: "Laravel",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
          tooltipColor: "#FF2D20",
        },
        {
          name: "Python",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          tooltipColor: "#3776AB",
        },
        {
          name: "Go",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
          tooltipColor: "#00ADD8",
        },
      ],
    },
    other: {
      title: "Tools, Cloud & Testing",
      description:
        "Platforms and tooling for deployment, collaboration, and code quality.",
      icons: [
        {
          name: "Git",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          tooltipColor: "#F05032",
        },
        {
          name: "GitHub",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          tooltipColor: "#181717",
        },
        {
          name: "GitLab",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
          tooltipColor: "#FC6D26",
        },
        {
          name: "Docker",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          tooltipColor: "#2496ED",
        },
        {
          name: "Kubernetes",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
          tooltipColor: "#326CE5",
        },
        {
          name: "AWS",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          tooltipColor: "#FF9900",
        },
        {
          name: "Google Cloud",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
          tooltipColor: "#4285F4",
        },
        {
          name: "Jira",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
          tooltipColor: "#0052CC",
        },
        {
          name: "Postman",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
          tooltipColor: "#FF6C37",
        },
        {
          name: "Jest",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
          tooltipColor: "#C21325",
        },
        {
          name: "Cypress",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg",
          tooltipColor: "#17202C",
        },
        {
          name: "Figma",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          tooltipColor: "#F24E1E",
        },
      ],
    },
  };

  return (
    <section
      className="py-28 px-4 sm:px-8 lg:px-12 relative overflow-hidden"
      style={{ backgroundColor: themeColors.bg }}
      id="skills"
    >
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div
          className="absolute -top-1/3 -left-1/3 w-full h-full"
          style={{
            background: `radial-gradient(circle at center, ${themeColors.primaryColor} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute -bottom-1/3 -right-1/3 w-full h-full"
          style={{
            background: `radial-gradient(circle at center, ${themeColors.secondary} 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title={"Explore My"}
          highlight={"Skills"}
          subtitle={"Technologies that power my full-stack development toolkit"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(techCategories).map(([key, category], i) => (
            <motion.div
              key={key}
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{
                background: `${themeColors.cardBg}4D`,
                border: `1px solid ${themeColors.border}`,
                backdropFilter: "blur(16px)",
                boxShadow: `0 8px 32px ${
                  theme === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"
                }`,
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 + 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <motion.h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: themeColors.primaryColor }}
                  whileHover={{ x: 5 }}
                >
                  {category.title}
                </motion.h3>
                <motion.p
                  className="text-sm"
                  style={{ color: themeColors.summeryText }}
                >
                  {category.description}
                </motion.p>
              </div>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                {category.icons.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="relative group flex flex-col items-center"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center rounded-xl relative"
                      style={{
                        backgroundColor: themeColors.cardBg,
                        border: `1px solid ${themeColors.border}`,
                      }}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: `0 0 20px ${tech.tooltipColor}40`,
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle at center, ${tech.tooltipColor}20, transparent 70%)`,
                        }}
                        transition={{ duration: 0.3 }}
                      />

                      <img
                        src={tech.src}
                        alt={tech.name}
                        className="w-8 h-8 object-contain z-10"
                        style={{
                          filter: theme === "dark" ? "brightness(0.9)" : "none",
                        }}
                      />
                    </motion.div>

                    <AnimatePresence>
                      {hoveredTech === tech.name && (
                        <motion.div
                          className="absolute bottom-full mb-3 px-3 py-2 rounded-md text-xs font-semibold z-50"
                          style={{
                            backgroundColor: tech.tooltipColor,
                            color: "#FFFFFF",
                            boxShadow: `0 4px 12px ${tech.tooltipColor}60`,
                          }}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 20,
                            },
                          }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        >
                          {tech.name}
                          <div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent"
                            style={{
                              borderTopColor: tech.tooltipColor,
                              filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              backgroundColor: themeColors.primaryColor,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 60],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
