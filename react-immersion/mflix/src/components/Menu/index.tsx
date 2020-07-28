import React from 'react';
import Logo from '../../assets/img/mflix_logo.png';
import './styles.css';
import ButtonLink from '../ButtonLink';

const Menu: React.FC = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo MFlix"/>
      </a>

      <ButtonLink className="ButtonLink" href="/">
        New video
      </ButtonLink>
    </nav>
  );
};

export default Menu;
