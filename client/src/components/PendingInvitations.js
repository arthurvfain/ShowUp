import EventInvitations from './EventInvitations'
import FriendRequests from './FriendRequests'

function PendingInvitations({currentUser, setEvents, events}){
    return (
        <>
            <EventInvitations setEvents={setEvents} events={events} currentUser={currentUser}/>
            <FriendRequests currentUser={currentUser}/>
        </>
    )
}
export default PendingInvitations;