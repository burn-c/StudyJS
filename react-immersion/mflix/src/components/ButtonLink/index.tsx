import React from 'react';
import Button from '../Button';

interface IButtonProps {
  className?: string;
  href: string;
}

const ButtonLink: React.FC<IButtonProps> = ({ className, href, children, ...props }) => {
  return (

    <Button as="a" className={className} href={href}>
        {children}
      </Button>
  );
}

export default ButtonLink;
