import data from '@/data';
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-scroll';

export const Intro = () => {
    return (
        <motion.div
            animate={{ y: 0 }}
            className="space-y-5 max-w-7xl w-full mx-auto p-5 md:p-0"
            id="intro"
            initial={{ y: 40 }}
            transition={{ duration: 0.5 }}
        >
            <p className="text-3xl text-neon font-fira">gm, my name is</p>
            <h1 className="text-5xl font-extrabold text-text md:text-8xl">
                {data.name}
            </h1>
            <h2 className="text-4xl text-textDark md:text-6xl">
                I build amazing websites!
            </h2>
            <p className="w-4/5 md:w-3/5 text-textDark">
                I&rsquo;m a{' '}
                <span className="text-neon">{data.profession}. </span>
                {data.intro}
            </p>
            <div className="flex space-x-3">
                <Link
                    activeClass="active"
                    duration={500}
                    href="contact"
                    offset={-100}
                    smooth={true}
                    spy={true}
                    to="contact"
                >
                    <button className="py-2 px-5 !mt-10 hover:bg-neon hover:border-neon hover:backdrop-blur-lg hover:text-darkerBlue duration-100 border-neon border-2 text-neon rounded-lg">
                        Reach out to me!
                    </button>
                </Link>

                <Link
                    activeClass="active"
                    duration={500}
                    href="contact"
                    offset={-100}
                    smooth={true}
                    spy={true}
                    to="work"
                >
                    <button className="py-2 px-5 !mt-10 text-darkerBlue bg-neon border-neon hover:bg-transparent duration-100 hover:text-neon border-2 rounded-lg">
                        Check out my work!
                    </button>
                </Link>
            </div>
        </motion.div>
    );
};
