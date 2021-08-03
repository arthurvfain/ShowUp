import logo from '../logo.svg';
import '../App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import SignUp from './Signup'
import Login from './Login'
import UserHome from './UserHome'
import {useState} from 'react'

function App() {
  const [currentUser, setCurrentUser] = useState('')

  return (
    <>
    <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser}/>
    <Switch>
      <Route exact path='/signup'>
        <SignUp setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path='/login'>
        <Login setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path='/home'>
        <UserHome currentUser={currentUser}/>
      </Route>
    </Switch>
    </>
  )
}

export default App;
