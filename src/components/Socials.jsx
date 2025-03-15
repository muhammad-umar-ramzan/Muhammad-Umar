import { socials } from '../constants';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';

const Socials = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center max-w-[360px] mx-auto gap-4'>
      {socials.map((social, index) => (
        <motion.a
          className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden'
          key={social.name}
          href={social.link}
          target='_blank'
          initial={{ x: 0, y: 0 }}
          animate={{ x: [0, Math.random() * 8 - 4, 0], y: [0, Math.random() * 8 - 4, 0] }}
          transition={{
            duration: 3 + index * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(255,255,255,0.8)" }}
        >
          <img 
            src={social.icon} 
            alt={social.name} 
            className='w-3/5 h-3/5 object-contain'
          />
        </motion.a>
      ))}
    </div>
  );
};

export default SectionWrapper(Socials, 'socials');
