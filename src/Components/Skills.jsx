import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const skills = [
    { name: "HTML5", level: 90, colorFrom: "#F97316", colorTo: "#EF4444" },
    { name: "CSS3", level: 85, colorFrom: "#3B82F6", colorTo: "#6366F1" },
    { name: "JavaScript", level: 80, colorFrom: "#FBBF24", colorTo: "#F97316" },
    { name: "React", level: 80, colorFrom: "#06B6D4", colorTo: "#2563EB" },
    { name: "Node.js", level: 75, colorFrom: "#16A34A", colorTo: "#84CC16" },
    { name: "ExpressJS", level: 70, colorFrom: "#FBBF24", colorTo: "#C2410C" },
    { name: "Git", level: 80, colorFrom: "#EF4444", colorTo: "#F97316" },
    { name: "Tailwind CSS", level: 85, colorFrom: "#2DD4BF", colorTo: "#06B6D4" },
];

const currentlyLearning = [
    "Express.js",
    "MongoDB",
    "Next.js",
    "Node.js",
    "JWT (JSON Web Token)"
];

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Skills = () => {
    const { isDarkMode } = useTheme();

    return (
        <section
            id="skills"
            className={`py-20 transition-colors duration-500 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
                }`}
        >
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        My Skills
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
                    {skills.map(({ name, level, colorFrom, colorTo }, i) => {
                        const strokeDashoffset = CIRCUMFERENCE * (1 - level / 100);
                        return (
                            <motion.div
                                key={name}
                                className={`group cursor-pointer rounded-xl p-4 transition-all duration-300 ${isDarkMode
                                    ? "bg-gray-800 border border-gray-700 hover:border-blue-500/70"
                                    : "bg-white border border-gray-100 hover:border-blue-400/70 shadow-md"
                                    }`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.7 }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <svg
                                    className="w-28 h-28 mx-auto"
                                    viewBox="0 0 120 120"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r={RADIUS}
                                        stroke={isDarkMode ? "#374151" : "#d1d5db"}
                                        strokeWidth="12"
                                    />
                                    <motion.circle
                                        cx="60"
                                        cy="60"
                                        r={RADIUS}
                                        stroke={`url(#grad-${i})`}
                                        strokeWidth="12"
                                        strokeLinecap="round"
                                        strokeDasharray={CIRCUMFERENCE}
                                        strokeDashoffset={CIRCUMFERENCE}
                                        initial={{ strokeDashoffset: CIRCUMFERENCE }}
                                        animate={{ strokeDashoffset }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        style={{ rotate: "-90deg", transformOrigin: "50% 50%" }}
                                    />
                                    <defs>
                                        <linearGradient id={`grad-${i}`} x1="1" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor={colorFrom} />
                                            <stop offset="100%" stopColor={colorTo} />
                                        </linearGradient>
                                    </defs>
                                    <text
                                        x="60"
                                        y="58"
                                        textAnchor="middle"
                                        fontSize="26"
                                        fontWeight="700"
                                        fill={isDarkMode ? "white" : "black"}
                                    >
                                        {level}%
                                    </text>
                                    <text
                                        x="60"
                                        y="83"
                                        textAnchor="middle"
                                        fontSize="14"
                                        fill={isDarkMode ? "#9ca3af" : "#4b5563"}
                                        fontWeight="600"
                                    >
                                        {name}
                                    </text>
                                </svg>

                                <p
                                    className={`mt-4 text-sm transition-colors duration-300 ${isDarkMode ? "text-gray-400 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"
                                        }`}
                                >
                                    {`Proficiency in ${name}`}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className={`rounded-xl p-8 max-w-5xl mx-auto transition-colors duration-500 ${isDarkMode
                        ? "bg-gradient-to-r from-blue-700/20 to-purple-700/20 border border-blue-700/40"
                        : "bg-gradient-to-r from-blue-200/30 to-purple-200/30 border border-blue-200"
                        }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className={`text-3xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Currently Learning
                    </h3>
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.3,
                                },
                            },
                        }}
                    >
                        {currentlyLearning.map((tech, i) => (
                            <motion.span
                                key={tech}
                                className={`px-5 py-2 rounded-full text-base font-semibold cursor-default select-none shadow-lg transition-colors duration-300 ${isDarkMode
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                    : "bg-gradient-to-r from-blue-400 to-purple-400 text-white"
                                    }`}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: { type: "spring", stiffness: 500, damping: 25 },
                                    },
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
