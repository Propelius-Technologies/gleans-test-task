'use client';
import { FC, useState } from 'react';

import { Tag } from 'src/types/model';

import Icon from 'src/components/shared/Icon';

interface Props {
  tag: Tag;
  onSelect?: (x: Tag) => void;
  onUnselect?: (x: Tag) => void;
}

const TagChip: FC<Props> = ({ onSelect, onUnselect, tag }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleSelect = () => {
    setSelected(true);

    onSelect && onSelect(tag);
  };

  const handleUnselect = () => {
    setSelected(false);
    onUnselect && onUnselect(tag);
  };

  return (
    <div className='bg-ga-grey bg-opacity-10 rounded-full bg flex text-sm gap-x-2 items-center px-3 h-9 text-white font-primary'>
      {tag.name}
      <div className=' items-center flex gap-x-2'>
        {' '}
        {!selected && (
          <>
            {' '}
            <div onClick={handleSelect}>
              <Icon name='add' className='w-2 h-2' color='#00FF85' />
            </div>
            <div
              style={{ width: 1, height: 13 }}
              className='bg-white bg-opacity-10'
            />
          </>
        )}
        <div onClick={handleUnselect}>
          <Icon name='remove' className='w-2 h-2' color='#B9B9B9' />
        </div>
      </div>
    </div>
  );
};

export default TagChip;
