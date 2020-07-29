import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

const AddCategory: React.FC = () => {
  return (
    <Container>
      <h1>Add new category</h1>

      <Link to="/">go to Home</Link>

    </Container>
  );
}

export default AddCategory;
