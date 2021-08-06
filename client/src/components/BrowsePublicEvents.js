import {useEffect, useState} from 'react'
import Loading from './Loading'
import EventCard from './EventCard'
import { Grid } from '@material-ui/core'

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
        <div className='pageContent'>
            <h1>Public Events</h1>
            {loading ? <Loading /> : <Grid container justifyContent='center' spacing={2}>{eventList.map(event => <Grid item xs={6} sm={3} key={event.id}><EventCard event={event}/></Grid>)}</Grid>}
        </div>
    )
}

export default BrowsePublicEvents