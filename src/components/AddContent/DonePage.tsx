import {
  AnimatePresence,
  useMotionValue,
  useTransform,
  motion,
} from 'framer-motion';
import { FC, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import CustomButton from 'src/components/shared/CustomButton';

interface Props {
  moveToStep: (step: number) => void;
}

const Done: FC<Props> = ({ moveToStep }) => {
  const [isChecked, setIsChecked] = useState(true);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <div className='fixed top-0 left-0 min-h-screen w-full flex flex-col items-center justify-end pt-16 px-7'>
      <div className='flex grow items-center justify-center'>
        <motion.div
          className='w-32 h-32 flex items-center justify-center rounded-full bg-ga-grey bg-opacity-25'
          animate={{
            scale: [0.8, 1],
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <svg xmlns='http://www.w3.org/2000/svg' style={{paddingLeft: '10px', paddingTop: '10px'}} width='128' height='128'>
            <motion.path
              d='M24 50l20 20L90 30'
              fill='transparent'
              strokeWidth='15'
              stroke='#00FF85'
              strokeLinecap='round'
              animate={{ pathLength: [0, 0.9] }}
              style={{ pathLength: pathLength, opacity: opacity }}
            />
          </svg>
        </motion.div>
      </div>
      <div className='flex pb-12'>
        <CustomButton onClick={() => moveToStep(1)} color='success'>
          Done
        </CustomButton>
      </div>
    </div>
  );
};

export default Done;
