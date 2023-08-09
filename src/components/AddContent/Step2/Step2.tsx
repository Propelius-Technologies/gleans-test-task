'use client';
import { useState } from 'react';

import { Content } from 'src/types/model';

import Collections from './Collections';
import ContentDetails from './ContentDetails';

const defaultContent: Content = {
  title: 'Very very long title or collection name',
  tags: [],
  collections: [],
  description:
    'This is where a detailed scraped description would appear in a glean or collection. If it gets too long, it will start to fade out so that editors can think free and edit the text if needed.',
};

const Step2 = () => {
  const [collectionOpen, setCollectionsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<Content>(defaultContent);

  const handleContentUpdate = (content: Partial<Content>) => {
    setContent((prev) => ({ ...prev, ...content }));
  };

  const onCollectionSave = (collections: string[]) => {
    setContent((prev) => ({ ...prev, collections }));
    setCollectionsOpen(false);
  };

  const toggleCollections = () => setCollectionsOpen((prev) => !prev);

  return (
    <div className='fixed top-0 left-0 min-h-screen w-full flex flex-col items-center justify-between pt-16 px-7'>
      {collectionOpen ? (
        <Collections
          defaultCollections={content.collections}
          onSave={onCollectionSave}
        />
      ) : (
        <ContentDetails
          content={content}
          toggleCollections={toggleCollections}
          onContentUpate={handleContentUpdate}
        />
      )}
    </div>
  );
};

export default Step2;
