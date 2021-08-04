import {useEffect, useState} from 'react'
import Loading from './Loading'

function BrowsePublicEvents() {
    const [eventList, setEventList] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch('/events').then(r=>r.json()).then((data) => {
            setEventList(data)
            setLoading(false)
        })
    }, [])

    //const filteredEvents = eventList.filter(event => event.public == true)
    //WARNING: This is insecure, we should instead do a fetch for only public events

    return (
        <>
            <h1>Public Events</h1>
            {loading ? <Loading /> : eventList.map(event => <li key={event.id}>{event.name}</li>)}
        </>
    )
}

export default BrowsePublicEvents