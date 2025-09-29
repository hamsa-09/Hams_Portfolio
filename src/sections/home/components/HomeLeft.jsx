import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import BlurText from './BlurText';
import TypingEffect from './WritingEffect';
import { motion } from 'framer-motion';
import GlareHover from '../../../common/GlareHover';
const HomeLeft = () => {
    const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "https://drive.google.com/file/d/1m9ehwks9-OIzEOA1PGGqDdpBppHVHvjt/view?usp=sharing"; // path in public/
  link.download = "Hamsavardhini-CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

    return (
        <div className="flex-col justify-center items-center max-w-3xl space-y-4">
            <h2 className=" flex justify-start items-center">
                <span className="text-purple-800">{'<'}</span>
                <BlurText
                    text=" Hello"
                    delay={100}
                    animateBy="chars"
                    direction="top"
                />
                <span className="text-purple-800">{'>'}</span>
            </h2>

            <h3>
                <BlurText
                    text="I'm Hamsavardhini B ✨"
                    delay={120}
                    animateBy="words"
                    direction="top"
                    className="text-2xl font-bold"
                />
            </h3>

            <TypingEffect />

            <BlurText
                text="Always curious, always learning — exploring <frontend>, <backend>, and <fullstack> journeys"
                delay={80}
                animateBy="words"
                direction="top"
                className="max-w-xl"
            />

            <motion.div
                className="flex justify-start items-center space-x-4 mb-4 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <Github />
                <Linkedin />
                <Twitter />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
            >
                <button
                    onClick={handleDownload}
                    class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-purple-600 cursor-pointer to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-full"
                >
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900  group-hover:bg-transparent group-hover:dark:bg-transparent rounded-full">
                        Download Resume
                    </span>
                </button>
            </motion.div>
        </div>
    );
};

export default HomeLeft;
