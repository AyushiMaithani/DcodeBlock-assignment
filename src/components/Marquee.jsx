import { motion } from 'framer-motion'
import marquee1 from '../assets/images/marquee1.png'
import marquee2 from '../assets/images/marquee2.png'
import marquee3 from '../assets/images/marquee3.png'
import marquee4 from '../assets/images/marquee4.png'

function Marquee() {
  const Words = [
    <img key="image" src={marquee1} alt="Marquee" className="h-[100px] sm:h-[150px] md:h-[100px]" />,
    <img key="image" src={marquee2} alt="Marquee" className="h-[100px] sm:h-[150px] md:h-[100px]" />,
    <img key="image" src={marquee3} alt="Marquee" className="h-[100px] sm:h-[150px] md:h-[100px]" />,
    <img key="image" src={marquee4} alt="Marquee" className="h-[100px] sm:h-[150px] md:h-[100px]" />,
  ];

  return (
    <div className='overflow-hidden flex font-mono mt-20 font-extrabold bg-white whitespace-nowrap top-36 lg:top-64'>
      <motion.div 
        initial={{ x: "0" }}
        animate={{ x: "-100%" }} 
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className='flex flex-shrink-0'
      >
        {Words.map((word, index) => (
          <p 
            key={index} 
            className="text-[150px] sm:text-[250px] md:text-[300px] lg:text-[400px] leading-none"
          >
            {word}
          </p>
        ))}
      </motion.div>
      <motion.div 
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className='flex flex-shrink-0'
      >
        {Words.map((word, index) => (
          <p 
            key={index} 
            className="text-[150px] sm:text-[250px] md:text-[300px] lg:text-[400px] leading-none"
          >
            {word}
          </p>
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;