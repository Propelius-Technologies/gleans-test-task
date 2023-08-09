'use client';
import { collections } from '@/constants/dummy.constants';
import { FC, useState } from 'react';

import CustomButton from 'src/components/shared/CustomButton';

import textStyles from 'src/styles/typography.module.css';
import CollectionTag from './CollectionTag';

interface Props {
  onSave: (selectedCollections: string[]) => void;
}

const Collections: FC<Props> = ({ onSave }) => {
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);

  const handleSelectCollection = (collectionToAdd: string) => {
    let newCollections: string[] = [...selectedCollections];

    if (selectedCollections.includes(collectionToAdd)) {
      newCollections = newCollections.filter(
        (collection) => collection !== collectionToAdd
      );
    } else {
      newCollections = [...newCollections, collectionToAdd];
    }

    setSelectedCollections(newCollections);
  };

  const handleSave = () => {
    onSave(selectedCollections);
  };

  return (
    <>
      <div className={`flex flex-col items-center`}>
        <h3
          className={`${textStyles.heading_1} capitalize text-white text-opacity-50 font-primary pb-2`}
        >
          Collections
        </h3>
      </div>
      <div className='flex flex-col gap-y-5 items-center'>
        {collections.map((collection) => (
          <CollectionTag
            key={collection}
            collection={collection}
            onClick={handleSelectCollection}
            selected={selectedCollections.includes(collection)}
          >
            {collection}
          </CollectionTag>
        ))}
      </div>
      <div className='flex pb-12'>
        <CustomButton onClick={handleSave} color='primary'>
          Save
        </CustomButton>
      </div>
    </>
  );
};

export default Collections;
