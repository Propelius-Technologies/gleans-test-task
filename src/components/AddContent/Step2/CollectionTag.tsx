import { FC, ReactNode } from 'react';

import { Collection } from 'src/types/model';

interface Props {
  selected: boolean;
  children: ReactNode;
  collection: Collection;
  onClick: (title: Collection) => void;
}

const CollectionTag: FC<Props> = ({
  selected,
  children,
  onClick,
  collection,
}) => {
  return (
    <div
      onClick={() => onClick(collection)}
      className={`rounded-full select-none p-6 cursor-pointer flex items-center text-white text-opacity-50 justify-center ${
        selected ? 'bg-ga-grey bg-opacity-10 opa text-opacity-100' : ''
      } h-9`}
    >
      {children}
    </div>
  );
};

export default CollectionTag;
