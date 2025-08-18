import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "./Shared/Logo";
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
    const { isDarkMode } = useTheme();

    const socialLinks = [
        { href: "https://github.com/shohelranabadc", icon: Github, label: "GitHub" },
        { href: "https://www.linkedin.com/in/shohelrana29/", icon: Linkedin, label: "LinkedIn" },
        { href: "mailto:shohelranabadc@gmail.com", icon: Mail, label: "Email" },
        { href: "https://x.com/Shohel_Rana_29", icon: Twitter, label: "Twitter" },
    ];

    return (
        <footer
            className={`px-6 py-12 border-t transition-colors duration-300 ${isDarkMode
                ? "bg-[#0F172A] text-white border-blue-900"
                : "bg-white text-gray-800 border-gray-300"
                }`}
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
                {/* Logo */}
                <motion.h2
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Logo />
                </motion.h2>

                {/* Social Icons */}
                <motion.div
                    className={`flex gap-6 border-b w-full justify-center pb-6 ${isDarkMode ? "border-gray-800" : "border-gray-300"
                        }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {socialLinks.map(({ href, icon: Icon, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${isDarkMode
                                ? "text-gray-400 hover:text-white"
                                : "text-gray-500 hover:text-blue-600"
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            title={label}
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright */}
                <motion.p
                    className={`text-sm text-center ${isDarkMode ? "text-gray-500" : "text-gray-500"
                        }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    &copy; {new Date().getFullYear()} Shohel Rana. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
