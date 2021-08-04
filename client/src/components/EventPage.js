import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Loading from './Loading'

function EventPage({currentUser}){
    
    const params = useParams();

    const [loading, setLoading] = useState(true)
    const [event, setEvent] = useState({})
    
    
    useEffect(() => {
        fetch(`/events/${params.id}`).then(r=>r.json()).then((data) => {
            setEvent(data)
            setLoading(false)
        })
    }, [])

    function eventPageDetails(event){
        return (
            <h1>{event.name}</h1>
        )
    }

    return (
        <div>
            {loading ? <Loading/> : true ? <button>Dont Wanna Go</button> : <button>Attend Event!</button>}
        </div>
    )
}
export default EventPage
    