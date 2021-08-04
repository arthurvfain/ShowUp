import Loading from './Loading'
import EventCard from './EventCard'
import {useState, useEffect} from 'react'

function UserEvents({events, loading}) {
    

    return (
    <>
    <h1>My Events</h1>
    {loading ? <Loading /> : events.length > 0 ? events.map(event => <EventCard event={event}/>) : <li>Get Yourself Out There</li>}
    </>
    )
}
export default UserEvents