import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8'>
      {technologies.map((technology, index) => (
        <motion.div
          className='w-[90px] h-[90px] md:w-[140px] md:h-[140px] flex items-center justify-center bg-white rounded-full shadow-xl overflow-hidden'
          key={technology.name}
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, Math.random() * 20 - 10, 0], y: [0, Math.random() * 20 - 10, 0] }}
          transition={{
            duration: 3 + index * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.2, boxShadow: "0px 0px 20px rgba(255,255,255,1)" }}
        >
          <img 
            src={technology.icon} 
            alt={technology.name} 
            className='w-3/4 h-3/4 object-contain'
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
