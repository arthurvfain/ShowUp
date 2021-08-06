// import {useHistory, Link} from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function EventCard({event}){

    return (
        <Card className = 'text-center' style={{ maxWidth: '18rem'  }}>
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