// import {useHistory, Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function EventCard({event}){

    // let history = useHistory()

    // function handleClick()
    // {
    //     history.push(`/event_page/${event.id}`)
    // }

    return (
        <Card className = 'text-center' style={{ width: '18rem'  }}>
            <Card.Header as="h3">{event.name}</Card.Header>
            <Card.Body>
                <Card.Title>{event.location}</Card.Title>
                <Card.Text>{event.time}</Card.Text>
                <LinkContainer to={`/event_page/${event.id}`}><Button variant="primary">Event Page</Button></LinkContainer>
            </Card.Body>
        </Card>
    )
}
export default EventCard