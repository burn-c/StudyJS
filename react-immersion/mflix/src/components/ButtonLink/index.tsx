import React from 'react';
import Button from '../Button';

interface IButtonProps {
  className?: string;
  to: string;
}

const ButtonLink: React.FC<IButtonProps> = ({ className, to, children, ...props }) => {
  return (

    <Button className={className} to={to}>
        {children}
      </Button>
  );
}

export default ButtonLink;
