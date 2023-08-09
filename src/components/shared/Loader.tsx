import { FC } from 'react';
import { FiLoader } from 'react-icons/fi';

interface Props {
  className?: string;
}

const Loader: FC<Props> = ({ className }) => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <FiLoader
        className={`animate-spin text-opacity-100 ${className || ''}`}
      />
    </div>
  );
};

export default Loader;
