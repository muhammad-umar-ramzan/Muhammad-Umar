import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { BallCanvas } from './canvas';
import { motion } from 'framer-motion';

const Tech = () => {
	return (
		<div className='flex flex-row flex-wrap md:justify-between justify-center xl:max-w-full lg:max-w-xl sm:max-w-xl mx-auto gap-6 xs:-mt-4 xs:-mb-4 sm:-mt-6 sm:-mb-6 lg:-mt-10 -mt-4 lg:-mb-10 -mb-0'>
			{technologies.map((technology, index) => (
				<motion.div
					key={technology.name}
					className='xs:w-28 md:w-[120px] w-[70px] xs:h-28 md:h-[120px] h-[70px]'
					initial={{ x: 0, y: 0 }}
					animate={{
						x: [Math.random() * 10 - 5, Math.random() * 10 - 5],
						y: [Math.random() * 10 - 5, Math.random() * 10 - 5],
					}}
					transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
					whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px rgba(255,255,255,0.7)" }}
				>
					<BallCanvas icon={technology.icon} />
				</motion.div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, 'tech');
