import React from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'
import SignIn from './components/signOn/SignIn'
import CharacterList from './components/characters/CharacterList'

function App() {
  return (
    <div>
      <Header />
      
      <Route exact path='/login' component={SignIn} />
      <Route path='/character-list' component={CharacterList} />
    </div>
  );
}

export default App;