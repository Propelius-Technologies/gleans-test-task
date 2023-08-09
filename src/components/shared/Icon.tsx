import { FC } from 'react';

interface Props {
  name: string;
  className?: string;
  color?: string;
}

const Icon: FC<Props> = ({ name, className, color = 'inherit' }) => {
  switch (name) {
    case 'image_icon':
      return (
        <svg
          className={className}
          viewBox='0 0 23 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 18.7505C19.0484 18.7505 19.5726 18.7505 19.9861 18.5602C20.5374 18.3064 20.9754 17.8195 21.2038 17.2069C21.375 16.7475 21.375 16.165 21.375 15.0002'
            stroke={color}
            strokeOpacity='0.9'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M1 15.625C1 16.6733 1 17.1975 1.1903 17.611C1.44404 18.1623 1.93101 18.6004 2.54359 18.8287C3.00302 19 3.58545 19 4.75031 19M17.2504 1C18.4153 1 18.9974 1 19.4568 1.17127C20.0694 1.39963 20.556 1.83763 20.8097 2.38894C21 2.80243 21 3.32663 21 4.375M1 4.37498C1 3.32661 1 2.80243 1.1903 2.38894C1.44404 1.83763 1.93101 1.39963 2.54359 1.17127C3.00302 1 3.58545 1 4.75031 1'
            stroke={color}
            strokeOpacity='0.9'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M5 13.125L8.17857 9.64836C8.46107 9.33937 8.60205 9.1849 8.7697 9.12918C8.91681 9.08029 9.07813 9.08135 9.2245 9.13216C9.3913 9.19005 9.52992 9.34632 9.80782 9.65897L11.5854 11.6588C11.8447 11.9506 11.9741 12.0964 12.1319 12.1551C12.2704 12.2066 12.4239 12.2131 12.5669 12.1736C12.7296 12.1285 12.8728 11.9943 13.1593 11.7257L13.4907 11.415C13.7823 11.1416 13.9281 11.0049 14.0932 10.9602C14.2382 10.921 14.3928 10.9291 14.5323 10.983C14.6911 11.0445 14.8202 11.1955 15.0779 11.4975L17 13.7501M16.9997 6.99997V13C16.9997 13.7 16.9998 14.0501 16.8545 14.3175C16.7267 14.5527 16.5224 14.7439 16.2716 14.8637C15.9864 15 15.6133 15 14.8665 15H7.13341C6.38669 15 6.01305 15 5.72785 14.8637C5.47697 14.7439 5.27315 14.5527 5.14532 14.3175C5 14.0501 5 13.7 5 13V6.99997C5 6.2999 5 5.94992 5.14532 5.68253C5.27315 5.44732 5.47697 5.25608 5.72785 5.13624C6.01305 5 6.38669 5 7.13341 5H14.8665C15.6133 5 15.9864 5 16.2716 5.13624C16.5224 5.25608 16.7267 5.44732 16.8545 5.68253C16.9998 5.94992 16.9997 6.2999 16.9997 6.99997ZM12.9998 8.75C12.6316 8.75 12.3331 8.47018 12.3331 8.125C12.3331 7.77982 12.6316 7.5 12.9998 7.5C13.368 7.5 13.6664 7.77982 13.6664 8.125C13.6664 8.47018 13.368 8.75 12.9998 8.75Z'
            stroke={color}
            strokeOpacity='0.9'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );

    case 'add':
      return (
        <svg
          className={className}
          viewBox='0 0 8 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect x='3' width='2' height='8' rx='1' fill={color} />
          <rect
            x='8'
            y='3'
            width='2'
            height='8'
            rx='1'
            transform='rotate(90 8 3)'
            fill={color}
          />
        </svg>
      );

    case 'remove':
      return (
        <svg
          className={className}
          viewBox='0 0 8 2'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='8'
            width='2'
            height='8'
            rx='1'
            transform='rotate(90 8 0)'
            fill={color}
          />
        </svg>
      );

    case 'collection_icon':
      return (
        <svg
          className={className}
          viewBox='0 0 12 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect y='6' width='5' height='4' rx='1' fill={color} />
          <rect width='5' height='4' rx='1' fill={color} />
          <rect x='7' y='6' width='5' height='4' rx='1' fill={color} />
          <rect x='7' width='5' height='4' rx='1' fill={color} />
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;
