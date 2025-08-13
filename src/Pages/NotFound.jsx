import { useLocation } from "react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    const quotes = [
        "Not all those who wander are lost.",
        "The page you're looking for took a day off!",
        "404: Reality not found.",
        "Oops! You seem to have discovered a secret void.",
        "Broken links build character."
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <motion.div
            className="min-h-screen bg-[#101728] text-white flex flex-col items-center justify-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.h1
                className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                404
            </motion.h1>

            <motion.p
                className="text-xl text-gray-400 mb-2 text-center max-w-lg"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                Oops! The page you're looking for doesn't exist or has been moved.
            </motion.p>

            <motion.p
                className="text-sm italic text-gray-500 mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                {randomQuote}
            </motion.p>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
            >
                <Link
                    to="/"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600 transition rounded-lg"
                >
                    <ArrowLeft className="mr-2" size={18} />
                    Go Back Home
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default NotFound;
