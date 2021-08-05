import Loading from './Loading'
import Invitation from './Invitation'
import {useState, useEffect} from 'react'

function EventInvitations({currentUser, setEvents, events}) {
    
    const [loading, setLoading] = useState(true)
    const [invitations, setInvitations] = useState([])

    useEffect(() => {
        fetch(`/invitations/${currentUser.id}`).then(r=>r.json()).then(data=>{
            setInvitations(data)
            setLoading(false)
        })
        
    }, [])

    function acceptInvite(id, inviteeId, eventId) {
        fetch(`/accept_invite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({invite_id: id, user_id: inviteeId, event_id: eventId})
        })
        .then(resp => resp.json())
        .then((data) => {
            let newEvents = [...events, data.event]
            setEvents(newEvents)
            let newInvitations = invitations.filter(inv => inv.event_id !== eventId)
            setInvitations(newInvitations)
        })
    }

    function rejectInvite(id) {
        fetch(`/invitations/${id}`, {
            method: 'DELETE'
        })
        // .then(resp => resp.json())
        .then(() => {
            let newInvitations = invitations.filter(inv => inv.id !== id)
            setInvitations(newInvitations)
        })
    }

    return (
    <>
    <h1>You're Invited !</h1>
    {loading ? <Loading /> : invitations.length > 0 ? invitations.map(invitation => <Invitation invitation={invitation} acceptInvite={acceptInvite} rejectInvite={rejectInvite}/>) : <li>Start Your Own</li>}
    </>
    )
}
export default EventInvitations