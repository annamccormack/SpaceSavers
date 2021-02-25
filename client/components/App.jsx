import React from 'react'
import { Route } from 'react-router-dom'
import '../styles/main.css'

import Home from './Home'
import Header from './Header'

const App = () => {
  return (
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Home} />
      <button className='btn'></button>
    </div>
  )
}

export default App
