import {useHistory} from 'react-router-dom'

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
            <button onClick={handleClick}>Event Page</button> 
        </>  
    )
}
export default EventCard