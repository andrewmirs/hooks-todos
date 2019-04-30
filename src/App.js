import React, { useContext } from 'react';
import { UserContext } from './index';

function App() {

  const value = useContext(UserContext);

  return (
    <div>Hello, {value}</div>
  );
}

export default App;
