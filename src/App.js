import React from 'react'
import { Route } from 'react-router-dom'

import SignIn from './components/signOn/SignIn'
import CharacterList from './components/characters/CharacterList'

function App() {
  return (
    <div>
      <Route exact path='/' component={SignIn} />
      <Route path='/character-list' component={CharacterList} />
    </div>
  );
}

export default App;