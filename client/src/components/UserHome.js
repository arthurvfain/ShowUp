import FriendsList from './FriendsList'
import UserDashboard from './UserDashboard'
import CreateEvent from './CreateEvent'
import {Switch, Route, Link} from 'react-router-dom'

function UserHome({currentUser}) {
    return (
    <>
        <h1>{currentUser.username}'s Home Page</h1>
        <Link to='/home'>Dashboard</Link>
        <Link to='/home/friends'>Friends List</Link>
        <Link to='/home/create_event'>Create an Event</Link>
        
        <Switch>
            <Route exact path='/home'>
                <UserDashboard currentUser={currentUser}/>
            </Route>
            <Route exact path='/home/friends'>
                <FriendsList currentUser={currentUser}/>
            </Route>
            <Route exact path='/home/create_event'>
                <CreateEvent currentUser={currentUser}/>
            </Route>    
        </Switch>
    </>
    )
}

export default UserHome