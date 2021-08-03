import Loading from './Loading'
import Invitation from './Invitation'
import {useState, useEffect} from 'react'

function EventInvitations({currentUser}) {
    
    const [loading, setLoading] = useState(true)
    const [invitations, setInvitations] = useState([])
    
    useEffect(() => {
        fetch(`/invitations/${currentUser.id}`).then(r=>r.json()).then(data=>{
            setInvitations(data)
            setLoading(false)
        })
        
    }, [])

    return (
    <>
    <h1>You're Invited !</h1>
    {loading ? <Loading /> : invitations.length > 0 ? invitations.map(invitation => <Invitation invitation={invitation}/>) : <li>Start Your Own</li>}
    </>
    )
}
export default EventInvitations