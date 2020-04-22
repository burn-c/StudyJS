import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github_logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositories on Github</Title>

      <Form>
        <input placeholder="Enter the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/54965836?s=460&v=4"
            alt="Carlos Oliveira"
          />

          <div>
            <strong>burnseat/unform</strong>
            <p>Teste mais tetes... mais testes... mais testes</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/54965836?s=460&v=4"
            alt="Carlos Oliveira"
          />

          <div>
            <strong>burnseat/unform</strong>
            <p>Teste mais tetes... mais testes... mais testes</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/54965836?s=460&v=4"
            alt="Carlos Oliveira"
          />

          <div>
            <strong>burnseat/unform</strong>
            <p>Teste mais tetes... mais testes... mais testes</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/54965836?s=460&v=4"
            alt="Carlos Oliveira"
          />

          <div>
            <strong>burnseat/unform</strong>
            <p>Teste mais tetes... mais testes... mais testes</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
