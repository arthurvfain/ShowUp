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
    const [attendees, setAttendees] = useState([])
    const [error, setError] = useState('')
    
    
    useEffect(() => {
        fetch(`/events/${params.id}`).then(r=>r.json()).then((data) => {
            setEvent(data)
            setLoading(false)
            setAttendees(data.users)
            if(data.users.some(user => user.id === currentUser.id)) {
                setAttending(true)
            }
            if(currentUser) {
                let newInvitables = currentUser.friends.filter(friend => !data.users.some(user => user.id === friend.id))
                let newestInvitables = newInvitables.filter(friend => !data.invitations.some(inv => inv.inviter_id === currentUser.id && inv.invitee_id === friend.id))
                setInvitables(newestInvitables)
            }
        })
    }, [])

    function attend() {
        fetch('/event_users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                event_id: event.id
            })
        })
        .then(() => {
            setAttending(true)
            let newAttendees = [...attendees, currentUser]
            setAttendees(newAttendees)
        })
    }

    function flakeOut() {
        fetch(`/flakeout/${currentUser.id}/${event.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setAttending(false)
            let newAttendees = attendees.filter(att => att.id !== currentUser.id)
            setAttendees(newAttendees)
        })
    }

    function inviteGuest(e) {
        e.preventDefault()

        if(e.target.friend.value !== 'default') {
        let friendID = parseInt(e.target.friend.value)

        fetch('/invitations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inviter_id: currentUser.id,
                invitee_id: friendID,
                event_id: event.id
            })
        })
        .then(resp => resp.json())
        .then(() => {
            setError('')
            let newInvitables = invitables.filter(inv => inv.id !== friendID)
            setInvitables(newInvitables)
        })
    } else {
        setError('Please select a friend to invite!')
    }

    }

    function eventPageDetails(event){
        return (
            <>
                <h1>{event.name}</h1>
                {currentUser ? attending ? <><h2>You are attending this event</h2><button onClick={() => flakeOut()}>Dont Wanna Go</button></> : <button onClick={() => attend()}>Attend Event!</button> : null }
                <h2>{event.location}</h2>
                <h2>{event.time}</h2>
                <h2>Attendees:</h2>
                <ul>
                    {attendees.map(user => <FriendCard friend={user}/>)}
                </ul>
                {currentUser && attending ?
                    <form onSubmit={(e) => inviteGuest(e)}>
                        <label>Invite Friend:</label>
                        <select name='friend' defaultValue='default'>
                            <option disabled value='default'>---</option>
                            {invitables.map(inv => <option value={inv.id}>{inv.username}</option>)}
                        </select>
                        <input type='submit'/>
                    </form> : null}
                {error ? <li>{error}</li> : null}
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
    