import Loading from './Loading'
import Invitation from './Invitation'
import {useState, useEffect} from 'react'
import { Grid }  from '@material-ui/core/'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

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
    {/* {loading ? <Loading /> : invitations.length > 0 ? invitations.map(invitation => <Invitation invitation={invitation} acceptInvite={acceptInvite} rejectInvite={rejectInvite}/>) : <li>Start Your Own</li>} */}
    {loading ? <Loading /> : invitations.length > 0 ? <Grid container justifyContent='center' spacing={2}>{invitations.map(invitation => <Grid item xs={6} sm={3} key={invitation.id}><Invitation invitation={invitation} acceptInvite={acceptInvite} rejectInvite={rejectInvite}/></Grid>)}</Grid> : <LinkContainer to='/public_events'><Button>Get Out There !</Button></LinkContainer>}
    </>
    )
}
export default EventInvitations