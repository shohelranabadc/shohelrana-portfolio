import {
    Github,
    Linkedin,
    Twitter,
    Send,
    GraduationCap,
    Laptop,
    Rocket,
    Star,
    Book,
    Phone
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../Context/ThemeContext";

const Contact = () => {
    const { isDarkMode } = useTheme();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    const socialLinks = [
        { name: "Phone", icon: Phone, href: "tel:+01723456789", color: "hover:text-red-400" },
        { name: "GitHub", icon: Github, href: "https://github.com/raheelarfeen", color: "hover:text-gray-400" },
        { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/Raheelarfeen/", color: "hover:text-blue-400" },
        { name: "Twitter", icon: Twitter, href: "https://x.com/RaheelArfeen", color: "hover:text-cyan-400" }
    ];

    const quickFacts = [
        { icon: GraduationCap, text: "Grade 8 Student" },
        { icon: Laptop, text: "Learning Fullstack Development" },
        { icon: Rocket, text: "Open to mentorship opportunities" },
        { icon: Star, text: "Passionate about clean code" },
        { icon: Book, text: "Always learning something new" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const textColor = isDarkMode ? "text-white" : "text-gray-800";
    const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
    const bgCard = isDarkMode ? "bg-gray-900/50 border-gray-700" : "bg-white border-gray-300";
    const inputBg = isDarkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-gray-800 border-gray-300";

    return (
        <section id="contact" className={`py-20 ${isDarkMode ? "bg-gray-900" : ""} transition-colors duration-300`}>
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className={`text-lg max-w-2xl mx-auto ${subTextColor}`}>
                        I'm always excited to connect with fellow developers, mentors, or anyone interested in tech!
                        Let's build something amazing together.
                    </p>
                </motion.div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            className={`${bgCard} p-8 rounded-xl border`}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            whileHover={{
                                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                            }}
                        >
                            <h3 className={`text-2xl font-bold mb-6 ${textColor}`}>Send Me a Message</h3>
                            <motion.form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${subTextColor}`}>
                                        Your Name
                                    </label>
                                    <motion.input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-blue-500 transition-colors duration-300 ${inputBg}`}
                                        placeholder="Enter your name"
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${subTextColor}`}>
                                        Your Email
                                    </label>
                                    <motion.input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:border-blue-500 transition-colors duration-300 ${inputBg}`}
                                        placeholder="Enter your email"
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${subTextColor}`}>
                                        Your Message
                                    </label>
                                    <motion.textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className={`w-full px-4 py-3 rounded-lg border resize-none focus:outline-none focus:border-blue-500 transition-colors duration-300 ${inputBg}`}
                                        placeholder="Tell me about your project or just say hi!"
                                        required
                                        whileFocus={{ scale: 1.02 }}
                                    />
                                </motion.div>
                                <motion.button
                                    type="submit"
                                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                                        <Send size={20} />
                                    </motion.div>
                                    <span>Send Message</span>
                                </motion.button>
                            </motion.form>
                        </motion.div>

                        {/* Contact Info & Quick Facts */}
                        <div className="space-y-8">
                            <motion.div
                                className={`${bgCard} p-8 rounded-xl border`}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                whileHover={{
                                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                                }}
                            >
                                <h3 className={`text-2xl font-bold mb-6 ${textColor}`}>Connect With Me</h3>
                                <p className={`mb-8 ${subTextColor}`}>
                                    I'm always open to discussing new opportunities, collaborating on projects,
                                    or just chatting about the latest in web development!
                                </p>
                                <motion.div
                                    className="grid grid-cols-2 gap-4"
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            className={`flex items-center space-x-3 p-4 rounded-lg border transition-all duration-300 group ${bgCard} ${link.color}`}
                                            variants={itemVariants}
                                            whileHover={{
                                                scale: 1.05,
                                                y: -5,
                                                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.1)"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                                                <link.icon size={24} />
                                            </motion.div>
                                            <span className={`font-medium ${textColor}`}>{link.name}</span>
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className={`bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-8`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 15px 30px rgba(59, 130, 246, 0.1)"
                                }}
                            >
                                <h4 className={`text-xl font-bold mb-4 ${textColor}`}>Quick Facts</h4>
                                <motion.ul
                                    className={`space-y-3 ${subTextColor}`}
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    {quickFacts.map(({ icon: Icon, text }, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-center space-x-3"
                                            variants={itemVariants}
                                            whileHover={{ x: 5 }}
                                        >
                                            <Icon size={20} />
                                            <span>{text}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
