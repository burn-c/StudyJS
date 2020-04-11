import React, { useState } from 'react';

import './App.css';
import background from './assets/street.jpeg';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Frontend', 'Backend']);

  function handleAddProject() {
    const newProject = `Novo projeto ${Date.now()}`;
    setProjects([...projects, newProject ]);

    console.log(projects);
  }


  return (
    <>
    <Header title="Homepage" />

    <img width={100} src={background} alt="Background"/>

    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Add project</button>

    </>
  );
}

export default App;
