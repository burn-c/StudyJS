import React, { useState } from 'react';

interface IUser {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const [user,setUser] = useState<IUser>();

  async function loadData() {
    const response = await fetch('http://api.github.com/users/burnc');
    const data = await response.json();

    setUser(data);
  }
  return (
   <div>
     {user?.name}
   </div>
  );
}

export default App;
