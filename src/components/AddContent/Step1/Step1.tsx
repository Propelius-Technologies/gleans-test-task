'use client';
import textStyles from 'src/styles/typography.module.css';
import styles from './styles.module.css';
import Option from './Option';
import LinkInput from './LinkInput';
import { FC } from 'react';
interface Props {
  moveToStep: (step: number) => void;
}

const Step1: FC<Props> = ({ moveToStep }) => {
  const handleSubmit = () => {
    moveToStep(2);
  };

  return (
    <div
      className={`fixed w-full left-0 bottom-0 pt-14 pb-12 px-5 bg-zinc-900 bg-opacity-80 ${styles.container}`}
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
          onClick={() => moveToStep(2)}
        />
        <Option
          src='/collection.svg'
          title='Collection'
          description='Organise gleans & direct links'
        />
      </div>

      <LinkInput handleSubmit={handleSubmit} />

      <p className='mt-4 font-primary text-white text-opacity-70 text-center w-11/12 mx-auto'>
        <strong className='font-medium'>Powered by Gleans Ai</strong> ✨ Create
        content automatically and make changes if needed.
      </p>
    </div>
  );
};

export default Step1;
