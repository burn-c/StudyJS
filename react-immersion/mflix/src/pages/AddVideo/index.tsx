import React from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';

const AddVideo: React.FC = () => {
  return (
    <Container>
      <h1>Add new video</h1>
      <Link to="/add/category">New category</Link>
    </Container>
  );
}

export default AddVideo;
