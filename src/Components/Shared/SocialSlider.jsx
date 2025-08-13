import React, { useState } from "react";
import { Github, Linkedin, Twitter, Facebook, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SocialSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            url: "https://github.com/raheelarfeen",
            bg: "bg-gradient-to-br from-gray-700 to-gray-900",
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            url: "https://www.linkedin.com/in/raheelarfeen/",
            bg: "bg-gradient-to-tr from-blue-500 to-indigo-800",
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            url: "https://twitter.com/raheelarfeen",
            bg: "bg-gradient-to-br from-sky-400 to-blue-700",
        },
        {
            icon: <Facebook className="w-5 h-5" />,
            url: "https://facebook.com/raheelarfeen",
            bg: "bg-gradient-to-tr from-indigo-500 to-blue-700",
        },
    ];

    return (
        <div className="fixed md:left-6 md:bottom-6 left-4 bottom-4 z-50 flex flex-col-reverse items-center gap-2">
            {/* Toggle Button at Bottom */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 flex items-center justify-center text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg hover:scale-110 transition-transform"
            >
                <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <Plus className="w-6 h-6" />
                </motion.div>
            </button>

            {/* Social Icons above */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex flex-col justify-center items-center gap-3"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-10 h-10 flex items-center mb-1 justify-center rounded-full text-white ${link.bg} shadow-md hover:scale-110 transition-transform`}
                                whileHover={{ scale: 1.2 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SocialSidebar;
