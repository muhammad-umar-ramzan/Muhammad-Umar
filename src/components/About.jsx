import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.2, 1)}
				className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
			>
				<p>Experienced and results driven Data Scientist & Machine Learning Engineer with expertise in data analysis, predictive modeling, and deep learning.</p>  

<p>Proficient in Python, TensorFlow, Keras, Scikit-learn, and SQL, with hands-on experience in developing AI driven solutions from data preprocessing to model deployment.</p>  

<p>Worked on projects such as home price prediction, skin cancer detection, posture detection, ai chatbot, seo content optimizer, and hr analtics dashboard, applying advanced machine learning techniques to solve real world problems.</p>  

<p>Skilled in web development with Next.js, Tailwind CSS, and Flask, integrating AI models into user-friendly applications.</p>  


			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
