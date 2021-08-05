import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loading from './Loading'
import FriendCard from './FriendCard'

function EventPage({currentUser}){
    
    const params = useParams();

    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState({})
    const [attending, setAttending] = useState(false)
    const [invitables, setInvitables] = useState([])
    
    
    useEffect(() => {
        fetch(`/events/${params.id}`).then(r=>r.json()).then((data) => {
            setEvent(data)
            setLoading(false)
            console.log(data)
            console.log(currentUser)
            if(data.users.some(user => user.id === currentUser.id)) {
                setAttending(true)
            }
            
            let newInvitables = currentUser.friends.filter(friend => !data.users.some(user => user.id === friend.id))
            setInvitables(newInvitables)
        })
    }, [])

    function attend() {

    }

    function flakeOut() {

    }

    function inviteGuest() {

    }

    function eventPageDetails(event){
        return (
            <>
                <h1>{event.name}</h1>
                {attending ? <button onClick={() => flakeOut()}>Dont Wanna Go</button> : <button onClick={() => attend()}>Attend Event!</button>}
                <h2>{event.location}</h2>
                <h2>{event.time}</h2>
                <h2>Attendees:</h2>
                <ul>
                    {event.users.map(user => <FriendCard friend={user}/>)}
                </ul>
                <label>Invite Friend:</label>
                <select>
                    <option>Default</option>
                    {invitables.map(inv => <option>{inv.username}</option>)}
                </select>
            </>
        )
    }

    return (
        <div>
            {loading ? <Loading/> : eventPageDetails(event)}
        </div>
    )
}
export default EventPage
    