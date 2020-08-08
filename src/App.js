import React from 'react'
import { Route } from 'react-router-dom'

import Register from './components/Register'
import Login from './components/Login'

function App() {
  return (
    <div>
      <Register />
      <Login />
    </div>
  );
}

export default App;