import Loading from './Loading'
import {useState, useEffect} from 'react'

function UserEvents({currentUser}) {
    
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
    <h1>My Events</h1>
    {loading ? <Loading /> : events.length > 0 ? events.map(event => <li>{event.name}</li>) : <li>Get Yourself Out There</li>}
    </>
    )
}
export default UserEvents