// import FriendsList from './FriendsList'
// import UserDashboard from './UserDashboard'
// import CreateEvent from './CreateEvent'
// import BrowsePublicEvents from './BrowsePublicEvents'
// import EventPage from './EventPage'
// import UserPage from './UserPage'
// import {Switch, Route, Link, BrowserRouter} from 'react-router-dom'

// function UserHome({currentUser}) {
//     return (
//     <>
//         <h1>{currentUser.username}'s Home Page</h1>
//         <Switch>
//             <Route exact path='/home'>
//                 <UserDashboard currentUser={currentUser}/>
//             </Route>
//             <Route exact path='/home/friends'>
//                 <FriendsList currentUser={currentUser}/>
//             </Route>
//             <Route exact path='/home/create_event'>
//                 <CreateEvent currentUser={currentUser}/>
//             </Route>
//             <Route exact path='/home/public_events'>
//                 <BrowsePublicEvents/>
//             </Route>
//             <Route exact path='/event_page/:id'>
//                 <EventPage currentUser={currentUser}/>
//             </Route>
//             <Route exact path='/user_page/:id'>
//                 <UserPage currentUser={currentUser}/>
//             </Route>
//         </Switch>
//     </>
//     )
// }

// export default UserHome