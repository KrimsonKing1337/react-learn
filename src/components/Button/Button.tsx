import * as React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, ...rest }: Props) => {
  return (
    <button type={'button'} {...rest}>
      {label}
    </button>
  );
};
