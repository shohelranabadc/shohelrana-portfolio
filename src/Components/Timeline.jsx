import { Calendar, Trophy, BookOpen, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const Timeline = () => {
    const { isDarkMode } = useTheme();

    const timelineEvents = [
        {
            date: "January 2024",
            title: "Started Learning HTML & CSS",
            description: "Began my coding journey with basic web development fundamentals. Built my first static webpage!",
            icon: BookOpen,
            color: "from-green-500 to-emerald-500"
        },
        {
            date: "October 2024",
            title: "Discovered JavaScript",
            description: "Learned about programming logic, functions, and DOM manipulation. Created interactive web elements.",
            icon: Code2,
            color: "from-yellow-500 to-orange-500"
        },
        {
            date: "January 2025",
            title: "First React Project",
            description: "Built my first React application - a simple todo list. Learned about components and state management.",
            icon: Trophy,
            color: "from-blue-500 to-cyan-500"
        },
        {
            date: "May 2025",
            title: "Exploring Backend",
            description: "Started learning Node.js and Express. Building my first full-stack application with database integration.",
            icon: Calendar,
            color: "from-purple-500 to-pink-500"
        },
        {
            date: "2025 Goals",
            title: "Advanced Development",
            description: "Planning to learn advanced React patterns, and cloud deployment. Excited for the journey ahead!",
            icon: Trophy,
            color: "from-indigo-500 to-purple-500"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section
            id="timeline"
            className={`py-20 transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
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
                        My Learning Journey
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        Follow my path from complete beginner to aspiring fullstack developer. Every step has been an adventure!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <motion.div
                            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {timelineEvents.map((event, index) => (
                                <motion.div
                                    key={index}
                                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                    variants={itemVariants}
                                >
                                    {/* Timeline dot */}
                                    <motion.div
                                        className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full z-10 flex items-center justify-center ${isDarkMode ? "bg-gray-900 border-blue-500" : "bg-white border-blue-400"
                                            } border-4`}
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2, type: "spring", stiffness: 500 }}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <motion.div
                                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${event.color}`}
                                            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                                        />
                                    </motion.div>

                                    {/* Content card */}
                                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <motion.div
                                            className={`p-6 rounded-xl border transition-all duration-300 group ${isDarkMode
                                                ? "bg-gray-800/50 border-gray-700 hover:border-blue-500/50"
                                                : "bg-white border-gray-300 hover:border-blue-400/30"
                                                }`}
                                            whileHover={{
                                                scale: 1.02,
                                                y: -5,
                                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <div className="flex items-start space-x-4">
                                                <motion.div
                                                    className={`p-3 rounded-lg bg-gradient-to-r ${event.color}`}
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <event.icon size={24} className="text-white" />
                                                </motion.div>
                                                <div className="flex-1">
                                                    <motion.div
                                                        className="text-sm font-semibold text-blue-500 mb-1"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {event.date}
                                                    </motion.div>
                                                    <motion.h3
                                                        className={`text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300 ${isDarkMode ? "text-white" : "text-gray-800"
                                                            }`}
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        {event.title}
                                                    </motion.h3>
                                                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                                                        {event.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
