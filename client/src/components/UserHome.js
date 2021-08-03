import FriendsList from './FriendsList'
import UserDashboard from './UserDashboard'
import {Switch, Route, Link} from 'react-router-dom'

function UserHome({currentUser}) {
    return (
    <>
        <h1>{currentUser.username}'s Home Page</h1>
        <Link to='/home'>Dashboard</Link>
        <Link to='/home/friends'>Friends List</Link>
        
        <Switch>
            <Route exact path='/home'>
                <UserDashboard currentUser={currentUser}/>
            </Route>
            <Route exact path='/home/friends'>
                <FriendsList currentUser={currentUser}/>
            </Route>    
        </Switch>
    </>
    )
}

export default UserHome