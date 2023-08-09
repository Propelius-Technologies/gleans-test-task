'use client';
import { useState } from 'react';

import Done from './DonePage';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';
import { AnimatePresence, motion } from 'framer-motion';

const AddContent = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const moveToStep = (step: number) => setActiveStep(step);

  return (
    <div className='h-full w-full'>
      <div className='fixed top-0 left-0 right-0 bottom-0 backdrop-blur-3xl' />
      <AnimatePresence mode='wait'>
        {activeStep === 1 && (
          <motion.div
            key='step-1'
            className='fixed bottom-0 left-0 bg-zinc-900 bg-opacity-80 rounded-t-60px w-full'
            initial={{ opacity: 0, bottom: '-100%' }}
            animate={{ opacity: 1, bottom: 0 }}
            exit={{ height: '100vh' }}
            transition={{ duration: 0.4 }}
          >
            <Step1 moveToStep={moveToStep} />
          </motion.div>
        )}
        <motion.div
          key='step-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeStep === 2 && <Step2 moveToStep={moveToStep} />}
        </motion.div>
        {activeStep === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delayChildren: 0.2 }}
          >
            <Done moveToStep={moveToStep} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddContent;
