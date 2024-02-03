import { Route } from 'wouter'
import Header from './components/Header'
import Beginner from './pages/Beginner'
import Intermediate from './pages/Intermediate'
import Advanced from './pages/Advanced'

import './App.css'


function App() {

  return (
    <>
      <Header/>
      <Route path="/beginner" component={Beginner} />
      <Route path="/intermediate" component={Intermediate} />
      <Route path="/advanced" component={Advanced} />
    </>
  )
}

export default App
