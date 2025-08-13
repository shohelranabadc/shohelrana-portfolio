import { ExternalLink, Github, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const Projects = () => {
    const { isDarkMode } = useTheme();

    const projects = [
        {
            title: "ForstPay",
            description:
                "FrostPay is a sleek, winter-themed utility bill payment app built with React and Firebase. It features secure authentication, bill tracking, payment management, and a frosty modern UI for a smooth user experience.",
            tech: ["HTML5", "CSS3", "JavaScript", "React", "TailwindCSS"],
            image: "https://i.ibb.co/DHL4hDJX/image.png",
            github: "https://github.com/RaheelArfeen/FrostPay",
            live: "https://frostpay-updated.netlify.app",
            featured: true,
        },
        {
            title: "Quiz-Website",
            description:
                "A full-stack task management application with user authentication and real-time updates.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            image: "https://i.ibb.co/Qv2jCQ2C/image.png",
            github: "https://github.com/RaheelArfeen/Quiz-website",
            live: "https://raheelarfeen.github.io/Quiz-website",
            featured: false,
        },
        {
            title: "Password Generator",
            description:
                "A simple and secure password generator built with HTML, CSS, and JavaScript. Easily create strong, customizable passwords with options for length, symbols, numbers, and more — perfect for improving online security.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            image: "https://i.ibb.co/TpD4gzG/image.png",
            github: "https://github.com/RaheelArfeen/Password-Generator",
            live: "https://raheelarfeen.github.io/Password-Generator",
            featured: false,
        },
        {
            title: "IPhone 14 Theme",
            description:
                "A clean and modern iPhone 14-style UI built with HTML and CSS. This project replicates the sleek look and feel of iOS with interactive elements — perfect for showcasing UI/UX skills.",
            tech: ["HTML5", "CSS3"],
            image: "https://i.ibb.co/zWD2Rckk/image.png",
            github: "https://github.com/RaheelArfeen/IPhone-14-theme",
            live: "https://raheelarfeen.github.io/IPhone-14-theme/",
            featured: true,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const handleScrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section
            id="projects"
            className={`py-20 transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : ""}`}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                        My Projects
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Here are some of the projects I've built while learning fullstack
                        development. Each project taught me something new!
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`group relative overflow-hidden border rounded-xl transition-all duration-300 ${project.featured ? "md:col-span-2" : ""
                                } ${isDarkMode ? "bg-gray-800 border-gray-700 hover:border-blue-500/50" : "bg-white border-gray-300 hover:border-blue-500/20"}`}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                y: -10,
                                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)",
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className={`relative overflow-hidden ${project.featured ? "h-64" : "h-48"}`}>
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t ${isDarkMode
                                        ? "from-gray-900 via-gray-900/50 to-transparent"
                                        : "from-gray-500 via-white/30 to-transparent"
                                        }`}
                                ></div>
                                {project.featured && (
                                    <motion.div
                                        className="absolute top-4 right-4"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, type: "spring" }}
                                    >
                                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                                            Featured
                                        </span>
                                    </motion.div>
                                )}
                            </div>

                            <div className="p-6">
                                <motion.h3
                                    className={`text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-800"
                                        }`}
                                    whileHover={{ x: 5 }}
                                >
                                    {project.title}
                                </motion.h3>
                                <p
                                    className={`mb-4 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}
                                >
                                    {project.description}
                                </p>

                                <motion.div
                                    className="flex flex-wrap gap-2 mb-6"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 0.2,
                                            },
                                        },
                                    }}
                                >
                                    {project.tech.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            className={`px-3 py-1 text-sm rounded-full border ${isDarkMode
                                                ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                                                : "bg-blue-100 text-blue-800 border-blue-300"
                                                }`}
                                            variants={{
                                                hidden: { opacity: 0, scale: 0 },
                                                visible: {
                                                    opacity: 1,
                                                    scale: 1,
                                                    transition: {
                                                        type: "spring",
                                                        stiffness: 500,
                                                    },
                                                },
                                            }}
                                            whileHover={{
                                                scale: 1.1,
                                                boxShadow: "0 3px 10px rgba(59, 130, 246, 0.2)",
                                            }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                <div className="flex space-x-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${isDarkMode
                                            ? "bg-gray-800 text-white hover:bg-gray-700"
                                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                            }`}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                                            <Github size={18} />
                                        </motion.div>
                                        <span>Code</span>
                                    </motion.a>

                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0 5px 15px rgba(59, 130, 246, 0.3)",
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <motion.div whileHover={{ rotate: 45 }} transition={{ duration: 0.3 }}>
                                            <ExternalLink size={18} />
                                        </motion.div>
                                        <span>Live Demo</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.button
                        onClick={() => handleScrollTo("home")}
                        className={`inline-flex items-center space-x-2 px-6 py-3 border-2 rounded-full transition-all duration-300 ${isDarkMode
                            ? "border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                            : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                            }`}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <Code size={20} />
                        </motion.div>
                        <span>View All Projects</span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
