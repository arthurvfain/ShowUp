import UserEvents from "./UsersEvents";
import PendingInvitations from './PendingInvitations'
import {useState, useEffect} from 'react'

function UserDashboard({currentUser}){

    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch(`/event_users/${currentUser.id}`).then(r=>r.json()).then(data=>{
            setEvents(data)
            setLoading(false)
        })
    }, [])

    return (
        <>
            <UserEvents loading={loading} events={events}/>
            <PendingInvitations setEvents={setEvents} events={events} currentUser={currentUser}/>
        </>
    )

}
export default UserDashboard