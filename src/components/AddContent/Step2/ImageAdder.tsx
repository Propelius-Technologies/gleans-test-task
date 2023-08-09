'use client';
import Icon from 'src/components/shared/Icon';
import { useState } from 'react';
/* @ts-ignore */
import { ColorExtractor } from 'react-color-extractor';

import { getGradientColors } from 'src/utils/colors.utils';

import textStyles from 'src/styles/typography.module.css';
import { getRandomEmojies } from '@/utils/content.utils';

const ImageAdder = () => {
  const [gradientColors, setColors] = useState<string[]>([]);

  const extractColors = (hex: string) => {
    const colors = getGradientColors(hex);
    console.log({ colors });

    setColors(colors);
  };

  return (
    <div
      className='bg-cover w-60 aspect-square rounded-3xl flex flex-col gap-y-4 items-center justify-center'
      style={{
        background: `radial-gradient(121.30% 121.30% at 50.43% -0.00%, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%), rgba(0, 0, 0, 0.20)`,
      }}
    >
      <ColorExtractor
        getColors={(colors: string[]) => {
          extractColors(colors[0]);
        }}
      >
        <img src={getRandomEmojies()} className='h-20 w-20' alt='' />
      </ColorExtractor>
      <div className='flex items-center gap-x-3 px-6'>
        <Icon
          name='image_icon'
          className='grow w-10 h-5 text-white'
          color='white'
        />
        <p
          className={`grow-0 leading-3 font-primary ${textStyles.subtitle_1_bold} text-white text-opacity-50`}
        >
          Paste or tap to change into an image or video.
        </p>
      </div>
    </div>
  );
};

export default ImageAdder;
