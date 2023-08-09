'use client';
import { ChangeEventHandler, FC, useState } from 'react';

import { Content } from 'src/types/model';
import { tags } from 'src/constants/dummy.constants';

import ImageAdder from './ImageAdder';
import CustomButton from 'src/components/shared/CustomButton';
import Icon from 'src/components/shared/Icon';
import Tag from './Tag';

import textStyles from 'src/styles/typography.module.css';
import styles from './styles.module.css';

interface Props {
  content: Content;
  toggleCollections: () => void;
  onContentUpate: (body: Partial<Content>) => void;
}

const ContentDetails: FC<Props> = ({
  content,
  onContentUpate,
  toggleCollections,
}) => {
  const [titleTouched, setTitleTouched] = useState<boolean>(false);
  const [descriptionExpanded, setDescriptionExpanded] =
    useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, id } = evt.target;

    onContentUpate({ [id]: value });
  };

  const handleBack = () => {
    if (descriptionExpanded) {
      setDescriptionExpanded(false);
      return;
    }
  };

  const handleTagSelect = (tagToAdd: string) => {
    onContentUpate({ tags: [...content.tags, tagToAdd] });
  };

  const handleTagUnselect = (tagToRemove: string) => {
    onContentUpate({ tags: content.tags.filter((tag) => tag !== tagToRemove) });
  };

  return (
    <>
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
              <Tag
                key={tag}
                title={tag}
                onSelect={handleTagSelect}
                onUnselect={handleTagUnselect}
              />
            ))}
          </div>
        )}
        {!descriptionExpanded && (
          <p
            onClick={toggleCollections}
            className={`${textStyles.subtitle_1_normal} cursor-pointer font-primary flex items-center gap-x-1`}
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
    </>
  );
};

export default ContentDetails;
