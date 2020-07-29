import React from 'react';
import Logo from '../../assets/img/mflix_logo.png';
import './styles.css';
import ButtonLink from '../ButtonLink';
import { Link } from 'react-router-dom';

const Menu: React.FC = () => {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo MFlix"/>
      </Link>

      <ButtonLink className="ButtonLink" to="/add/video">
        New video
      </ButtonLink>
    </nav>
  );
};

export default Menu;
