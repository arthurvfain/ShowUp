import EventInvitations from './EventInvitations'
import FriendRequests from './FriendRequests'

function PendingInvitations({currentUser}){
    return (
        <>
            <h1>Pending Invitations</h1>
            <EventInvitations currentUser={currentUser}/>
            <FriendRequests currentUser={currentUser}/>
        </>
    )
}
export default PendingInvitations;