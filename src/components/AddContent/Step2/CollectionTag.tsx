import { FC, ReactNode } from 'react';

interface Props {
  selected: boolean;
  children: ReactNode;
  collection: string;
  onClick: (title: string) => void;
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
