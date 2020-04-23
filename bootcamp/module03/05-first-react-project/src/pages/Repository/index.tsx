import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  respository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <h1>Repository: {params.respository}</h1>;
};

export default Repository;
