import { Code, BookOpen, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const About = () => {
    const { isDarkMode } = useTheme();

    const features = [
        {
            icon: Code,
            title: "Full-Stack Focus",
            description: "Learning both frontend and backend development to build complete applications."
        },
        {
            icon: BookOpen,
            title: "Continuous Learning",
            description: "Always exploring new technologies and programming concepts to expand my skills."
        },
        {
            icon: Target,
            title: "Goal-Oriented",
            description: "Setting clear objectives and working systematically to achieve my coding milestones."
        },
        {
            icon: Zap,
            title: "Quick Learner",
            description: "Adapting fast to new frameworks and tools in the ever-evolving tech landscape."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section
            id="about"
            className={`py-20 transition-colors duration-500 ${isDarkMode ? "bg-gray-800/50" : ""
                }`}
        >
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <p
                            className={`text-lg md:text-xl leading-relaxed mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-700"
                                }`}
                        >
                            Hi! I'm Raheel, a passionate 8th-grade student who discovered the amazing world of
                            web development. What started as curiosity about how websites work has grown into
                            a genuine love for coding and creating digital experiences.
                        </p>
                        <p
                            className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                }`}
                        >
                            I'm currently diving deep into both frontend and backend technologies,
                            building projects that challenge me and help me grow as a developer.
                            My goal is to become a skilled full-stack developer and contribute to
                            innovative tech solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className={`p-6 rounded-xl border transition-all duration-300 group ${isDarkMode
                                        ? "bg-gray-900/50 border-gray-700 hover:border-blue-500/50"
                                        : "bg-white border-gray-200 hover:border-blue-400/50 shadow-sm"
                                    }`}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <div className="flex items-start space-x-4">
                                    <motion.div
                                        className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: 360
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <feature.icon size={24} className="text-white" />
                                    </motion.div>
                                    <div>
                                        <motion.h3
                                            className={`text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-800"
                                                }`}
                                            whileHover={{ x: 5 }}
                                        >
                                            {feature.title}
                                        </motion.h3>
                                        <p
                                            className={`leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"
                                                }`}
                                        >
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
