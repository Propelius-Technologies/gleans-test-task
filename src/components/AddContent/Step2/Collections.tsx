'use client';
import { FC, useEffect, useState } from 'react';

import { Collection } from 'src/types/model';
import { collections } from 'src/constants/dummy.constants';
import supabase from 'src/supabase/supabas.utils';

import CustomButton from 'src/components/shared/CustomButton';
import CollectionTag from './CollectionTag';

import textStyles from 'src/styles/typography.module.css';

interface Props {
  defaultCollections: Collection[];
  onSave: (selectedCollections: Collection[]) => void;
}

const Collections: FC<Props> = ({ onSave, defaultCollections }) => {
  const [selectedCollections, setSelectedCollections] =
    useState<Collection[]>(defaultCollections);

  useEffect(() => {
    const fetch = async () => {
      const res = await supabase.from('collections').select('*');
      console.log(res);
    };

    fetch();
  }, []);

  const handleSelectCollection = (collectionToAdd: Collection) => {
    let newCollections: Collection[] = [...selectedCollections];

    if (selectedCollections.includes(collectionToAdd)) {
      newCollections = newCollections.filter(
        (collection) => collection.id !== collectionToAdd.id
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
            key={collection.id}
            collection={collection}
            onClick={handleSelectCollection}
            selected={selectedCollections.includes(collection)}
          >
            {collection.name}
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
