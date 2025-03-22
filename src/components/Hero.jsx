import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { styles } from '../styles';

const taglineWords = [
    "Data Scientist",
    "Machine Learning Engineer",
    "Web Developer"
];

const Hero = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const word = taglineWords[currentWordIndex];
        if (charIndex < word.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(word.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 150); // Slower typing speed
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setCharIndex(0);
                setDisplayedText('');
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % taglineWords.length);
            }, 1000);
        }
    }, [charIndex, currentWordIndex]);

    return (
        <section className='relative w-full h-screen mx-auto'>
            <div
                className={`${styles.paddingX} absolute inset-0 lg:top-[100px] md:top-[90px] xs:top-[90px] top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5 h-max`}
            >
                <div className='flex flex-col justify-center items-center lg:mt-[1.15rem] md:mt-[1.45rem] sm:mt-[1.45rem] xs:mt-[1.35rem] mt-[1.2rem]'>
                    <div className='lg:w-[1.28rem] md:w-[1.025rem] sm:w-[1.025rem] xs:w-[0.825rem] w-[0.7rem] lg:h-[1.12rem] md:h-[0.9rem] sm:h-[0.9rem] xs:h-[0.725rem] h-[0.575rem] rounded-full bg-clr_blue' />
                    <div className='lg:w-1 md:w-[3px] sm:w-[3px] w-[2px] lg:h-80 sm:h-60 xs:h-60 h-40 blue-gradient' />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white relative z-10`}>
                        Hi, I'm <span className='text-clr_blue'>Muhammad Umar</span>
                    </h1>
                    <p className={`${styles.heroSubText} relative z-10 mt-2 text-white-100 md:max-w-[640px] max-w-[460px]`}>
                        I'm an experienced {" "}
                        <span className='text-clr_blue font-bold'>
                            {displayedText}|
                        </span>
                        .<br />
                        I develop machine learning models, data-driven solutions, and web applications with seamless user interfaces. Contact me if you're ready to turn your ideas into reality!
                    </p>
                </div>
            </div>
            <div className='max-h-[500px] xs:max-h-[600px] md:max-h-full h-full relative top-1/2 -translate-y-1/2'>
            </div>
            <div className='absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center z-10'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                            className='w-3 h-3 rounded-full bg-primary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
