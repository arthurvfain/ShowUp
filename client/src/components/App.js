import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import NavBar from './NavBar'
import SignUp from './Signup'
import Login from './Login'
import UserHome from './UserHome'
import BrowseUsers from './BrowseUsers'
import BrowsePublicEvents from './BrowsePublicEvents'
import UserPage from './UserPage'
import EventPage from './EventPage'
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
      <Route exact path='/user_list'>
        <BrowseUsers currentUser={currentUser}></BrowseUsers>
      </Route>
      <Route exact path='/public_events'>
        <BrowsePublicEvents></BrowsePublicEvents>
      </Route>
      <Route exact path='/user_page/:id'>
        <UserPage currentUser={currentUser}/>
      </Route>
      <Route exact path='/event_page/:id'>
        <EventPage currentUser={currentUser}/>
      </Route>
    </Switch>
    </>
  )
}

export default App;
