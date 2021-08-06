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
import FriendsList from './FriendsList'
import UserDashboard from './UserDashboard'
import CreateEvent from './CreateEvent'
import {useState, useEffect} from 'react'
import HomeLogo from './HomeLogo'
import Footer from './Footer'

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
      <Route exact path='/'>
        <HomeLogo />
      </Route>
      <Route exact path='/signup'>
        <SignUp setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path='/login'>
        <Login setCurrentUser={setCurrentUser}/>
      </Route>
      <Route exact path='/home'>
        <UserDashboard currentUser={currentUser}/>
      </Route>
      <Route exact path='/user_list'>
        <BrowseUsers currentUser={currentUser}></BrowseUsers>
      </Route>
      <Route exact path='/public_events'>
        <BrowsePublicEvents></BrowsePublicEvents>
      </Route>
      <Redirect from={`/x_user_page/:id`} to={`/user_page/:id`} />
      <Route exact path='/user_page/:id'>
        <UserPage currentUser={currentUser}/>
      </Route>
      <Route exact path='/event_page/:id'>
        <EventPage currentUser={currentUser}/>
      </Route>
      <Route exact path='/friends'>
        <FriendsList currentUser={currentUser}/>
      </Route>
      <Route exact path='/create_event'>
        <CreateEvent currentUser={currentUser}/>
      </Route>
    </Switch>
    <Footer />
    </>
  )
}

export default App;
