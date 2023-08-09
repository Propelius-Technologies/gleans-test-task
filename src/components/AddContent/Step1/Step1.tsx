'use client';
import textStyles from 'src/styles/typography.module.css';
import Option from './Option';
import LinkInput from './LinkInput';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { LocalStorageKeys } from '@/constants/keys.constants';

interface Props {
  moveToStep: (step: number) => void;
}

const Step1: FC<Props> = ({ moveToStep }) => {
  const handleSubmit =  () => {
    moveToStep(2);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
      key='step-1-child'
      className={`w-full h-full pt-14 pb-12 px-5`}
    >
      <h3
        className={`${textStyles.heading_1} font-primary text-center text-white text-opacity-50 pb-16`}
      >
        Add content
      </h3>

      <div className='flex w-full gap-x-12 justify-center pb-9'>
        {/* option  */}
        <Option
          src='/create_glean.png'
          title='Create a Glean'
          description='Add content, links & descriptive text'
          onClick={() => {
            localStorage.removeItem(LocalStorageKeys.LINK_META);
            moveToStep(2);
          }}
        />
        <Option
          src='/collection.png'
          title='Collection'
          description='Organise gleans & direct links'
        />
      </div>

      <LinkInput handleSubmit={handleSubmit} />

      <p className='mt-4 font-primary text-white text-opacity-70 text-center w-11/12 mx-auto'>
        <strong className='font-medium'>Powered by Gleans Ai</strong> ✨ Create
        content automatically and make changes if needed.
      </p>
    </motion.div>
  );
};

export default Step1;
