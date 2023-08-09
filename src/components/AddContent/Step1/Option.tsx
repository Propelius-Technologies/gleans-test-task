import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { FC } from 'react';
import textStyles from 'src/styles/typography.module.css';

interface Props {
  title: string;
  description: string;
  src: string | StaticImport;
  onClick?: () => void;
}

const Option: FC<Props> = ({ title, description, src, onClick }) => {
  return (
    <div onClick={onClick} className='w-32'>
      <Image src={src} alt='' className='w-full aspect-square' />
      <h5
        className={`${textStyles.subtitle_1_bold} font-primary text-center text-white py-3`}
      >
        {title}
      </h5>
      <p
        className={`${textStyles.subtitle_1_normal} font-primary text-center text-white text-opacity-70`}
      >
        {description}
      </p>
    </div>
  );
};

export default Option;
