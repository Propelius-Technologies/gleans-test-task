'use client';
import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
        {collections.map((collection, i) => (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ opacity: [0, 1], y: 0 }}
            transition={{ delay: 0.08 * i }}
            exit={{ x: '-100%', opacity: 0 }}
            key={collection.id}
          >
            <CollectionTag
              collection={collection}
              onClick={handleSelectCollection}
              selected={selectedCollections.includes(collection)}
            >
              {collection.name}
            </CollectionTag>
          </motion.div>
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
