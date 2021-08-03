import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import SignUp from './Signup'
import Login from './Login'
import UserHome from './UserHome'
import {useState, useEffect} from 'react'

function App() {
  
  const [currentUser, setCurrentUser] = useState('')
  
  useEffect(() => {
    fetch('/me').then(r=>r.json()).then(user=>{
      if (user)
      {
        setCurrentUser(user)
      }
    })
  }, [])

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
        <BrowserRouter><UserHome currentUser={currentUser}/></BrowserRouter>
      </Route>
    </Switch>
    </>
  )
}

export default App;
