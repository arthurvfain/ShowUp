import {useHistory, Link} from 'react-router-dom'

function EventCard({event}){

    let history = useHistory()

    function handleClick()
    {
        history.push(`/event_page/${event.id}`)
    }

    return (
        <>
            <li>{event.name}</li>
            <li>{event.location}</li>
            <li>{event.time}</li>
            {/* <button onClick={handleClick}>Event Page</button>  */}
            <Link to={`/event_page/${event.id}`}>Event Page</Link>
        </>  
    )
}
export default EventCard