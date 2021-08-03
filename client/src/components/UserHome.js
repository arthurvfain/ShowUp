import FriendsList from './FriendsList'

function UserHome({currentUser}) {
    return (
    <>
        <h1>{currentUser.username}'s Home Page</h1>
        <FriendsList currentUser={currentUser}/>
    </>
    )
}

export default UserHome