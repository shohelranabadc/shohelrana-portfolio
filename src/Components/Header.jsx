import { useEffect, useState, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Shared/Logo";
import { useTheme } from "../Context/ThemeContext";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { isDarkMode, toggleDarkMode } = useTheme();

    const navLinks = [
        { label: "Home", to: "#home" },
        { label: "About", to: "#about" },
        { label: "Skills", to: "#skills" },
        { label: "Projects", to: "#projects" },
        { label: "Timeline", to: "#timeline" },
        { label: "Contact", to: "#contact" },
    ];

    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
    const linkRefs = useRef({});

    const handleScrollTo = (hash) => {
        setDrawerOpen(false);
        if (hash === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };


    // Handle active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            let currentSection = activeSection;

            for (const link of navLinks) {
                const section = document.getElementById(link.to.replace("#", ""));
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        currentSection = link.to.replace("#", "");
                        break;
                    }
                }
            }

            if (currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection, navLinks]);

    // Handle underline movement
    useEffect(() => {
        const el = linkRefs.current[activeSection];
        if (el) {
            setUnderlineStyle({
                left: el.offsetLeft,
                width: el.offsetWidth,
            });
        }
    }, [activeSection]);

    // Scroll to hash section on page load
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const el = document.getElementById(hash.replace("#", ""));
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, []);

    return (
        <>
            <motion.nav
                className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${isDarkMode ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-gray-200"}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <a href="#">
                            <div
                                className="flex items-center space-x-3 cursor-pointer"
                                onClick={() => handleScrollTo("#home")}
                            >
                                <Logo />
                            </div>
                        </a>

                        {/* Desktop Nav */}
                        <div className="relative hidden sm:flex items-center space-x-6">
                            {navLinks.map((link) => {
                                const key = link.to.replace("#", "");
                                return (
                                    <a
                                        key={link.label}
                                        href={link.to}
                                        ref={(el) => (linkRefs.current[key] = el)}
                                        onClick={() => handleScrollTo(link.to)}
                                        className={`text-sm font-medium pb-1 cursor-pointer transition-colors duration-300 ${isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
                                    >
                                        {link.label}
                                    </a>
                                );
                            })}

                            <motion.div
                                layout
                                className={`absolute bottom-0 h-0.5 rounded ${isDarkMode ? "bg-blue-400" : "bg-blue-600"}`}
                                style={{
                                    left: underlineStyle.left,
                                    width: underlineStyle.width,
                                }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />

                            {/* Toggle Dark Mode Button */}
                            <motion.button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-full transition-all duration-300 cursor-pointer ${isDarkMode ? "text-yellow-400 hover:bg-gray-800 hover:text-yellow-300" : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle dark mode"
                            >
                                <AnimatePresence mode="wait">
                                    {isDarkMode ? (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Sun size={20} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Moon size={20} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <motion.a
                                href="/RaheelArfeen.pdf"
                                download
                                className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-300 ${isDarkMode ? "border-blue-500 text-blue-400 hover:bg-blue-500/20" : "border-blue-600 text-blue-600 hover:bg-blue-600/10"}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Resume
                            </motion.a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="flex items-center space-x-3 sm:hidden">
                            <motion.button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-md transition-colors duration-300 cursor-pointer ${isDarkMode ? "text-yellow-400 hover:text-yellow-300 hover:bg-gray-800" : "text-gray-600 hover:text-gray-800 hover:bg-gray-100"}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle dark mode"
                            >
                                <AnimatePresence mode="wait">
                                    {isDarkMode ? (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Sun size={20} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Moon size={20} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <button
                                className={`p-2 rounded-md transition-colors duration-300 ${isDarkMode ? "text-gray-400 hover:text-blue-400 hover:bg-gray-800" : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"}`}
                                onClick={() => setDrawerOpen(true)}
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {drawerOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setDrawerOpen(false)}
                        />

                        <motion.aside
                            key="drawer"
                            className={`fixed top-0 right-0 h-full w-64 shadow-lg z-50 p-6 flex flex-col transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <button
                                onClick={() => setDrawerOpen(false)}
                                className={`self-end p-2 rounded-md transition-colors duration-300 ${isDarkMode ? "text-gray-400 hover:text-blue-400 hover:bg-gray-800" : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"}`}
                            >
                                <X size={24} />
                            </button>

                            <nav className="mt-8 flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.to}
                                        onClick={() => handleScrollTo(link.to)}
                                        className={`text-left text-lg font-medium pb-1 transition-colors duration-300 cursor-pointer ${activeSection === link.to.replace("#", "") ? isDarkMode ? "text-blue-400 border-b border-blue-400" : "text-blue-600 border-b border-blue-600" : isDarkMode ? "text-gray-400 hover:text-blue-400" : "text-gray-600 hover:text-blue-600"}`}
                                    >
                                        {link.label}
                                    </a>
                                ))}

                                <a
                                    href="/RaheelArfeen.pdf"
                                    download
                                    className={`mt-6 inline-flex justify-center px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-300 ${isDarkMode ? "border-blue-500 text-blue-400 hover:bg-blue-500/20" : "border-blue-600 text-blue-600 hover:bg-blue-600/10"}`}
                                    onClick={() => setDrawerOpen(false)}
                                >
                                    Download Resume
                                </a>
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
