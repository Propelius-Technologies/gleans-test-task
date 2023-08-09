'use client';
import { FC, useState } from 'react';

import Icon from 'src/components/shared/Icon';

interface Props {
  title: string;
  onSelect?: (x: string) => void;
  onUnselect?: (x: string) => void;
}

const Tag: FC<Props> = ({ title, onSelect, onUnselect }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const handleSelect = () => {
    setSelected(true);

    onSelect && onSelect(title);
  };

  const handleUnselect = () => {
    setSelected(false);
    onUnselect && onUnselect(title);
  };

  return (
    <div className='bg-ga-grey bg-opacity-10 rounded-full bg flex text-sm gap-x-2 items-center px-3 h-9 text-white font-primary'>
      {title}
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

export default Tag;
