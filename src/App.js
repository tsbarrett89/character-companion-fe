import React from 'react'
import { Route } from 'react-router-dom'

import './app.scss'

import Header from './components/Header'
import SignIn from './components/authorization/SignIn'
import CharacterList from './components/characters/CharacterList'
import CharacterSheet from './components/characters/characterSheet/characterSheet'

function App() {
  return (
    <div className="app">
      <Header />
      
      <Route exact path='/login' component={SignIn} />
      <Route path='/character-list' component={CharacterList} />
      <Route path='/character-sheet/:characterName' component={CharacterSheet} />
    </div>
  );
}

export default App;