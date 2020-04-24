import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github_logo.svg';

import { Header, RepositoryInfo } from './styles';

interface RepositoryParams {
  respository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="" alt="" />
          <div>
            <strong />
            <p />
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        {issues.map((issue) => (
          <Link key={issue.full_name} to={`/repositories/${issue.full_name}`}>
            <div>
              <strong>{issue.full_name}</strong>
              <p>{issue.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
