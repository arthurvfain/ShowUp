import Loading from './Loading'
import {useState, useEffect} from 'react'

function UserEvents({events, loading}) {
    

    return (
    <>
    <h1>My Events</h1>
    {loading ? <Loading /> : events.length > 0 ? events.map(event => <li>{event.name}</li>) : <li>Get Yourself Out There</li>}
    </>
    )
}
export default UserEvents