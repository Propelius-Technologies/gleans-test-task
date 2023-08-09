'use client';
import { ChangeEventHandler, useState } from 'react';

import ImageAdder from './ImageAdder';

import textStyles from 'src/styles/typography.module.css';
import { Content } from 'src/types/model';

import styles from './styles.module.css';
import Tag from './Tag';
import Icon from '@/components/shared/Icon';
import CustomButton from '@/components/shared/CustomButton';
import { tags } from '@/constants/tags.constants';

const defaultContent: Content = {
  title: 'Very very long title or collection name',
  description:
    'This is where a detailed scraped description would appear in a glean or collection. If it gets too long, it will start to fade out so that editors can think free and edit the text if needed.',
};

const Step2 = () => {
  const [titleTouched, setTitleTouched] = useState<boolean>(false);
  const [content, setContent] = useState<Content>(defaultContent);
  const [descriptionExpanded, setDescriptionExpanded] =
    useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, id } = evt.target;

    setContent((prev) => ({ ...prev, [id]: value }));
  };

  const handleBack = () => {
    if (descriptionExpanded) {
      setDescriptionExpanded(false);
      return;
    }
  };

  return (
    <div className='fixed top-0 left-0 min-h-screen w-full flex flex-col items-center justify-between pt-16 px-7'>
      <div
        className={`flex flex-col items-center ${
          descriptionExpanded ? 'grow justify-center w-full' : ''
        }`}
      >
        {!descriptionExpanded && <ImageAdder />}
        {!descriptionExpanded && (
          <div className='w-full mt-9 mb-4 max-w-60 mx-auto'>
            {!titleTouched ? (
              <p
                onClick={() => setTitleTouched(true)}
                className={`${textStyles.heading_1} text-center text-white text m-0 p-0`}
              >
                {content.title}
              </p>
            ) : (
              <input
                value={content.title}
                autoFocus
                id='title'
                onChange={handleChange}
                onBlur={() => setTitleTouched(false)}
                className={`block mx-auto pl-4 border-b border-b-white bg-ga-grey bg-opacity-20 text-white h-11 w-60 outline-none border-0 ${textStyles.subtitle_1_normal}`}
              />
            )}
          </div>
        )}

        {descriptionExpanded && (
          <div className='text-ga-text-gray text-center'>
            <h3 className={`${textStyles.heading_1} font-primary pb-2`}>
              Description
            </h3>
            <p className={`${textStyles.subtitle_1_normal} font-primary pb-4`}>
              Leave the description empty to create a direct link
            </p>
          </div>
        )}

        <div
          onClick={() => setDescriptionExpanded(true)}
          className={`${
            descriptionExpanded ? styles.expanded : styles.descriptionContainer
          } transition-all ease-linear duration-100`}
        >
          <p
            className={`${
              descriptionExpanded ? 'pb-0' : 'absolute'
            } w-full pb-2 m-0 font-primary text-ga-text-gray text-center ${
              textStyles.subtitle_1_normal
            } ${!descriptionExpanded ? styles.fadingParagraph : ''}`}
          >
            {content.description}
          </p>
        </div>

        {!descriptionExpanded && (
          <div className='flex justify-center flex-wrap gap-x-3 gap-y-3 pt-7 pb-16'>
            {tags.map((tag) => (
              <Tag key={tag} title={tag} />
            ))}
          </div>
        )}
        {!descriptionExpanded && (
          <p
            className={`${textStyles.subtitle_1_normal} font-primary flex items-center gap-x-1`}
          >
            Add to collection
            <Icon name='collection_icon' className='w-3 h-2' color='#5E5E5E' />
          </p>
        )}
      </div>
      <div className='flex gap-x-4 pb-12'>
        <CustomButton onClick={handleBack} color='secondary'>
          Back
        </CustomButton>
        <CustomButton color='primary'>
          {!descriptionExpanded ? 'Add Glean' : 'save'}
        </CustomButton>
      </div>
    </div>
  );
};

export default Step2;
