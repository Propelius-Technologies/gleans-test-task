'use client';
import { useState } from 'react';

import Done from './DonePage';
import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';

const AddContent = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const moveToStep = (step: number) => setActiveStep(step);

  return (
    <div className='h-full w-full'>
      <div className='fixed top-0 left-0 right-0 bottom-0 animate-blur' />
      {activeStep === 1 && <Step1 moveToStep={moveToStep} />}
      {activeStep === 2 && <Step2 moveToStep={moveToStep} />}
      {activeStep === 3 && <Done moveToStep={moveToStep} />}
    </div>
  );
};

export default AddContent;
