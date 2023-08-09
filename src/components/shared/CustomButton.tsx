import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import textStyles from 'src/styles/typography.module.css';

type ButtonColor = 'primary' | 'secondary';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props {
  children: ReactNode;
  color: ButtonColor;
}

const getButtonColor = (color: ButtonColor) => {
  switch (color) {
    case 'primary':
      return 'bg-white text-black';
    case 'secondary':
      return 'bg-ga-button-grey text-whtie text-opacity-30';
  }
};

const CustomButton: FC<Props & ButtonProps> = ({
  children,
  color,
  ...props
}) => {
  return (
    <button
      className={`rounded-full ${getButtonColor(
        color
      )}  px-5 py-3 capitalize font-primary ${textStyles.button}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
