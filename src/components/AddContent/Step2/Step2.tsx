'use client';
import { FC, useState } from 'react';

import { Collection, Content } from 'src/types/model';

import Collections from './Collections';
import ContentDetails from './ContentDetails';
import { isEmpty } from 'lodash';
import { getLinkMeta } from '@/utils/storage.utils';
import { convertMetaToContent } from '@/utils/content.utils';
import { AnimatePresence, motion } from 'framer-motion';

const defaultContent: Content = {
  title: 'Very very long title or collection name',
  tags: [],
  collections: [],
  description:
    'This is where a detailed scraped description would appear in a glean or collection. If it gets too long, it will start to fade out so that editors can think free and edit the text if needed.',
};

interface Props {
  moveToStep: (step: number) => void;
}

const Step2: FC<Props> = ({ moveToStep }) => {
  const [collectionOpen, setCollectionsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<Content>(
    isEmpty(getLinkMeta())
      ? defaultContent
      : convertMetaToContent(getLinkMeta())
  );

  const handleContentUpdate = (content: Partial<Content>) => {
    setContent((prev) => ({ ...prev, ...content }));
  };

  const onCollectionSave = (collections: Collection[]) => {
    setContent((prev) => ({ ...prev, collections }));
    setCollectionsOpen(false);
  };

  const toggleCollections = () => setCollectionsOpen((prev) => !prev);

  const onContentSave = () => moveToStep(3);
  const moveBack = () => moveToStep(1);

  return (
    <div className='fixed top-0 left-0 min-h-screen w-full flex flex-col items-center justify-between pt-16 px-7'>
      {collectionOpen ? (
        <Collections
          defaultCollections={content.collections}
          onSave={onCollectionSave}
        />
      ) : (
        <motion.div
          className='flex grow flex-col items-center justify-between'
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ContentDetails
            content={content}
            toggleCollections={toggleCollections}
            onContentUpate={handleContentUpdate}
            onContentSave={onContentSave}
            moveBack={moveBack}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Step2;
