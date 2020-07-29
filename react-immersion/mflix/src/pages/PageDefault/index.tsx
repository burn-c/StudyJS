import React from 'react';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import { Container } from './styles';

const PageDefault: React.FC = ({ children }) => {
  return (
    <>
      <Menu />
        <Container>
          {children}
        </Container>
      <Footer />
    </>
  );
}

export default PageDefault;
