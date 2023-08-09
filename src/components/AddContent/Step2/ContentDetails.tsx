'use client';
import { ChangeEventHandler, FC, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { Content, Tag } from 'src/types/model';

import ImageAdder from './ImageAdder';
import CustomButton from 'src/components/shared/CustomButton';
import Icon from 'src/components/shared/Icon';
import TagChip from './Tag';

import textStyles from 'src/styles/typography.module.css';
import styles from './styles.module.css';
import { useTags } from '@/services/tags/tags.hooks';
import { removeHtmlTags } from 'src/utils/strings.utils';

interface Props {
  content: Content;
  toggleCollections: () => void;
  onContentUpate: (body: Partial<Content>) => void;
  onContentSave: () => void;
  moveBack: () => void;
}

const ContentDetails: FC<Props> = ({
  content,
  onContentUpate,
  onContentSave,
  toggleCollections,
  moveBack,
}) => {
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [titleTouched, setTitleTouched] = useState<boolean>(false);
  const [descriptionExpanded, setDescriptionExpanded] =
    useState<boolean>(false);

  const { getTags, tags, loading } = useTags();

  useEffect(() => {
    getTags();
  }, []);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, id } = evt.target;

    onContentUpate({ [id]: value });
  };

  const handleBack = () => {
    if (descriptionExpanded) {
      if (descriptionRef.current) {
        descriptionRef.current.innerHTML = content.description;
      }

      setDescriptionExpanded(false);
      return;
    }

    moveBack();
  };

  const handleTagSelect = (tagToAdd: Tag) => {
    onContentUpate({ tags: [...content.tags, tagToAdd] });
  };

  const handleTagUnselect = (tagToRemove: Tag) => {
    onContentUpate({
      tags: content.tags.filter((tag) => tag.id !== tagToRemove.id),
    });
  };

  const handleSave = () => {
    if (!descriptionExpanded) {
      onContentSave();
    } else {
      onContentUpate({
        description: descriptionRef.current?.innerHTML,
      });
      setDescriptionExpanded(false);
    }
  };

  return (
    <>
      <motion.div
        exit={{ y: '-20px', opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col items-center ${
          descriptionExpanded ? 'grow justify-center w-full' : ''
        }`}
      >
        {!descriptionExpanded && (
          <ImageAdder
            contentImage={content.image || ''}
            contentTitle={content.title}
          />
        )}
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
          } transition-all ease-linear break-words duration-100`}
        >
          <div
            ref={descriptionRef}
            contentEditable={descriptionExpanded}
            className={`${
              descriptionExpanded ? 'pb-0' : 'absolute'
            } w-full pb-2 m-0 font-primary text-ga-text-gray text-center outline-none ${
              textStyles.subtitle_1_normal
            } ${
              !descriptionExpanded ? styles.fadingParagraph : ''
            } break-words`}
          >
            {removeHtmlTags(content.description)}
          </div>
        </div>

        {!descriptionExpanded && (
          <div className='flex justify-center flex-wrap gap-x-3 gap-y-3 pt-7 pb-16'>
            {tags.map((tag, index) => (
              <TagChip
                key={tag.id}
                index={index}
                tag={tag}
                selectedDefault={
                  !!content.tags.find(
                    (selectedTag) => selectedTag.id === tag.id
                  )
                }
                onSelect={handleTagSelect}
                onUnselect={handleTagUnselect}
              />
            ))}
          </div>
        )}
        {!descriptionExpanded && (
          <p
            onClick={toggleCollections}
            className={`${textStyles.subtitle_1_normal} pb-4 text-white cursor-pointer font-primary flex items-center gap-x-1`}
          >
            Add to collection
            <Icon name='collection_icon' className='w-3 h-2' color='#5E5E5E' />
          </p>
        )}
      </motion.div>
      <motion.div
        animate={{ y: 0 }}
        exit={{ y: '-100%', opacity: 0 }}
        transition={{ duration: 0.4 }}
        className='flex gap-x-4 pb-12'
      >
        <CustomButton onClick={handleBack} color='secondary'>
          Back
        </CustomButton>
        <CustomButton onClick={handleSave} color='primary'>
          {!descriptionExpanded ? 'Add Glean' : 'save'}
        </CustomButton>
      </motion.div>
    </>
  );
};

export default ContentDetails;
